const db = require("../data/db-config");


modules.exports = {find, findById, addUser, updateUser, removeUser};



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