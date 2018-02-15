const express = require("express");
const todoRouter = express.Router();
const Todo = require("../models/todo");

todoRouter.get("/", (req, res) => {
    Todo.find({ user: req.user._id }, (err, todos) => {
        if (err) return res.status(500).send(err);
        return res.send(todos);
    });
});

todoRouter.post("/", (req, res) => {
    const todo = new Todo(req.body);
    todo.user = req.user._id;
    todo.save(function (err, newTodo) {
        if (err) return res.status(500).send(err);
        return res.status(201).send(newTodo);
    });
});

todoRouter.get("/:todoId", (req, res) => {
    Todo.findOne({ _id: req.params.todoId, user: req.user._id }, (err, todo) => {
        if (err) return res.status(500).send(err);
        if (!todo) return res.status(404).send("No todo item found.");
        return res.send(todo);
    });
});

todoRouter.put("/:todoId", (req, res) => {
    Todo.findOneAndUpdate(
        { _id: req.params.todoId, user: req.user._id },
        req.body,
        { new: true },
        (err, todo) => {
            if (err) return res.status(500).send(err);
            return res.send(todo);
        }
    );
});

todoRouter.delete("/:todoId", (req, res) => {
    Todo.findOneAndRemove({ _id: req.params.todoId, user: req.user._id }, (err, todo) => {
        if (err) return res.status(500).send(err);
        return res.send(todo);
    });
});

module.exports = todoRouter;
