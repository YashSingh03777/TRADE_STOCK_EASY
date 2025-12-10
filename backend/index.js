require('dotenv').config();


const appindex = require("../Server/appindex");  // server backend connectivity 


const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookie = require("cookie-parser");
const bcrypt = require("bcryptjs");


// ✅ New imports
const axios = require("axios");
const NodeCache = require("node-cache");
const moment = require("moment-timezone");

const {HoldingModel} = require('./model/HoldingModel');
const {PositionModel} = require('./model/PositionModel');
const {OrderModel} = require('./model/OrderModel');


const PORT = process.env.PORT || 3002; 
const uri = process.env.MONGO_URL;
const AV_URL = "https://www.alphavantage.co/query";
const AV_API_KEY = process.env.VINTAGE_API_KEY;  // ✅ read key from .env

 const app = express();
const cache = new NodeCache({ stdTTL: 60 }); // cache for 1 minute


app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(cookie());
app.use("/api", appindex);


// app.get('/addHoldings', async (req, res) => {
//     const tempHoldings = [
//         { name: "BHARTIARTL", qty: 2, avg: 538.05, price: 541.15, net: "+0.58%", day: "+2.99%" },
//         { name: "HDFCBANK", qty: 2, avg: 1383.4, price: 1522.35, net: "+10.04%", day: "+0.11%" },
//         { name: "HINDUNILVR", qty: 1, avg: 2335.85, price: 2417.4, net: "+3.49%", day: "+0.21%" },
//         { name: "INFY", qty: 1, avg: 1350.5, price: 1555.45, net: "+15.18%", day: "-1.60%", isLoss: true },
//         { name: "ITC", qty: 5, avg: 202.0, price: 207.9, net: "+2.92%", day: "+0.80%" },
//         { name: "KPITTECH", qty: 5, avg: 250.3, price: 266.45, net: "+6.45%", day: "+3.54%" },
//         { name: "M&M", qty: 2, avg: 809.9, price: 779.8, net: "-3.72%", day: "-0.01%", isLoss: true },
//         { name: "RELIANCE", qty: 1, avg: 2193.7, price: 2112.4, net: "-3.71%", day: "+1.44%" },
//         { name: "SBIN", qty: 4, avg: 324.35, price: 430.2, net: "+32.63%", day: "-0.34%", isLoss: true },
//         { name: "TATAPOWER", qty: 5, avg: 104.2, price: 124.15, net: "+19.15%", day: "-0.24%", isLoss: true },
//         { name: "TCS", qty: 1, avg: 3041.7, price: 3194.8, net: "+5.03%", day: "-0.25%", isLoss: true },
//         { name: "WIPRO", qty: 4, avg: 489.3, price: 577.75, net: "+18.08%", day: "+0.32%" },
//         { name: "HCLTECH", qty: 2, avg: 1045.5, price: 1120.2, net: "+7.21%", day: "+0.50%" },
//         { name: "LICHSGFIN", qty: 3, avg: 495.2, price: 510.1, net: "+3.00%", day: "+0.10%" },
//         { name: "COALINDIA", qty: 2, avg: 180.0, price: 185.2, net: "+2.90%", day: "-0.15%" },
//         { name: "NTPC", qty: 4, avg: 156.5, price: 160.2, net: "+2.38%", day: "+0.20%" },
//         { name: "IOC", qty: 3, avg: 125.4, price: 130.1, net: "+3.74%", day: "-0.30%" },
//         { name: "BPCL", qty: 1, avg: 435.2, price: 440.3, net: "+1.17%", day: "+0.10%" }
//     ];

//     try {
//         // Clear existing holdings
//         await HoldingModel.deleteMany({});
//         console.log("Old holdings cleared.");

//         // Insert all new holdings
//         await HoldingModel.insertMany(tempHoldings);
//         console.log("New holdings added.");

//         res.send("Holdings updated successfully!");
//     } catch (err) {
//         console.error(err);
//         res.status(500).send(`Error updating holdings: ${err.message}`);
//     }
// });


// --- Buy stock ---



// --- Fetch holdings with live prices ---


// ✅ Buy stock


// ✅ Sell stock



// ✅ Buy stock




