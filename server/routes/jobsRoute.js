const express = require("express");
const router = express.Router();
const Jobs = require("../models/jobsModel");

router.post("/", async (req, res) => {
  const { jobtitle, category, ministry, description, salary, location } =
    req.body;

  try {
    // Creating a new job object and saving it in the database
    const newJobs = new Jobs({
      jobtitle,
      category,
      ministry,
      description,
      salary,
      location,
    });
    await newJobs.save(); // Add await here
    res.status(201).json({ message: "Job posted successfully!" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
});

//get all unique job categories
router.get("/categories", async (req, res) => {
  try {
    const categories = await Jobs.distinct("category");
    res.send(categories);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

//update 
router.put("/:id", async (req, res) => {
  let userId = req.params.id;
  const { jobtitle, category, ministry,description, salary, location } = req.body;

  const updateJobs = {
    jobtitle,
    category,
    ministry,
    description,
    salary,
    location,
  };

  try {
    await Jobs.findByIdAndUpdate(userId, updateJobs);
    res.send("Job details updated successfully!");
  } catch (error) {
    // Returning error message if any error occurs during job update

    return res.status(400).json({ message: error });
  }
});

router.delete("/:id", async (req, res) => {
  let JobID = req.params.id;

  try {
    await Jobs.findByIdAndDelete(JobID);

    res.send("Job Deleted Successfully");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

//get current jobs
router.get("/:id", async (req, res) => {
  let jobsId = req.params.id;
  try {
    const currentjobs = await Jobs.findById(jobsId);
    res.send(currentjobs);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.get('/find/:category', async (req, res) => {
  const { category } = req.params;

  try {
    const currentCategory = await Jobs.find({ category });

    if (currentCategory.length === 0) {
      res.status(404).json({ message: 'No' });
    } else {
      // Extract job titles from the currentCategory array
      const jobTitles = currentCategory.map(job => job.jobtitle);
      
      res.json(jobTitles);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});




module.exports = router;
