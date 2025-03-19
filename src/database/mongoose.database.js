const mongoose = require("mongoose");

const connectToDataBase = async () => {
    try {
        await mongoose
            .connect(
                `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@taskmanagercluster.e0qct.mongodb.net/myFirstMongoDB?retryWrites=true&w=majority&appName=TaskManagerCluster`
            )
            .then(console.log("MongoDB conectando..."));
        console.log("🔥 MongoDB conectado com sucesso!");
    } catch (error) {
        console.error("❌ Erro ao conectar ao MongoDB:", error);
    }
};

module.exports = connectToDataBase;
