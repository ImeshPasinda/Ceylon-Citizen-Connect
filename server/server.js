const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config();

const app = express();
const db = require('./db')
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

//Bots
const dataResetBot = require('./bots/dataResetBot/dataResetBot')
const botLogClearBot = require('./bots/botLogClearBot/botLogClearBot')

const userRoute = require('./routes/userRoute')
const adminRoute = require('./routes/adminRoute')
const feedbackRoute = require('./routes/feedbackRoute')
const newsfeedRoute = require('./routes/newsfeedRoute')
const jobsRoute=require('./routes/jobsRoute')
const JobApplyRoute=require('./routes/JobApplyRoute')
const publicServiceRoute=require('./routes/publicServiceRoute')
const electricityUserRoute=require('./routes/electricityUserRoute')
const WaterUserRoute=require('./routes/waterUserRoute')
const SurveyRoute=require('./routes/surveyRoute')
const FacilityRoute=require('./routes/facilityRoute')

app.use('/api/feedback/', feedbackRoute)
app.use('/api/users/', userRoute)
app.use('/api/admins/', adminRoute)
app.use('/api/newsfeed/', newsfeedRoute)
app.use('/api/jobportal/',jobsRoute)
app.use('/api/jobapply/',JobApplyRoute)
app.use('/api/publicservice/',publicServiceRoute)
app.use('/api/electricityUser/',electricityUserRoute)
app.use('/api/waterUser/',WaterUserRoute)
app.use('/api/survey/',SurveyRoute)
app.use('/api/facilities/',FacilityRoute)

app.get("/", (req, res) => {

    res.send("Server Working!");

});


const port = process.env.PORT;

app.listen(port, () => `Server is up and running on port number: ${port}`);