const express = require("express");
const router = express.Router();
const Admin = require("../models/adminModel")
const cron = require('node-cron');
const { addsampleAdminData } = require('../utils/sampleAdminData');
const { cronConfig } = require("../server");

cron.schedule(cronConfig.sampleAdminData, async () => {
    try {
        await addsampleAdminData();
    } catch (err) {
        console.error('Error running cron job:', err);
    }
}, {
    timezone: cronConfig.timezone
});


router.post("/login", async (req, res) => {

    let { AdminEmail, AdminPassword } = req.body;

    // Convert email to lowercase
    AdminEmail = AdminEmail.toLowerCase();

    try {

        const admin = await Admin.find({ AdminEmail, AdminPassword });

        if (admin.length > 0) {

            const currentAdmin = {
                AdminName: admin[0].AdminName,
                AdminEmail: admin[0].AdminEmail,
                isAdmin: admin[0].isAdmin,
                _id: admin[0]._id
            };
            res.send(currentAdmin);

        }
        else {

            return res.status(400).json({ message: 'Admin Login Failed' });

        }

    } catch (error) {

        return res.status(400).json({ message: 'Something went wrong' });
    }
});


//register new admin
router.post("/addAdmin", async (req, res) => {

    const { AdminName, AdminEmail, AdminPassword } = req.body

    try {

        const adminExit = await Admin.findOne({ AdminEmail })

        if (adminExit) {

            return res.status(400).json({ message: error });

        } else {

            const newAdmin = new Admin({ AdminName, AdminEmail, AdminPassword })
            newAdmin.save()
            res.send('New Administrator Registration Successful !!!')
        }

    } catch (error) {

        return res.status(400).json({ message: error });
    }

})



router.get("/getcurrentadmin/:id", async (req, res) => {

    let adminID = req.params.id;
    try {

        const currentAdmin = await Admin.findById(adminID)
        res.send(currentAdmin)

    } catch (error) {
        return res.status(400).json({ message: error });
    }

})

router.get("/getalladmins", async (req, res) => {


    try {

        const admin = await Admin.find()
        res.send(admin)

    } catch (error) {
        return res.status(400).json({ message: error });
    }
});


router.delete("/delete/admin/:id", async (req, res) => {

    let adminID = req.params.id;

    try {
        await Admin.findByIdAndDelete(adminID)

        res.send('Admin Deleted Successfully')
    }

    catch (error) {


        return res.status(400).json({ message: error });
    }
});

module.exports = router;