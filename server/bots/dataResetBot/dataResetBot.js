const cron = require('node-cron');
const moment = require('moment-timezone');
const Admin = require('../../models/adminModel');
const BotLog = require('../../models/botLogModal');
const { DataResetBotCronConfig } = require("../../botCronConfig");

cron.schedule(DataResetBotCronConfig.sampleAdminDataRate, async () => {
  try {
      const deleteResult = await Admin.deleteMany({});
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
        status:'Success',
        log: `Deleted ${deleteResult.deletedCount} admin documents and inserted ${insertedAdminData.length} admin documents successfully`,
        ranDate: ranDate,
      };
      const insertedBotLog = await BotLog.create(botLogData);
      console.log('Bot log added for admin data manipulation:', insertedBotLog);
    
  } catch (error) {
    console.error('Error deleting/inserting admin data:', error);

    // Set error timestamp to Asia/Kolkata time zone
    const ranDateError = moment.tz('Asia/Kolkata').format('YYYY-MM-DD hh:mm:ss A');

    // Adding error log to the bot log
    const errorBotLogData = {
      botName: 'DataResetBot',
      status:'Failed',
      log: `DataResetBot Failed: ${error.message}`,
      ranDate: ranDateError,
    };
    const insertedErrorBotLog = await BotLog.create(errorBotLogData);
    console.log('Error :', insertedErrorBotLog);
  }
}, {
  timezone: DataResetBotCronConfig.timezone
});


