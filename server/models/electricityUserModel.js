const mongoose = require("mongoose");

const electricityBillSchema = new mongoose.Schema({
  accountNo: { type: String, required: true },
  email: { type: String, required: true },
  month: { type: String, required: true },
  date:{ type: String, required: true },
  totalUnits: { type: Number, required: true },
  monthlyElecBill: { type: Number, required: true },
});



module.exports = mongoose.model("ElectricityBill", electricityBillSchema);
