const mongoose = require("mongoose");

// Define schema for the Services table
const serviceSchema = mongoose.Schema(
  {
    serviceName: { type: String, required: true },
    description: { type: String, required: true },
    contactNumber: { type: String, required: true },
    email: { type: String, required: true },
    officeAddress: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);



module.exports =mongoose.model("Service", serviceSchema);
