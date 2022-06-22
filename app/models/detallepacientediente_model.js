module.exports = (sequelize, Sequelize) => {

    const detallepacientediente = sequelize.define("detallepacientediente", {

        paciente: {
            type: Sequelize.INTEGER
        },
        diente: {
            type: Sequelize.INTEGER
        },
        faltante: {
            type: Sequelize.STRING
        },
        implante: {
            type: Sequelize.STRING
        },
        movilidad: {
            type: Sequelize.INTEGER
        },
        pronosticoindividual: {
            type: Sequelize.INTEGER
        },
        furca: {
            type: Sequelize.FLOAT
        },
        anchuraencia: {
            type: Sequelize.FLOAT
        },
        margengingival: {
            type: Sequelize.STRING
        },
        profundidaddesondaje: {
            type: Sequelize.STRING
        },
        canalizacion: {
            type: Sequelize.BOOLEAN
        },
        corona: {
            type: Sequelize.BOOLEAN
        },
        relleno: {
            type: Sequelize.INTEGER
        },
        colordiente: {
            type: Sequelize.INTEGER
        },
        sensibilidad: {
            type: Sequelize.INTEGER
        },
        retracciondeencia: {
            type: Sequelize.INTEGER
        },
        caries: {
            type: Sequelize.INTEGER
        },
        infeccion: {
            type: Sequelize.BOOLEAN
        }

    });

    return detallepacientediente;

};