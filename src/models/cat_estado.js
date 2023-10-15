const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize");

module.exports = sequelize.define("cat_estado", {
    nombre: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },

    descripcion: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
}, { timestamps: false, });