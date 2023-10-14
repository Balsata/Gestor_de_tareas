require("dotenv").config();

const { iniciarBaseDatos } = require("./db");
iniciarBaseDatos();

const express = require("express");
const app = express();

app.use(express.json());

const usuarioRouter = require("./routers/usuario");

const validationError = require("./middlewares/validation-error");
const unknownError = require("./middlewares/unknown-error");

//Rutas
app.use("/users", usuarioRouter);

// Manejo de errores
app.use(validationError);
app.use(unknownError);


app.listen(process.env.SERVER_PORT, function () {
    console.log("> Escuchando puerto " + process.env.SERVER_PORT);
});