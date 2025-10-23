const User = require("../Models/UserModel");
const jwt = require("jsonwebtoken");

// Secret token directly define kar do (since .env is in backend folder)
const TOKEN_KEY = "your_super_secret_key"; // replace with strong secret

module.exports.userVerification = async (req, res) => {
  try {
    const token = req.cookies?.token;
    if (!token) return res.json({ status: false });

    // jwt.verify promisify version
    const decoded = jwt.verify(token, TOKEN_KEY);

    const user = await User.findById(decoded.id);
    if (user) {
      return res.json({ status: true, user: user.username });
    } else {
      return res.json({ status: false });
    }
  } catch (err) {
    return res.json({ status: false });
  }
};
