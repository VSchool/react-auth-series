const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");

//import routes
const todoRouter = require("./routes/todo.js");
const authRouter = require("./routes/auth.js");
const profileRoute = require("./routes/profile.js");

//connect to db
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/todo-auth-example",
    {useMongoClient: true},
    err => {
        if (err) throw err;
        console.log("Connected to the database");
    });

//base express app
const app = express();

//setup cors
app.use(cors());

//setup JSON requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//use routes
app.use("/todo", todoRouter);
app.use("/auth", authRouter);  
app.use("/profile", profileRoute);

//setup logging
app.use(morgan("dev"));

//setup routes

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`[+] Starting server on port ${PORT}`);
});