app.post("/api/buy", async (req, res) => {
  try {
    const { symbol, qty } = req.body;
    if (!symbol || !qty) return res.status(400).json({ error: "symbol and qty required" });

    // --- Fetch latest price from Alpha Vantage ---
    const cacheKey = `${symbol}_latest`;
    let latestPrice = cache.get(cacheKey);

    if (!latestPrice) {
      const { data } = await axios.get(AV_URL, {
        params: {
          function: "TIME_SERIES_INTRADAY",
          symbol,
          interval: "5min",
          apikey: AV_API_KEY,
          outputsize: "compact",
        },
        timeout: 15000,
      });

      if (data.Note || data["Error Message"]) {
        return res.status(429).json({ error: data.Note || data["Error Message"] });
      }

      const tsKey = Object.keys(data).find((k) => k.toLowerCase().includes("time series"));
      if (!tsKey) return res.status(500).json({ error: "No time series data" });

      const latestTimestamp = Object.keys(data[tsKey])[0];
      latestPrice = parseFloat(data[tsKey][latestTimestamp]["4. close"]);
      cache.set(cacheKey, latestPrice, 3600); // 1 hour
    }

    // --- Update holdings in MongoDB ---
    let holding = await HoldingModel.findOne({ name: symbol });
    if (holding) {
      holding.avg = ((holding.avg * holding.qty) + (latestPrice * qty)) / (holding.qty + qty);
      holding.qty += qty;
      holding.price = latestPrice;
      await holding.save();
    } else {
      holding = await HoldingModel.create({ name: symbol, qty, avg: latestPrice, price: latestPrice });
    }

    // --- ✅ Insert into Orders collection ---
    const newOrder = new OrderModel({
      name: symbol,
      qty,
      price: latestPrice,
      mode: "BUY",
    });
    await newOrder.save();

    // --- Return updated holdings ---
    const allHoldings = await HoldingModel.find({});
    res.json({ message: "Stock bought successfully", holdings: allHoldings, order: newOrder });

  } catch (err) {
    console.error("Buy API error:", err.message);
    res.status(500).json({ error: "Server error", details: err.message });
  }
});


// ✅ Sell stock
app.post("/api/sell", async (req, res) => {
  try {
    const { symbol, qty } = req.body;
    if (!symbol || !qty) return res.status(400).json({ error: "symbol and qty required" });

    let holding = await HoldingModel.findOne({ name: symbol });
    if (!holding) return res.status(404).json({ error: "Holding not found" });

    // Get latest price for order record
    const cacheKey = `${symbol}_latest`;
    let latestPrice = cache.get(cacheKey) || holding.price;

    if (qty >= holding.qty) {
      await HoldingModel.deleteOne({ name: symbol });
    } else {
      holding.qty -= qty;
      await holding.save();
    }

    // --- ✅ Insert into Orders collection ---
    const newOrder = new OrderModel({
      name: symbol,
      qty,
      price: latestPrice,
      mode: "SELL",
    });
    await newOrder.save();

    const allHoldings = await HoldingModel.find({});
    res.json({ message: "Stock sold successfully", holdings: allHoldings, order: newOrder });

  } catch (err) {
    console.error("Sell API error:", err.message);
    res.status(500).json({ error: "Server error", details: err.message });
  }
});



app.get("/api/holdings/live", async (req, res) => {
  try {
    const holdings = await HoldingModel.find({});
    const results = await Promise.all(
      holdings.map(async (h) => {
        // fetch live price from cache or Alpha Vantage
        const cacheKey = `${h.name}_latest`;
        let latestPrice = cache.get(cacheKey);

        if (!latestPrice) {
          const { data } = await axios.get(AV_URL, {
            params: {
              function: "TIME_SERIES_INTRADAY",
              symbol: h.name,
              interval: "5min",
              apikey: AV_API_KEY,
              outputsize: "compact",
            },
            timeout: 15000,
          });
          const tsKey = Object.keys(data).find((k) => k.toLowerCase().includes("time series"));
          if (!tsKey) return h; // fallback to DB price
          const latestTimestamp = Object.keys(data[tsKey])[0];
          latestPrice = parseFloat(data[tsKey][latestTimestamp]["4. close"]);
          cache.set(cacheKey, latestPrice, 3600);
        }

        // calculate day change, P&L
        const curVal = latestPrice * h.qty;
        const profitLoss = curVal - (h.avg * h.qty);
        return {
          ...h._doc,
          price: latestPrice,
          curVal,
          profitLoss,
          isLoss: profitLoss < 0,
        };
      })
    );

    res.json(results);
  } catch (err) {
    console.error("Live holdings fetch error:", err.message);
    res.status(500).json({ error: "Server error", details: err.message });
  }
});



