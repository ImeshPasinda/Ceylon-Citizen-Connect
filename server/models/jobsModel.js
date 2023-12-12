const mongoose = require("mongoose");

const jobportalSchema = mongoose.Schema(
  {
    jobtitle: { type: String, require },
    category: { type: String, require },
    ministry: { type: String, require },
    description: { type: String, require },
    salary: { type: String, require },
    location: { type: String, require },
  },
  {
    timestamps: true,
  }
);

const JobPortalModel = mongoose.model("jobs", jobportalSchema);

module.exports = JobPortalModel;


