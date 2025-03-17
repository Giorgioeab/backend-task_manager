require("dotenv").config();
const mongoose = require("mongoose");

const MONGO_URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@taskmanagercluster.e0qct.mongodb.net/?retryWrites=true&w=majority&appName=TaskManagerCluster`;

const connectToDataBase = async () => {
    try {
        await mongoose
            .connect(MONGO_URI)
            .then(console.log("MongoDB conectando..."));
        console.log("🔥 MongoDB conectado com sucesso!");
    } catch (error) {
        console.error("❌ Erro ao conectar ao MongoDB:", error);
        process.exit(1);
    }
};

module.exports = connectToDataBase;
