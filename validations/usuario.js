const Joi = require("joi");

exports.createUserSchema = Joi.object({
    usuario: Joi.string().min(5).max(20).required(),
    email: Joi.string().email().min(5).max(200).required(),
    contraseña: Joi.string().min(5).max(200).required(),
    apellido_paterno: Joi.string().min(3).max(50).required(),
    apellido_materno: Joi.string().min(3).max(50).required(),
    nombre: Joi.string().min(3).max(50).required(),
    telefono: Joi.string().min(5).max(12).required(),
    direccion: Joi.string().min(5).max(100).required(),
    curp: Joi.string().min(5).max(50).required(),
});
