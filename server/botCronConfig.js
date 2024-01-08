const DataResetBotCronConfig = {
    sampleAdminDataRate: '0 0 * * 0', //Weekly At 00:00 A.M on Sunday
    timezone: 'Asia/Kolkata'
};

const BotLogClearBotCronConfig = {
    scheduleRate: '0 1 * * *', //Daily 01:00 A.M
    timezone: 'Asia/Kolkata'
};

module.exports = { DataResetBotCronConfig , BotLogClearBotCronConfig };