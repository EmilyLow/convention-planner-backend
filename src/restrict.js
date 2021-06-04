const jwt = require("jsonwebtoken");
const secrets = require("./secrets");


async function restrict(req, res, next) {
    try  {

        const token = req.headers.authorization;
        console.log("Token", token);
        console.log("Secrets", secrets);

        if(!token) {
            return res.status(401).json({
                message: "Invalid credentials",
            })
        }

        jwt.verify(token, secrets.jwtSecret, (err, decoded) => {
            if(err) {
                return res.status(401).json({
                    message: "Invalid credentials",
                })
            }

            req.token = decoded;
            next()
        })

    } catch(err) {
        next(err)
    }
}

module.exports = {restrict};