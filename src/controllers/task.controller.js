const TaskModel = require("../models/task.model");

class TaskController {
    constructor(req, res) {
        this.req = req;
        this.res = res;
    }

    async getTasks() {
        try {
            const tasks = await TaskModel.find({});
            this.res.status(200).send(tasks);
        } catch (error) {
            this.res.status(500).send(error.message);
        }
    }

    async getTaskbyId() {
        try {
            const taskId = this.req.params.id;

            const task = await TaskModel.findById(taskId);
            if (!task) {
                return this.res.status(404).send("Tarefa não encontrada");
            }

            return this.res.status(200).send(task);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    async createTask() {
        try {
            const newTask = new TaskModel(this.req.body);

            await newTask.save();

            this.res.status(201).send(newTask);
        } catch (error) {
            this.res.status(500).send(error.message);
        }
    }

    async updateTask() {
        try {
            const taskId = this.req.params.id;
            const taskData = this.req.body;

            const taskToUpdate = await TaskModel.findById(taskId);

            const allowedUpdates = ["isCompleted"];
            const requestedUpdates = Object.keys(taskData);

            for (let update of requestedUpdates) {
                if (allowedUpdates.includes(update)) {
                    taskToUpdate[update] = taskData[update];
                } else {
                    return this.res
                        .status(500)
                        .send("A atualização de algum campo não é permitida");
                }
            }

            await taskToUpdate.save();
            return this.res.status(200).send(taskToUpdate);
        } catch (error) {
            return this.res.status(500).send(error.message);
        }
    }
}

module.exports = TaskController;
