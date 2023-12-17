const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");


const app = express();
const db = require('./db')
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());




const userRoute = require('./routes/userRoute')
const adminRoute = require('./routes/adminRoute')
const feedbackRoute = require('./routes/feedbackRoute')
const newsfeedRoute = require('./routes/newsfeedRoute')
const jobsRoute=require('./routes/jobsRoute')
const JobApplyRoute=require('./routes/JobApplyRoute')
const publicServiceRoute=require('./routes/publicServiceRoute')


app.use('/api/feedback/', feedbackRoute)
app.use('/api/users/', userRoute)
app.use('/api/admins/', adminRoute)
app.use('/api/newsfeed/', newsfeedRoute)
app.use('/api/jobportal/',jobsRoute)
app.use('/api/jobapply/',JobApplyRoute)
app.use('/api/publicservice/',publicServiceRoute)


app.get("/", (req, res) => {

    res.send("Server Working!");

});


const port = process.env.PORT || 8070;

app.listen(port, () => `Server is up and running on port number: ${port}`);