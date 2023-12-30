const express = require("express");
const router = express.Router();
const ElectricityBill = require("../models/electricityUserModel");

// Post
router.post('/', async (req, res) => {
  try {
      const newUser = new ElectricityBill(req.body);
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
});

// Get all electricity bills
router.get("/", async (req, res) => {
  try {
    const electricityBills = await ElectricityBill.find();
    res.status(200).json(electricityBills);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a specific electricity bill by ID
router.get("/:id", async (req, res) => {
  try {
    const electricityBill = await ElectricityBill.findById(req.params.id);
    if (!electricityBill) {
      return res.status(404).json({ error: "Electricity bill not found" });
    }
    res.status(200).json(electricityBill);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a specific electricity bill by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedElectricityBill = await ElectricityBill.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedElectricityBill) {
      return res.status(404).json({ error: "Electricity bill not found" });
    }
    res.status(200).json(updatedElectricityBill);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a specific electricity bill by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedElectricityBill = await ElectricityBill.findByIdAndDelete(
      req.params.id
    );
    if (!deletedElectricityBill) {
      return res.status(404).json({ error: "Electricity bill not found" });
    }
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to get all data by email
router.get("/elecbills/:email", async (req, res) => {
  const { email } = req.params;

  try {
    // Find all data that matches the provided email
    const elecBills = await ElectricityBill.find({ email });

    if (!elecBills || elecBills.length === 0) {
      return res.status(404).json({ message: "No data found for this email" });
    }

    // If data is found, send it as a response
    res.status(200).json(elecBills);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
