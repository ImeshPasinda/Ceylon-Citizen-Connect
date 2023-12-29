const express = require('express');
const router = express.Router();
const WaterSupplyUser = require('../models/waterUserModel'); // Corrected import statement

// Post
router.post('/', async (req, res) => {
    try {
        const newUser = new WaterSupplyUser(req.body);
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Route to get all data by email
router.get("/waterbills/:email", async (req, res) => {
    const { email } = req.params;
  
    try {
      // Find all data that matches the provided email
      const waterBills = await WaterSupplyUser.find({ email });
  
      if (!waterBills || waterBills.length === 0) {
        return res.status(404).json({ message: 'No data found for this email' });
      }
  
      // If data is found, send it as a response
      res.status(200).json(waterBills);
    } catch (error) {
      res.status(500).json({ message: 'Server Error' });
    }
  });
  

// Get all water users
router.get("/", async (req, res) => {
    try {
        const allWaterUsers = await WaterSupplyUser.find();
        res.json(allWaterUsers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get a specific water user by ID
router.get("/:id", async (req, res) => {
    try {
        const waterUser = await WaterSupplyUser.findById(req.params.id);
        if (waterUser) {
            res.json(waterUser);
        } else {
            res.status(404).json({ message: "Water user not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete a water user
router.delete("/:id", async (req, res) => {
    try {
        await WaterSupplyUser.findByIdAndDelete(req.params.id);
        res.json({ message: "Water user deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update a specific water user by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedUser = await WaterSupplyUser.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
