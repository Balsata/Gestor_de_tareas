require("dotenv").config();

const { iniciarBaseDatos } = require("./db");
iniciarBaseDatos();

const express = require("express");
const app = express();

app.use(express.json());

const usuarioRouter = require("./routers/usuario");

//Rutas
app.use("/users", usuarioRouter);


app.listen(process.env.SERVER_PORT, function () {
    console.log("> Escuchando puerto " + process.env.SERVER_PORT);
});