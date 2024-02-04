const express = require('express');
const router = express.Router();
const Survey = require('../models/surveyModel'); 


router.post('/add', async (req, res) => {
    try {
      const newData = req.body; 
  
      const newRecord = new Survey(newData);
      await newRecord.save();
  
      res.status(201).json({ message: 'Data saved successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
  

module.exports = router;
