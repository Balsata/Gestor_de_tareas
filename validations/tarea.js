const Joi = require("joi");


exports.createTaskSchema = Joi.object({
    descripcion_mensaje: Joi.string().min(7).max(500).required(),
    fecha_inicio: Joi.date().min('2023-10-10').messages({'date.min': `La fecha inicial mínima es 2023-10-10`}).required(),
    fecha_fin: Joi.date().greater(Joi.ref('fecha_inicio')).messages({'date.greater': `La fecha final debe ser mayor que la inicial`}).required(),
    avance: Joi.number().integer().min(0).max(100)

})



