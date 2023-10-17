require("dotenv").config();
const { iniciarBaseDatos } = require("./db");
const express = require("express");

const app = express();
const PORT = process.env.SERVER_PORT || 8000; // Asegurando que SERVER_PORT esté configurado

//Iniciar base de datos
iniciarBaseDatos();

// Middleware para recibir JSON
app.use(express.json());


const usuarioRouter = require("./routers/usuario");
const loginRouter = require("./routers/auth");
const taskRouter = require("./routers/tarea");

//Rutas
app.use("/users", usuarioRouter);
app.use("/login", loginRouter);
app.use("/tasks", taskRouter);


const validationError = require("./middlewares/validation-error");
const unknownError = require("./middlewares/unknown-error");
// Middleware de manejo de errores
app.use(validationError);
app.use(unknownError);


app.listen(PORT, () => {
    console.log(`> Escuchando en el puerto ${PORT}`);
});