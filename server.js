const express = require('express');
const app = express();

// 🔹 GET /api/me
app.get('/api/me', (req, res) => {
    res.json({
        nome: "Pietro",
        curso: "Ciência da Computação",
        hobbies: "Jogar, esportes",
        linguagens: "Java, Python, C#"
    });
});

// 🔹 GET /api/data
app.get('/api/data', (req, res) => {
    res.json({
        dataHora: new Date()
    });
});

// 🔹 GET /api/random
app.get('/api/random', (req, res) => {
    res.json({
        numero: Math.floor(Math.random() * 100)
    });
});

// 🚀 Servidor
app.listen(3000, () => {
    console.log("API 'api-eu' rodando em http://localhost:3000");
});