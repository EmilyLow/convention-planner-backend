require('dotenv').config();
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");


const eventsRouter = require('./src/routes/events');
const schedulesRouter = require ('./src/routes/schedules');
const usersRouter = require('./src/routes/users');

const app = express(); 

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use('/events', eventsRouter);
app.use('/schedules', schedulesRouter);
app.use('/users', usersRouter);

//Error handling middleware
app.use((err, req, res, next) => {
    console.log(err);

    res.status(500).json({
        message: "Something went wrong"
    })
})

const port = process.env.PORT || 3002;

app.listen(port, () =>
      console.log(`Convention planner listening on port ${port}!`),
);

app.get("/", (req, res, next) => {
    res.json({"message":"Ok"})
});