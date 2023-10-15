const Usuario = require("../models/usuario");

exports.insert = function (data) {
    console.log("> Usuario Creado")
    return Usuario.create(data);
};

exports.findByUsername = function (usuario) {
    return Usuario.findOne({
        where: {
            usuario,
        },
    });
};

exports.findById = function (id) {
    return Usuario.findByPk(id);
};