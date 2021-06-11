const express = require('express');
const router = express.Router();

const Users = require("../models/users");

const { restrict } = require("../restrict");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secrets = require("../secrets");


//TODO Double check this works
//TODO Check if this needs to happen elsewhere, add once you know it works
router.get('/', restrict, async(req, res, next) => {
    try{
        res.json(await Users.find());

    } catch(err) {
        next(err);
    }
})


//Leaving this unrestricted temporarily
router.get('/:id', async (req, res, next) => {
    const id = req.params.id;

    try {
        res.json(await Users.findById(id));
    } catch(err) {
        next(err);
    }
})

// router.get('/:id/events', async (req, res, next) => {
//     const id = req.params.id;
//     console.log("Test console log");
//     try {
//         res.json(await Users.findUserEvents(id));
//     } catch {
//         next(err);
//     }
// })



router.post('/auth/register', async (req, res, next) => {
    
    try {
        const {username, password} = req.body;
        
        const user = await Users.findByUsername(username);

        if(user) {
            return res.status(409).json({
                message: "Username is taken",
            })
        }

        const newUser = await Users.addUser({
            username: username, password: await bcrypt.hash(password, 11),
        })

        res.status(201).json(newUser);

    } catch(err) {
        next(err);
    }
});

router.post('/auth/login', async (req, res, next) => {

    try {

        const {username, password} = req.body;
        const user = await Users.findByUsername(username);

        if(!user) {
            return res.status(401).json({
                message: "Invalid Credentials",
            })
        }

        const passwordValid = await bcrypt.compare(password, user.password);

        if(!passwordValid) {
            return res.status(401).json({
                message: "Invalid Credentials",
            })
        }

        const token = jwt.sign({
            userID: user.id}, secrets.jwtSecret)

            res.cookie("token", token);
            res.json({
                token,
                username: user.username,
                schedule_id: user.schedule_id,
                id: user.id
            })
     

    } catch (err) {
        next(err);
    }
})



module.exports = router;