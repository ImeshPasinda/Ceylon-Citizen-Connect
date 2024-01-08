const mongoose = require("mongoose");
const moment = require('moment-timezone');
const Admin = require('../../models/adminModel');
const BotLog = require('../../models/botLogModal');

const addsampleAdminData = async () => {
  try {
    try {
      const deleteResult = await Admin.deleteMany();
      console.log(`${deleteResult.deletedCount} admin documents deleted.`);

      const sampleAdminData = [
        { AdminName: 'Admin', AdminEmail: 'admin@gmail.com', AdminPassword: '1234' },
       
      ];
      const insertedAdminData = await Admin.insertMany(sampleAdminData);
      console.log('Sample AdminData added successfully:', insertedAdminData);

      // Set timestamp to Asia/Kolkata time zone
      const ranDate = moment.tz('Asia/Kolkata').format('YYYY-MM-DD hh:mm:ss A');

      const botLogData = {
        botName: 'DataResetBot',
        log: `Deleted ${deleteResult.deletedCount} admin documents and inserted ${insertedAdminData.length} admin documents successfully`,
        ranDate: ranDate,
      };
      const insertedBotLog = await BotLog.create(botLogData);
      console.log('Bot log added for admin data manipulation:', insertedBotLog);
    } catch (error) {
      console.error('Error deleting/admin data:', error);

      // Set error timestamp to Asia/Kolkata time zone
      const ranDateError = moment.tz('Asia/Kolkata').format('YYYY-MM-DD hh:mm:ss A');

      // Adding error log to the bot log
      const errorBotLogData = {
        botName: 'DataResetBot',
        log: `DataResetBot Failed: ${error.message}`,
        ranDate: ranDateError,
      };
      const insertedErrorBotLog = await BotLog.create(errorBotLogData);
      console.log('Error added to the bot log:', insertedErrorBotLog);

      throw error;
    }
  } catch (err) {
    console.error('Error adding sample AdminData:', err);
  }
};

module.exports = { addsampleAdminData };
