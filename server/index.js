const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 5000;

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors());

//connect to db
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/todo-auth-example",
    {useMongoClient: true},  // helps get rid of deprecation warnings
    (err) => {
        if (err) throw err;
        console.log("Connected to the database");
    }
);

app.use("/todo", require("./routes/todo.js"));

app.listen(PORT, () => {
    console.log(`[+] Starting server on port ${PORT}`);
});
