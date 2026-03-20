const express = require('express');
const app = express();


app.get('/api/me', (req, res) => {
    res.json({
        nome: "Pietro",
        curso: "Ciência da Computação",
        hobbies: "Jogar, esportes",
        linguagens: "Java, Python, C#"
    });
});


app.get('/api/data', (req, res) => {
    res.json({
        dataHora: new Date()
    });
});


app.get('/api/random', (req, res) => {
    res.json({
        numero: Math.floor(Math.random() * 100)
    });
});


app.listen(3000, () => {
    console.log("API 'api-eu' rodando em http://localhost:3000");
});