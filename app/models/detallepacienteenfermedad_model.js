module.exports = (sequelize, Sequelize) => {

    const detallepacienteenfermedad = sequelize.define("detallepacienteenfermedad", {

        paciente: {
            type: Sequelize.INTEGER
        },
        enfermedad: {
            type: Sequelize.INTEGER
        }

    });

    return detallepacienteenfermedad;

};