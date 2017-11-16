const express = require("express");
const todoRouter = express.Router();
const Todo = require("../models/todo");

todoRouter.get("/", (req, res) => {
    Todo.find((err, todos) => {
        if (err) return res.status(500).send(err);
        return res.send(todos);
    });
});

todoRouter.post("/", (req, res) => {
    const todo = new Todo(req.body);
    todo.save(function (err, newTodo) {
        if (err) return res.status(500).send(err);
        return res.status(201).send(newTodo);
    });
});

todoRouter.get("/:todoId", (req, res) => {
    Todo.findById(req.params.todoId, (err, todo) => {
        if (err) return res.status(500).send(err);
        if (!todo) return res.status(404).send("No todo item found.");
        return res.send(todo);
    });
});

todoRouter.put("/:todoId", (req, res) => {
    Todo.findByIdAndUpdate(
        req.params.todoId,
        req.body,
        {new: true},
        (err, todo) => {
            if (err) return res.status(500).send(err);
            return res.send(todo);
        }
    );
});

todoRouter.delete("/:todoId", (req, res) => {
    Todo.findByIdAndRemove(req.params.todoId, (err, todo) => {
        if (err) return res.status(500).send(err);
        return res.send(todo);
    });
});

module.exports = todoRouter;
