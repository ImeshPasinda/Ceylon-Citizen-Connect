const mongoose = require("mongoose");

const electricityBillSchema = new mongoose.Schema({
  accountName: { type: String, required: true },
  month: { type: String, required: true },
  year:{ type: String, required: true },
  totalUnits: { type: Number, required: true },
  monthlyBill: { type: Number, required: true },
});

const electricityUserSchema = mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    electricityMeterNumber: { type: String, required: true, unique: true },
    electricityBills: [electricityBillSchema], // Array of e-bills

  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("ElectricityUser", electricityUserSchema);
