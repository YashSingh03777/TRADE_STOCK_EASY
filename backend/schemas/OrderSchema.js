const { Schema, model } = require("mongoose");

const OrderSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  qty: {
    type: Number,
    required: true,
    min: 1,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  mode: {
    type: String,
    required: true,
    enum: ["BUY", "SELL"], // ✅ only allows BUY or SELL
  },
  timestamp: {
    type: Date,
    default: Date.now, // ✅ adds created time
  },
});

const OrderModel = model("orders", OrderSchema);

module.exports = { OrderModel };
