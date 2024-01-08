const BotLog = require("../../models/botLogModal")
const cron = require('node-cron');
const { BotLogClearBotCronConfig } = require("../../botCronConfig");


cron.schedule(BotLogClearBotCronConfig.scheduleRate, async () => {
    try {
        const count = await BotLog.countDocuments();

        if (count > 10) {
            await BotLog.deleteMany({});
            console.log('Deleted all Bot Logs.');
        } else {
            console.log('Bot Logs count is not greater than 10.');
        }
    } catch (err) {
        console.error('Error:', err);
    }
}, {
    timezone: BotLogClearBotCronConfig.timezone
});