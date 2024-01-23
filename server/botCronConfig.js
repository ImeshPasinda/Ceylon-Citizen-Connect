const DataResetBotCronConfig = {
    sampleAdminDataRate: '0 * * * *', //Every hour
    timezone: 'Asia/Kolkata'
};

const BotLogClearBotCronConfig = {
    scheduleRate: '*/30 * * * *', //Every 30 minutes
    timezone: 'Asia/Kolkata'
};

module.exports = { DataResetBotCronConfig , BotLogClearBotCronConfig };