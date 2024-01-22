const DataResetBotCronConfig = {
    sampleAdminDataRate: '*/15 * * * *', //Every 15min
    timezone: 'Asia/Kolkata'
};

const BotLogClearBotCronConfig = {
    scheduleRate: '*/30 * * * *', //Every 30min
    timezone: 'Asia/Kolkata'
};

module.exports = { DataResetBotCronConfig , BotLogClearBotCronConfig };