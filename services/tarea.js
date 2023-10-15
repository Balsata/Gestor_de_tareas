//Revisar nombre de const

const Tarea = require("../models/tarea.js");

exports.insert = function (data) {
    return Tarea.create(data);
};