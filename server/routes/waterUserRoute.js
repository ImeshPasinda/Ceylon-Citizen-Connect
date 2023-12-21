const express=require('express');
const router=express.Router();
const WaterSupplyUser=require('../models/waterUserModel')


//post
router.post('/',async(req,res)=>{
    try {
        const newUser=new WaterSupplyUser(req.body);
        const savedUser=await newUser.save();
        res.status(201).json(savedUser);
        res.send("water e-bill activation send Successfully");
    } catch ( error) {
        res.status(400).json({error:error.message});
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

// Update a specific electricity user by ID
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