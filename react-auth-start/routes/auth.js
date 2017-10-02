let express = require("express");
let passport = require("passport");
let Strategy = require("passport-local");
let jwt = require("jsonwebtoken");

let settings = require("../settings.js");

//import user model
let User = require("../models/user.js");

const authRouter = express.Router();

//passport uses .use because we can have multiple solutions
passport.use(new Strategy((usernameAttempt, passwordAttempt, done) => {
    //find the user with the usernameAttempt given 
    User.findOne({
        username: usernameAttempt
    }, (err, currentUser) => {
        if (err) {
            //if there is an err pass it to passport and return false for auth 
            done(err, false);
        } else if (currentUser === null) {
            //if there is no user with the username given pass null for error and return false for auth
            done(null, false);
        } else {
            //test if the passwordAttempt hash is the same as the hash stored
            currentUser.auth(passwordAttempt, (isCorrect) => {
                //pass null for the error and return whether the password was correct for auth
                done(null, isCorrect)
            });
        }
    });
}));

//startup passport
authRouter.use(passport.initialize());

//post a new user to user collection
authRouter.post("/signup", (req, res) => {
    // try to find a user with the provided username. (If it already exists, we want to tell them
    // that the username is already taken.)
    User.findOne({
        username: req.body.username
    }, (err, result) => {
        if (err) {
            res.status(500).send({
                success: false,
                err
            });
        } else if (result !== null) {
            res.status(400).send({
                success: false,
                err: "User already exists!"
            });
        } else {
            // If the function reaches this point and hasn't return-ed already, we're safe
            // to create the new user in the database.
            let newUser = new User(req.body);
            newUser.save((err, user) => {
                if (err) {
                    res.status(500).send({
                        success: false,
                        err
                    });
                } else {
                    res.status(201).send({
                        success: true,
                        token: jwt.sign(user.withoutPassword(), settings.secret, {
                            expiresIn: 30 * 60
                        }),
                        user: user.withoutPassword()
                    });
                }
            });
        }
    });
});

//set false for session because we are doing token auth
authRouter.post("/login", passport.authenticate("local", { session: false }), (req, res) => {
    //we get here once the user is authenticated
    //find the user so we can send its info
    User.findOne({
        username: req.body.username
    }, (err, user) => {
        if (err) {
            res.status(500).send({ "message": "Error", err });
        } else if (user === null) {
            res.status(404).send({ "message": "No user found with this username" });
        } else {
            //if there was no error issue
            //a token with the payload begin the user object minus the password
            //We have also added an expiration time of 30 minutes
            res.status(201).send({
                success: true,
                token: jwt.sign(user.withoutPassword(), settings.secret, {
                    expiresIn: 30 * 60
                }),
                user: user.withoutPassword()
            });
        }
    })
});

module.exports = authRouter; 