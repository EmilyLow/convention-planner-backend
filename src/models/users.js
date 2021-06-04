const db = require("../data/db-config");


modules.exports = {find, findById, findUserEvents, addUser, updateUser, removeUser};



async function find() {
    return await db("users");
}

async function findById(id) {
    try {
        return await db("users").where({id}).first();
    } catch (err) {
        return "Error finding user: " + err;
    }
}

//TODO Check if it works
//User-event table
async function findUserEvents(user_id) {
    try {
        return await db.select().table("user_event").innerJoin("events", "events.id", "user_event.student_id").where("user_event.user_id", user_id);
    } catch (err) {
        return "Error retrieving events for user: ", err;
    }
}

async function addUser (newUser) {
    try {
        const id = await db("users").insert(user);
        return findById(id);
    } catch(err) {
        return "Error adding user: " + err;
    }
    
}

function updateUser(id, newUser) {
    try {

        await db("users").where({id}).update(newUser);

        return findById(id);
         
    } catch(err) {
        return "Error updating user: " + err;
    }
}

function removeUser(id) {
    try {
        return await db('users').where({id}).del();
 
     } catch(err) {
         return "Error deleting user: " + err;
     }
}