app.get('/addPositions', async (req, res) => {
    const tempPositions = [
        { product: "CNC", name: "Reliance", qty: 2, avg: 316.27, price: 312.35, net: "+0.58%", day: "-1.24%", isLoss: true },
        { product: "CNC", name: "TCS", qty: 1, avg: 3124.75, price: 3082.65, net: "+10.04%", day: "-1.35%", isLoss: true },
        { product: "CNC", name: "Infosys", qty: 2, avg: 316.27, price: 312.35, net: "+0.58%", day: "-1.24%", isLoss: true },
        { product: "CNC", name: "HDFC Bank", qty: 1, avg: 3124.75, price: 3082.65, net: "+10.04%", day: "-1.35%", isLoss: true },
        { product: "CNC", name: "ICICI Bank", qty: 2, avg: 316.27, price: 312.35, net: "+0.58%", day: "-1.24%", isLoss: true },
        { product: "CNC", name: "Wipro", qty: 1, avg: 3124.75, price: 3082.65, net: "+10.04%", day: "-1.35%", isLoss: true },
        { product: "CNC", name: "Larsen & Toubro", qty: 2, avg: 316.27, price: 312.35, net: "+0.58%", day: "-1.24%", isLoss: true },
        { product: "CNC", name: "HCL Tech", qty: 1, avg: 3124.75, price: 3082.65, net: "+10.04%", day: "-1.35%", isLoss: true },
        { product: "CNC", name: "Axis Bank", qty: 2, avg: 316.27, price: 312.35, net: "+0.58%", day: "-1.24%", isLoss: true },
        { product: "CNC", name: "Bajaj Finance", qty: 1, avg: 3124.75, price: 3082.65, net: "+10.04%", day: "-1.35%", isLoss: true },
        { product: "CNC", name: "Maruti Suzuki", qty: 2, avg: 316.27, price: 312.35, net: "+0.58%", day: "-1.24%", isLoss: true },
        { product: "CNC", name: "Hero MotoCorp", qty: 1, avg: 3124.75, price: 3082.65, net: "+10.04%", day: "-1.35%", isLoss: true },
        { product: "CNC", name: "Sun Pharma", qty: 2, avg: 316.27, price: 312.35, net: "+0.58%", day: "-1.24%", isLoss: true },
        { product: "CNC", name: "Dr. Reddy's", qty: 1, avg: 3124.75, price: 3082.65, net: "+10.04%", day: "-1.35%", isLoss: true },
        { product: "CNC", name: "Asian Paints", qty: 2, avg: 316.27, price: 312.35, net: "+0.58%", day: "-1.24%", isLoss: true },
        { product: "CNC", name: "Tata Steel", qty: 1, avg: 3124.75, price: 3082.65, net: "+10.04%", day: "-1.35%", isLoss: true },
        { product: "CNC", name: "Kotak Mahindra", qty: 2, avg: 316.27, price: 312.35, net: "+0.58%", day: "-1.24%", isLoss: true },
        { product: "CNC", name: "NTPC", qty: 1, avg: 3124.75, price: 3082.65, net: "+10.04%", day: "-1.35%", isLoss: true }
    ];

    try {
        await PositionModel.deleteMany({});
        await PositionModel.insertMany(tempPositions);
        console.log("18 positions added successfully.");
        res.send("18 positions added successfully!");
    } catch (err) {
        console.error(err);
        res.status(500).send(`Error adding positions: ${err.message}`);
    }
});



app.post('/newOrder', async (req, res) => {
  console.log("Body received:", req.body);

  let newOrder = new OrderModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  await newOrder.save();

  res.json({ message: "Order saved successfully", order: newOrder });
});



const UserData = require("./UserData"); // import your model

