

const Tarea = require("../models/tarea.js");

exports.insert = function (data) {
    console.log("> Tarea creada")
    return Tarea.create(data);
};