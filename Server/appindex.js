const express = require("express");
const cookieParser = require("cookie-parser");
const authRouter = require("./Routes/AuthRoute");

const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRouter); // prefix optional

module.exports = app; // backend/index.js use karega
