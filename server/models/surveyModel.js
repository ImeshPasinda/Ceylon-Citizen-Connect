const mongoose = require("mongoose")

const surveySchema = new mongoose.Schema({
    question1: String,
    question2: String,
    question3: [String],
    question4: [String],
    question5: [String],
    question6: String,
});

module.exports = mongoose.model("Survey", surveySchema);