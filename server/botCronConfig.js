const DataResetBotCronConfig = {
    sampleAdminDataRate: '0 0 * * *', //Every day at 12:00 AM
    timezone: 'Asia/Kolkata'
};

const BotLogClearBotCronConfig = {
    scheduleRate: '*/30 * * * *', //Every 30 minutes
    timezone: 'Asia/Kolkata'
};

module.exports = { DataResetBotCronConfig , BotLogClearBotCronConfig };