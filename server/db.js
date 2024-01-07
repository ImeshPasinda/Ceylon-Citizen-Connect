const mongoose = require("mongoose");

const mongoURL = process.env.MONGO_URL;

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

const db = mongoose.connection;

db.on('connected', () => {
    console.log(`Mongodb Connection Success!`);
});

db.on('error', () => {
    console.log(`Mongodb Connection failed!`);
});

module.exports = mongoose;
