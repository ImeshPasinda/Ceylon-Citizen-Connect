const mongoose = require("mongoose");

const facilitySchema = mongoose.Schema(
  {
    suburb: { type: String, require },
    facility: { type: String, require },
    empCountry: { type: String, require },
  },
  {
    timestamps: true,
  }
);

const facilityModel = mongoose.model("facilities", facilitySchema);

module.exports = facilityModel;
