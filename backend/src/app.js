const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to DevHub Backend");
});

app.get("/api/health", (req, res) => {
    res.json({
        name: "DevHub Backend",
        status: "ok",
        port: 5000,
        timestamp: new Date().toISOString()
    });
});

module.exports = app;
