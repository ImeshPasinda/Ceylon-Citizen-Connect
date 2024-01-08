const BotLog = require("../../models/botLogModal")
const cron = require('node-cron');
const { BotLogClearBotCronConfig } = require("../../botCronConfig");

cron.schedule(BotLogClearBotCronConfig.scheduleRate, async () => {
    try {
        const count = await BotLog.countDocuments();

        if (count > 10) {
            const deleteResult = await BotLog.deleteMany({});
            console.log(`Deleted ${deleteResult.deletedCount} Bot Logs.`);

            const ranDate = moment.tz('Asia/Kolkata').format('YYYY-MM-DD hh:mm:ss A');

            const botLogData = {
                botName: 'BotLogClearBot',
                log: `Deleted ${deleteResult.deletedCount} Bot Logs.`,
                ranDate: ranDate,
            };
            const insertedBotLog = await BotLog.create(botLogData);
            console.log('Bot log added after clearing Bot Logs:', insertedBotLog);
        } else {
            console.log('Bot Logs count is not greater than 10.');
        }
    } catch (err) {
        const ranDateError = moment.tz('Asia/Kolkata').format('YYYY-MM-DD hh:mm:ss A');

        const errorBotLogData = {
            botName: 'BotLogClearBot',
            log: `BotLogClearBot Failed: ${err.message}`,
            ranDate: ranDateError,
        };
        const insertedErrorBotLog = await BotLog.create(errorBotLogData);
        console.log('Error added to the bot log:', insertedErrorBotLog);
    }
}, {
    timezone: BotLogClearBotCronConfig.timezone
});