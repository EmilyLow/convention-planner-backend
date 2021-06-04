require('dotenv').config();
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");

//TODO Put routers here
// e.g. eventsRouter = require('./routes/events');


const app = express(); 

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//TODO Use routers here
//e.g. app.use('/events', eventsRouter);


const port = process.env.PORT || 3002;

app.listen(port, () =>
      console.log(`Convention planner listening on port ${port}!`),
);

app.get("/", (req, res, next) => {
    res.json({"message":"Ok"})
});