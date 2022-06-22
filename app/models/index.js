const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const bodyParser = require("body-parser");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.colordiente = require("./colordiente_model.js")(sequelize, Sequelize);
db.dentista = require("./dentista_model.js")(sequelize, Sequelize);
db.detallepacientediente = require("./detallepacientediente_model.js")(sequelize, Sequelize);
db.detallepacienteenfermedad = require("./detallepacienteenfermedad_model.js")(sequelize, Sequelize);
db.diente = require("./diente_model.js")(sequelize, Sequelize);
db.enfermedades = require("./enfermedades_model.js")(sequelize, Sequelize);
db.paciente = require("./paciente_model.js")(sequelize, Sequelize);
db.persona = require("./persona_model.js")(sequelize, Sequelize);
db.pronosticoindividual = require("./pronosticoindividual_model.js")(sequelize, Sequelize);
db.tipopersona = require("./tipopersona_model.js")(sequelize, Sequelize);
db.usuario = require("./usuario_model.js")(sequelize, Sequelize);




module.exports = db;