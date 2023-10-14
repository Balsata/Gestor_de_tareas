module.exports = function (err, request, response, next) {
    if (err && err.error && err.error.isJoi) {
        console.error(err);
        response.status(400).json({
            message: "Los datos de entrada son inválidos",
            details: err.error.details,
        });
    } else {
        next(err);
    }
};