const { findByUsername } = require("../services/usuario");
const jwt = require("jsonwebtoken");

exports.login = async function (request, response) {
    const { usuario, contraseña } = request.body;

    const user = await findByUsername(usuario);

    if (!user) {
        return response.status(400).json({
            message: "Usuario o contraseña inválidos",
        });
    }

    if (user.contraseña !== contraseña) {
        return response.status(400).json({
            message: "Usuario o contraseña inválidos",
        });
    }

    const token = jwt.sign(
        { id: user.id, usuario: user.usuario },
        process.env.JWT_SECRET
    );

    response.status(200).json({
        jwt: token,
    });
};