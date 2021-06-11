const db = require("../data/db-config");



module.exports = {find, findById, addEvent, updateEvent, removeEvent};


async function find() {
    return await db('events');
}

async function findById(id) {

    try {
        let eventData = await db('events').where({id}).first();
        return eventData;
    } catch(err) {
        return "Something went wrong when retrieving the event."
    }

}



async function addEvent(newEvent) {
    try {
        let id = await db('events').insert(newEvent);
        return findById(id);
    } catch(err) {
        return "Error adding event: " + err;
    }
}

async function updateEvent(newEvent, id) {
    try {

        await db('events').where({id}).update(newEvent);

        return findById(id);
         
    } catch(err) {
        return "Error updating event: " + err;
    }
}

async function removeEvent(id) {
    try {
        return await db('events').where({id}).del();
 
     } catch(err) {
         return "Error deleting event: " + err;
     }
}