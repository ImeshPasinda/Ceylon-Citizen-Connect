const mongoose = require("mongoose");

const jobApplicantSchema = mongoose.Schema(
  {
    name: { type: String, require },
    email: { type: String, require },
    address: { type: String, require },
    phoneNo: { type: String, require },
    jobTitle: { type: String, require },
    highEdu: { type: String, require },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("jobApplicants", jobApplicantSchema);
