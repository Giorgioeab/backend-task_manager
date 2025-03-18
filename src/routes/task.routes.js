const express = require("express");

const TaskController = require("../controllers/task.controller");
const TaskModel = require("../models/task.model");

const router = express.Router();

router.get("/", async (req, res) => {
    return new TaskController(req, res).getTasks();
});

router.get("/:id", async (req, res) => {
    return new TaskController(req, res).getTaskbyId();
});

router.post("/", async (req, res) => {
    return new TaskController(req, res).createTask();
});

router.patch("/:id", async (req, res) => {
    return new TaskController(req, res).updateTask();
});

router.delete("/:id", async (req, res) => {
    return new TaskController(req, res).deleteTask();
});

module.exports = router;
