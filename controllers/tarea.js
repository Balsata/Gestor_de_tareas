const { insert } = require("../services/tarea.js");


exports.crearTarea = async function (request, response) {
    const {descripcion_mensaje, fecha_inicio, fecha_fin, avance} = request.body;
    const task = await insert({ descripcion_mensaje, fecha_inicio, fecha_fin, avance});
    response.status(201).json(task);
};

