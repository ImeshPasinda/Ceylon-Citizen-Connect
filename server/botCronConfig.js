const DataResetBotCronConfig = {
    sampleAdminDataRate: '0 * * * *', //Every Hour
    timezone: 'Asia/Kolkata'
};

const BotLogClearBotCronConfig = {
    scheduleRate: '*/30 * * * *', //Every 30min
    timezone: 'Asia/Kolkata'
};

module.exports = { DataResetBotCronConfig , BotLogClearBotCronConfig };