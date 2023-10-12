const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize");

module.exports = sequelize.define("cat_estado", {
    uuid: {
        type: DataTypes.UUID,
        unique: true,
    },

    nombre: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },

    descripcion: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
}, { timestamps: false, });