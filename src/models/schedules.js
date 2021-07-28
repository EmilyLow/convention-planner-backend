const db = require("../data/db-config");


module.exports = {find, findById, findScheduleEvents, deleteScheduleEvents};

async function find() {
    return await db('schedules');
}

async function findById(id) {

    try {
        let scheduleData = await db('schedules').where({id}).first();
        return scheduleData;
    } catch(err) {
        return "Something went wrong when retrieving the schedule."
    }

}


async function findScheduleEvents(schedule_id) {
    try {
       return await db.select().table("events").where("schedule_id", schedule_id);

    } catch(err) {
        return "Something went wrong when retrieving events for this schedule"
    }
}

async function deleteScheduleEvents(schedule_id) {

    try {
        return await db.select().table("events").where("schedule_id", schedule_id).del();
    } catch(err) {
        return "Something went wrong when deleting events for this schedule";
    }
}