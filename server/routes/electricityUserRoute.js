const express = require('express');
const router = express.Router();
const ElectricityUser = require('../models/electricityUserModel');

// Create a new electricity user
router.post('/', async (req, res) => {
  try {
    const newUser = new ElectricityUser(req.body);
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all electricity users
router.get('/', async (req, res) => {
  try {
    const users = await ElectricityUser.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a specific electricity user by ID
router.get('/:id', async (req, res) => {
  try {
    const user = await ElectricityUser.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a specific electricity user by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedUser = await ElectricityUser.findByIdAndUpdate(
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

// Delete a specific electricity user by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedUser = await ElectricityUser.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
