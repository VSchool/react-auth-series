let express = require("express");
let Todo = require("../models/todo");
let expressJwt = require("express-jwt");
let settings = require("../settings.js");

let auth = expressJwt({ secret: settings.secret });

const todoRouter = express.Router();
todoRouter.use(auth);

todoRouter.route("/")
    .get((req, res) => {
        Todo.find({user: req.user._id}, (err, todos) => {
            if (err) return res.status(500).send(err);
            return res.status(200).send(todos);
        });
    })
    .post((req, res) => {
        let todo = new Todo(req.body);
        todo.user = req.user._id;
        todo.save((err, newTodo) => {
            if (err) return res.status(500).send(err);
            return res.status(201).send(newTodo);
        })
    });

todoRouter.route("/:todoId")
    .get((req, res) => {
        Todo.findOne({ user: req.user._id, _id: req.params.todoId }, (err, todo) => {
            if (err) return res.status(500).send(err);
            if (!todo) return res.status(404).send("No todo item found.");
            return res.status(200).send(todo);
        });
    })
    .put((req, res) => {
        Todo.findOneAndUpdate({user: req.user._id,_id: req.params.todoId}, req.body, { new: true }, (err, todo) => {
            if (err) return res.status(500).send(err);
            return res.status(200).send(todo);
        });
    })
    .delete((req, res) => {
        Todo.findOneAndRemove({user: req.user._id,_id: req.params.todoId },
            (err, todo) => {
                if (err) return res.status(500).send(err);
                return res.status(200).send(todo);
            })
    });

module.exports = todoRouter; 