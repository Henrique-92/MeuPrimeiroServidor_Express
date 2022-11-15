
// caminho para subir e configurar o servidor 
const http = require("http");

//Express para subir servirdor web
const express = require("express");

//Rota raiz
const app = express();

// Primeira rota 
app.get("/", function(req, res){
    res.send("<h1>Servidor rodando com ExpressJS</h1>");
});








//Subindo o servidor
http.createServer(app).listen(3000, () => console.log("Servidor rodando local na portal 3000"));
