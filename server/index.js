const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const expressJwt = require("express-jwt");
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

app.use("/api", expressJwt({secret: config.secret}));
app.use("/api/todo", require("./routes/todo.js"));
app.use("/api/profile", require("./routes/profile.js"));

app.use("/auth", require("./routes/auth.js"));

app.listen(PORT, () => {
    console.log(`[+] Starting server on port ${PORT}`);
});
