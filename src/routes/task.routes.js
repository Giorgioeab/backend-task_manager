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
    try {
        const taskId = req.params.id;

        const deletedTask = await TaskModel.findByIdAndDelete(taskId);

        if (!deletedTask) {
            return res.status(404).send("Tarefa não encontrada");
        }

        res.status(200).send();
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;
