const { insert } = require("../services/tarea.js");


exports.createUser = async function (request, response) {
    const { tarea, descripcion_mensaje, apellido_materno, afecha_inicio, fecha_fin, avance} = request.body;
    const task = await insert({ tarea, descripcion_mensaje, apellido_materno, afecha_inicio, fecha_fin, avance});
    response.status(201).json(task);
};