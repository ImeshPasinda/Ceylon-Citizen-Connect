const express = require("express");
const router = express.Router();
const Facilities = require("../models/facilityModel");


// get all unique suburbs for a specific empCountry
router.get("/all/:empCountry", async (req, res) => {
    try {
      const empCountry = req.params.empCountry;
  
      let suburbs = await Facilities.distinct("suburb", { empCountry: empCountry });
  
      // Append 'All' to the suburbs array
      suburbs.unshift('All');
  
      res.send(suburbs);
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  });

  router.get('/filter/:suburbs/:empCountry', async (req, res) => {
    const { suburbs, empCountry } = req.params;
    const suburbsArray = suburbs.split(',');
  
    try {
      if (suburbsArray.includes('All')) {
        // If 'All' is selected, retrieve all facilities based on empCountry
        const allFacilities = await Facilities.find({ empCountry });
        const uniqueFacilities = Array.from(new Set(allFacilities.map(facility => facility.facility)));
        res.json(uniqueFacilities);
      } else {
        // Retrieve facilities based on selected suburbs and empCountry
        const currentSuburbs = await Facilities.find({ suburb: { $in: suburbsArray }, empCountry });
  
        if (currentSuburbs.length === 0) {
          res.status(404).json({ message: 'No records found' });
        } else {
          // Extract facilities from the currentSuburbs array
          const facilities = currentSuburbs.map(job => job.facility);
          res.json(facilities);
        }
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  


module.exports = router;
