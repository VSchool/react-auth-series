let express = require("express");
let expressJwt = require("express-jwt");
let settings = require("../settings.js");
let User = require("../models/user.js");

let profileRoute = express.Router();

let auth = expressJwt({ secret: settings.secret });

profileRoute.use(auth);

profileRoute.route("/verify")
    .get((req, res) => {
        User.findById(req.user._id, (err, user) => {
            if(err){
                res.status(500).send({
                    success: false,
                    err
                })
            } else if(user === null){
                res.status(400).send({
                    success: false,
                    err: "User not found!"
                })
            } else {
                res.status(200).send({
                    success: true,
                    user: user.withoutPassword(),
                })
            }
        })
    });


module.exports = profileRoute;