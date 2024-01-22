const DataResetBotCronConfig = {
    sampleAdminDataRate: '0 0 * * ? ', //Daily at 12:00 AM
    timezone: 'Asia/Kolkata'
};

const BotLogClearBotCronConfig = {
    scheduleRate: '*/30 * * * *', //Every 30min
    timezone: 'Asia/Kolkata'
};

module.exports = { DataResetBotCronConfig , BotLogClearBotCronConfig };