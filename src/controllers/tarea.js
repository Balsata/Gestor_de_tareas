const { insert, findByUser } = require("../services/tarea.js");


exports.crearTarea = async function (request, response) {
    const { id } = request.user;
    const { descripcion_mensaje, fecha_inicio, fecha_fin, avance } = request.body;


    const task = await insert({ descripcion_mensaje, fecha_inicio, fecha_fin, avance, userId: id });

    response.status(201).json(task);
};