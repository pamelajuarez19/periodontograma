module.exports = app => {
    const colordiente = require('../controllers/colordiente');
    const dentista = require('../controllers/dentista');
    const detallepacientediente = require('../controllers/detallepacientediente');
    const detallepacienteenfermedad = require('../controllers/detallepacienteenfermedad');
    const diente = require('../controllers/diente');
    const enfermedades = require('../controllers/enfermedades');
    const paciente = require('../controllers/paciente');
    const persona = require('../controllers/persona');
    const pronosticoindividual = require('../controllers/pronosticoindividual');
    const tipopersona = require('../controllers/tipopersona');
    const usuario = require('../controllers/usuario');


    var router = require("express"). Router();




    // tabla colordiente
    router.post("/colordiente", colordiente.create);
    router.get("/colordiente", colordiente.muestratodo);

    // tabla dentista
    router.post("/dentista", dentista.create);
    router.get("/dentista", dentista.muestratodo);

    // tabla detallepacientediente
    router.post("/detallepacientediente", detallepacientediente.create);
    router.get("/detallepacientediente", detallepacientediente.muestratodo);

    // tabla detallepacienteenfermedad
    router.post("/detallepacienteenfermedad", detallepacienteenfermedad.create);
    router.get("/detallepacienteenfermedad", detallepacienteenfermedad.muestratodo);

    // tabla diente
    router.post("/diente", diente.create);
    router.get("/diente", diente.muestratodo);

    // tabla enfermedades
    router.post("/enfermedades", enfermedades.create);
    router.get("/enfermedades", enfermedades.muestratodo);

    // tabla paciente
    router.post("/paciente", paciente.create);
    router.get("/paciente", paciente.muestratodo);

    // tabla persona
    router.post("/persona", persona.create);
    router.get("/persona", persona.muestratodo);

    // tabla pronosticoindividual
    router.post("/pronosticoindividual", pronosticoindividual.create);
    router.get("/pronosticoindividual", pronosticoindividual.muestratodo);

    // tabla tipopersona
    router.post("/tipopersona", tipopersona.create);
    router.get("/tipopersona", tipopersona.muestratodo);

    // tabla usuario
    router.post("/usuario", usuario.create);
    router.get("/usuario", usuario.muestratodo);

    app.use("/api", router);
};