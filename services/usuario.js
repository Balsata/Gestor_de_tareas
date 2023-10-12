const Usuario = require("../models/usuario");

exports.insert = function (data) {
    return Usuario.create(data);
};