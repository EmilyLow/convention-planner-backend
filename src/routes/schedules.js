const express = require('express');
const router = express.Router();


const Schedules = require('../models/schedules');

router.get('/', async function(req, res, next) {
    try {
        res.json(await Schedules.find())
    } catch(err) {
        console.log(err);
    }
});

router.get('/:id', async function(req, res, next) {
    const id = req.params.id;

    try {
        res.json(await Schedules.findById(id))
    } catch(err) {
        next(err);
    }

});

router.get('/:id/events', async function(req, res, next) {

    const id = req.params.id;

    try {
        res.json(await Schedules.findScheduleEvents(id));
    } catch(err) {
        next(err);
    }

});


module.exports = router;