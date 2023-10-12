const { insert } = require("../services/usuario");


exports.createUser = async function (request, response) {
    const { usuario, contraseña, apellido_materno, apellido_paterno, nombre, email, telefono, direccion, curp } = request.body;
    const user = await insert({ usuario, contraseña, apellido_materno, apellido_paterno, nombre, email, telefono, direccion, curp });
    response.status(201).json(user);
};