// Save form submission
app.post("/api/form/submit", async (req, res) => {
  try {
    const { amount, experience, duration, sector } = req.body;

    // ✅ Validation
    if (!amount || !experience || !duration || !sector) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Save to database
    const submission = new UserData({ amount, experience, duration, sector });
    await submission.save();

    res.json({ success: true, message: "Form submitted successfully!", submission });
  } catch (err) {
    console.error("Form submit error:", err);
    res.status(500).json({ success: false, error: "Server error", details: err.message });
  }
});


// Get all submissions + total count
app.get("/api/form/submissions", async (req, res) => {
  try {
    const submissions = await UserData.find().sort({ createdAt: -1 });
    const count = await UserData.countDocuments();
    res.json({ success: true, count, submissions });
  } catch (err) {
    console.error("Get submissions error:", err);
    res.status(500).json({ success: false, error: "Server error", details: err.message });
  }
});



app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionModel.find({});
  res.json(allPositions);
});


app.get("/allOrders", async (req, res) => {
  let allOrders = await OrderModel.find({});
  res.json(allOrders);
});


const User = mongoose.models.User || mongoose.model(
  "User",
  new mongoose.Schema({
    username: String,
    email: String,
    password: String,
  })
);


app.post("/api/auth/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ error: "All fields required" });
    }

    // 🔑 Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    res.json({ message: "Signup successful", user: newUser });
  } catch (err) {
    res.status(500).json({ error: "Server error", details: err.message });
  }
});



app.post("/api/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // 🔑 Compare hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    res.json({
      message: "Login successful",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (err) {
    res.status(500).json({ error: "Server error", details: err.message });
  }
});



app.get("/api/intraday", async (req, res) => {
  try {
    const {
      symbol,
      interval = "5min",
      adjusted = "true",
      extended_hours = "true",
      outputsize = "compact",
      month,
      datatype = "json",
    } = req.query;

    if (!symbol) {
      return res.status(400).json({ error: "symbol query param required" });
    }

    // --- Cache check ---
    const cacheKey = `${symbol}_${interval}_${outputsize}_${month || "recent"}`;
    const cached = cache.get(cacheKey);
    if (cached) return res.json(cached);

    // --- Build request params ---
    const params = {
      function: "TIME_SERIES_INTRADAY",
      symbol,
      interval,
      apikey: AV_API_KEY,
      adjusted,
      extended_hours,
      outputsize,
      datatype,
    };
    if (month) params.month = month;

    // --- Fetch data from Alpha Vantage ---
    const { data } = await axios.get(AV_URL, { params, timeout: 15000 });

    // --- Handle API errors / rate limits ---
    if (data.Note || data["Error Message"]) {
      return res.status(429).json({ error: data.Note || data["Error Message"] });
    }

    // --- Optional: normalize timestamps to UTC ---
    if (datatype === "json") {
      const tsKey = Object.keys(data).find((k) =>
        k.toLowerCase().includes("time series")
      );
      if (tsKey) {
        const normalized = {};
        for (const [ts, ohlc] of Object.entries(data[tsKey])) {
          const utc = moment
            .tz(ts, "YYYY-MM-DD HH:mm:ss", "America/New_York")
            .toISOString();
          normalized[utc] = ohlc;
        }
        data.normalizedTimeSeries = normalized;
      }
    }

    // --- Save to cache & return ---
    cache.set(cacheKey, data);
    res.json(data);

  } catch (err) {
    console.error("Intraday API error:", err.message);
    res.status(500).json({ error: "Server error", details: err.message });
  }
});

// ✅ Fetch all holdings (basic route)
app.get("/api/holdings", async (req, res) => {
  try {
    const holdings = await HoldingModel.find({});
    res.json(holdings);
  } catch (err) {
    console.error("Error fetching holdings:", err);
    res.status(500).json({ error: "Server error", details: err.message });
  }
});


// ✅ Fetch all holdings (basic route)
app.get("/api/holdings", async (req, res) => {
  try {
    const holdings = await HoldingModel.find({});
    res.json(holdings);
  } catch (err) {
    console.error("Error fetching holdings:", err);
    res.status(500).json({ error: "Server error", details: err.message });
  }
});



app.listen(PORT, () => {
    console.log("Server is running yet...");
    mongoose.connect(uri);
    console.log("DB connected");
});


