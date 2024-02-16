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

// get all unique job categories
router.get("/categories", async (req, res) => {
  try {
    let categories = await Jobs.distinct("category");

    // Append 'All' to the categories array
    categories.unshift('All');

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

router.get('/find/:categories', async (req, res) => {
  const { categories } = req.params;
  const categoryArray = categories.split(',');

  try {
    if (categoryArray.includes('All')) {
      // If 'All' is selected, retrieve all job titles
      const allJobTitles = await Jobs.distinct('jobtitle');
      res.json(allJobTitles);
    } else {
      // Retrieve job titles based on selected categories
      const currentCategories = await Jobs.find({ category: { $in: categoryArray } });

      if (currentCategories.length === 0) {
        res.status(404).json({ message: 'No records found' });
      } else {
        // Extract job titles from the currentCategories array
        const jobTitles = currentCategories.map(job => job.jobtitle);
        res.json(jobTitles);
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});






module.exports = router;
