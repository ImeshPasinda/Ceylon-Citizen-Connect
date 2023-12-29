const express = require('express');
const router = express.Router();
const ElectricityBill = require('../models/electricityUserModel');

// Create a new electricity bill entry
router.post('/', async (req, res) => {
  try {
    const newElectricityBill = new ElectricityBill(req.body);
    const savedElectricityBill = await newElectricityBill.save();
    res.status(201).json(savedElectricityBill);
    // Assuming you want to send a success message, you should only send one response.
    // The line below is removed to prevent sending multiple responses.
    // res.send("Electricity e-bill activation sent successfully");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all electricity bills
router.get('/', async (req, res) => {
  try {
    const electricityBills = await ElectricityBill.find();
    res.status(200).json(electricityBills);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a specific electricity bill by ID
router.get('/:id', async (req, res) => {
  try {
    const electricityBill = await ElectricityBill.findById(req.params.id);
    if (!electricityBill) {
      return res.status(404).json({ error: 'Electricity bill not found' });
    }
    res.status(200).json(electricityBill);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a specific electricity bill by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedElectricityBill = await ElectricityBill.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedElectricityBill) {
      return res.status(404).json({ error: 'Electricity bill not found' });
    }
    res.status(200).json(updatedElectricityBill);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a specific electricity bill by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedElectricityBill = await ElectricityBill.findByIdAndDelete(req.params.id);
    if (!deletedElectricityBill) {
      return res.status(404).json({ error: 'Electricity bill not found' });
    }
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
