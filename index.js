const express = require("express");
const dotenv = require("dotenv");

const connectToDatabase = require("./src/database/mongoose.database");

dotenv.config();

const app = express();
const port = process.env.PORT || 9000;

connectToDatabase();

app.get("/", (req, res) => {
    const tasks = [
        { description: "estudar programaçao", done: false },
        { description: "estudar ingles", isCompleted: false },
    ];
    res.status(200).send(tasks);
});

app.listen(port, () => console.log(`🔥 Servidor rodando na porta ${port}`));
