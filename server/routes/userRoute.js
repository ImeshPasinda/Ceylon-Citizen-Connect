const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

router.post('/register', async (req, res) => {
  try {
    const { watermNo, elecmNo, email } = req.body;

    // Check uniqueness for non-null values
    const existingUserWithWatermNo = await User.findOne({ watermNo: { $ne: null, $eq: watermNo } });
    const existingUserWithElecmNo = await User.findOne({ elecmNo: { $ne: null, $eq: elecmNo } });
    const existingUserWithEmail = await User.findOne({ email });

    if (existingUserWithWatermNo || existingUserWithElecmNo || existingUserWithEmail) {
      return res.status(400).json({ message: 'Duplicate field value found' });
    }

    // If uniqueness checks pass, create the user
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});



router.post("/", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExit = await User.findOne({ email });

    if (userExit) {
      return res.status(400).json({ message: error });
    } else {
      const newUser = new User({ name, email, password });
      newUser.save();
      res.send("Customer added Successfully");
    }
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

   // Convert email to lowercase
   email = email.toLowerCase();

  try {
    const user = await User.find({ email, password });

    if (user.length > 0) {
      const currentUser = {
        name: user[0].name,
        email: user[0].email,
        isWaterEbill: user[0].isWaterEbill,
        isElecEbill: user[0].isElecEbill,
        _id: user[0]._id,
      };
      res.send(currentUser);
    } else {
      return res.status(400).json({ message: "User Login Failed" });
    }
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong" });
  }
});

router.get("/:id", async (req, res) => {
  let userId = req.params.id;
  try {
    const currentusers = await User.findById(userId);
    res.send(currentusers);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

//customer management delete function
router.delete("/:id", async (req, res) => {
  let userId = req.params.id;

  try {
    await User.findByIdAndDelete(userId);

    res.send("Customer Deleted Successfully");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.put("/update/password/:id", async (req, res) => {
  let userId = req.params.id;
  const { password } = req.body;

  const updateUserPassword = {
    password,
  };

  try {
    await User.findByIdAndUpdate(userId, updateUserPassword);
    res.send("User Password Updated Successfully");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.put("/update/name/:id", async (req, res) => {
  let userId = req.params.id;
  const { name } = req.body;

  const updateUserName = {
    name,
  };

  try {
    await User.findByIdAndUpdate(userId, updateUserName);
    res.send("User Name Updated Successfully");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.put("/update/email/:id", async (req, res) => {
  let userId = req.params.id;
  const { email } = req.body;

  const updateUserEmail = {
    email,
  };

  try {
    await User.findByIdAndUpdate(userId, updateUserEmail);
    res.send("User Email Updated Successfully");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

//customer management update function

router.put("/update/customer/name/:id", async (req, res) => {
  let userId = req.params.id;
  const { name } = req.body;

  const updateCustomerName = {
    name,
  };

  try {
    await User.findByIdAndUpdate(userId, updateCustomerName);
    res.send("Customer Name Updated Successfully");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.put("/update/customer/email/:id", async (req, res) => {
  let userId = req.params.id;
  const { email } = req.body;

  const updateCustomerEmail = {
    email,
  };

  try {
    const userExit = await User.findOne({ email });

    if (userExit) {
      res.send("Customer Email already registered");
    } else {
      await User.findByIdAndUpdate(userId, updateCustomerEmail);
      res.send("Customer Email Updated Successfully");
    }
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.put("/update/customer/password/:id", async (req, res) => {
  let userId = req.params.id;
  const { password } = req.body;

  const updateCustomerPassword = {
    password,
  };

  try {
    await User.findByIdAndUpdate(userId, updateCustomerPassword);
    res.send("Customer Password Updated Successfully");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.put("/update/customer/verification/:id", async (req, res) => {
  let userId = req.params.id;
  const { isVerified } = req.body;

  const updateisVerified = {
    isVerified,
  };

  try {
    await User.findByIdAndUpdate(userId, updateisVerified);
    res.send("Customer verification Updated Successfully");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

// PUT route to update user by email for water e-bill purpose
router.put("/update/webill/:email", async (req, res) => {
  const { email } = req.params; // Get email from URL params
  const { phone, isWaterEbill, address, watermNo } = req.body; // Get updated fields from request body

  try {
    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update the user fields if they exist in the request body
    if (phone) {
      user.phone = phone;
    }
    if (isWaterEbill !== undefined) {
      user.isWaterEbill = isWaterEbill;
    }
    if (address) {
      user.address = address;
    }
    if (watermNo) {
      user.watermNo = watermNo;
    }

    // Save the updated user
    await user.save();

    res.json({ message: "User updated successfully", user });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to update user", error: err.message });
  }
});

router.put("/update/elecbill/:email", async (req, res) => {
  const { email } = req.params; // Get email from URL params
  const { phone, isElecEbill, address, elecmNo } = req.body; // Get updated fields from request body

  try {
    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update the user fields if they exist in the request body
    if (phone) {
      user.phone = phone;
    }
    if (isElecEbill !== undefined) {
      user.isElecEbill = isElecEbill;
    }
    if (address) {
      user.address = address;
    }
    if (elecmNo) {
      user.elecmNo = elecmNo;
    }

    // Save the updated user
    await user.save();

    res.json({ message: "User updated successfully", user });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to update user", error: err.message });
  }
});

// Route to find a user by watermNo
router.get('/find-by-watermNo/:watermNo', async (req, res) => {
  try {
    const { watermNo } = req.params;

    const user = await User.findOne({ watermNo });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to find a user by elecmNo
router.get('/find-by-elecmNo/:elecmNo', async (req, res) => {
  try {
    const { elecmNo } = req.params;

    const user = await User.findOne({ elecmNo });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
