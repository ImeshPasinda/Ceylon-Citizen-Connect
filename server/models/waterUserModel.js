const mongoose=require("mongoose")

const waterBilSchema=new mongoose.Schema({
    accountName: { type: String, required: true },
    month: { type: String, required: true },
    year:{ type: String, required: true },
    totalUnits: { type: Number, required: true },
    monthlyWaterBill: { type: Number, required: true },
})

const waterUserSchema = mongoose.Schema(
    {
      username: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true },
      waterMeterNumber: { type: String, required: true, unique: true },
      waterBills: [waterBilSchema], // Array of e-bills
  
    },
    {
      timestamps: true,
    }
  );
  
  module.exports = mongoose.model("WaterSupplyUser", waterUserSchema);
  