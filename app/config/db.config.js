module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "1234",
    DB: "prueba_odontografica", //cambiar la BD para hotel MOA
    dialect: "postgres",
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
};