const DataResetBotCronConfig = {
    sampleAdminDataRate: '5 4 * * sun', //At 04:05 A.M on Sunday
    timezone: 'Asia/Kolkata'
};

const BotLogClearBotCronConfig = {
    scheduleRate: '0 1 * * *', //Daily 01:00 A.M
    timezone: 'Asia/Kolkata'
};

module.exports = { DataResetBotCronConfig , BotLogClearBotCronConfig };