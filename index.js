const { initDatabase } = require("./db");
initDatabase();

const express = require("express");
const app = express();

app.use(express.json());

const userRouter = require("./routers/usuario");

//Rutas
app.use(userRouter);


app.listen(8080, function () {
    console.log("> Escuchando puerto 8080");
});