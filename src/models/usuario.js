const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize");

module.exports = sequelize.define("usuario", {
    usuario: {
        type: DataTypes.STRING(10),
        allowNull: false,
        unique: true,
    },

    contraseña: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },

    apellido_paterno: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },

    apellido_materno: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },

    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },

    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },

    telefono: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },

    direccion: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },

    curp: {
        type: DataTypes.STRING(18),
        allowNull: false,
    },

    foto: {
        type: DataTypes.BLOB,
        allowNull: true,
    },

}, { timestamps: false, });