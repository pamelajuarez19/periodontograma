module.exports = (sequelize, Sequelize) => {

    const paciente = sequelize.define("paciente", {

        fechanachimiento: {
            type: Sequelize.STRING
        },
        genero: {
            type: Sequelize.CHAR
        },
        grupoetnico: {
            type: Sequelize.INTEGER
        },
        dentista: {
            type: Sequelize.INTEGER
        },
        persona: {
            type: Sequelize.INTEGER
        },
        sangrado: {
            type: Sequelize.INTEGER
        },
        placa: {
            type: Sequelize.INTEGER
        },
        gingivitis: {
            type: Sequelize.STRING
        },
        periodontitis: {
            type: Sequelize.STRING
        },
        tipodefrenillols: {
            type: Sequelize.STRING
        },
        tipodefrenilloli: {
            type: Sequelize.STRING
        },
        tipodefrenillol: {
            type: Sequelize.STRING
        },
        ortodoncia: {
            type: Sequelize.BOOLEAN
        }

    });

    return paciente;

};