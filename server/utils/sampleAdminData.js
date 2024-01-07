const Admin = require('../models/adminModel');


const addsampleAdminData = async () => {
  try {
    try {

      deleteResult = await Admin.deleteMany();
      console.log(`${deleteResult.deletedCount} admin documents deleted.`);
    } catch (deleteError) {
      console.error('Error deleting admin data:', deleteError);
      throw deleteError;
    }

    const sampleAdminData = [
      { AdminName: 'Admin1', AdminEmail: 'admin1@example.com', AdminPassword: '1234' },
      { AdminName: 'Admin2', AdminEmail: 'admin2@example.com', AdminPassword: '1234' },

    ];

    const insertedAdminData = await Admin.insertMany(sampleAdminData);
    console.log('Sample AdminData added successfully:', insertedAdminData);
  } catch (err) {
    console.error('Error adding sample AdminData:', err);
  }
};

module.exports = { addsampleAdminData };


