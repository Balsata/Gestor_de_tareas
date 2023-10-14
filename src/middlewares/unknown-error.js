module.exports = function (err, request, response, next) {
    response.status(500).json({
        message: "Ocurrió un error inesperado",
        details: err,
    });
};