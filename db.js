const { connect, sync } = require("./models/sequelize");
const Tarea = require("./models/tarea")
const Usuario = require("./models/usuario")
const Cat_Tarea = require("./models/cat_tarea")
const Cat_Estado = require("./models/cat_estado")
const Cat_Prioridad = require("./models/cat_prioridad")
const Cat_Tipo = require("./models/cat_tipo")
const Cat_Area = require("./models/cat_area")


Cat_Area.hasMany(Usuario);
Usuario.belongsTo(Cat_Area);

Cat_Tipo.hasMany(Usuario);
Usuario.belongsTo(Cat_Tipo);

//********************************* */

Cat_Estado.hasMany(Tarea);
Tarea.belongsTo(Cat_Estado);

Cat_Prioridad.hasMany(Tarea);
Tarea.belongsTo(Cat_Prioridad);

Cat_Tarea.hasMany(Tarea);
Tarea.belongsTo(Cat_Tarea);

Usuario.hasOne(Usuario, { as: "lider", foreignkey: "id" });

Usuario.belongsToMany(Tarea, { through: "Asignacion", timestamps: false });
Tarea.belongsToMany(Usuario, { through: "Asignacion", timestamps: false });

Usuario.hasOne(Tarea, { as: "creador", foreignkey: "id" });

//Usuario.hasMany(Usuario); // A HasMany B
// Usuario.belongsToMany(Usuario, { through: 'lider_colaborador' });

exports.initDatabase = async function () {
    await connect();
    await sync();
};