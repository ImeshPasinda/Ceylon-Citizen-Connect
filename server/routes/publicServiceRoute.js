const express = require("express");
const router = express.Router();
const Service = require("../models/publicServiceModel");

// Create a new service
router.post("/", async (req, res) => {
  const { serviceName, description, contactNumber, email, officeAddress } =
    req.body;

  try {
    const newService = new Service({
      serviceName,
      description,
      contactNumber,
      email,
      officeAddress,
    });
    await newService.save();
    res.json(newService);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all services
router.get("/", async (req, res) => {
  try {
    const allServices = await Service.find();
    res.json(allServices);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a specific service by ID
router.get("/:id", async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (service) {
      res.json(service);
    } else {
      res.status(404).json({ message: "Service not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a service
router.put("/:id", async (req, res) => {
  const { serviceName, description, contactNumber, email, officeAddress } =
    req.body;

  try {
    const updatedService = await Service.findByIdAndUpdate(
      req.params.id,
      { serviceName, description, contactNumber, email, officeAddress },
      { new: true }
    );
    res.json(updatedService);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a service
router.delete("/:id", async (req, res) => {
  try {
    await Service.findByIdAndDelete(req.params.id);
    res.json({ message: "Service deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
