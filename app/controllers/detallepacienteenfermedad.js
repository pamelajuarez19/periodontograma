const db = require('../models');
const detallepacienteenfermedad = db.detallepacienteenfermedad;
const Op = db.Sequelize.Op;

// crear y guardar un nuevo registro
    exports.create = (req, res) => {
        // Validar solicitud
        if (!req.body.paciente) {
          res.status(400).send({
            message: res
          });
          return;
        }
      
        // Crear ,
        const detallepacienteenfermedads = {
            paciente: req.body.paciente,
            enfermedad: req.body.enfermedad
        };
      
        // Guardar detallepacienteenfermedad en la base de datos el registro
        detallepacienteenfermedad .create(detallepacienteenfermedads)
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Se produjo un error al crear el registro "
            });
          });
      };
      

    


     // Recupera todos los Checkin  de la base de datos.
     exports.muestratodo = (req, res) => {
        const title = req.query.title;
        var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;
      
        detallepacienteenfermedad.findAll({where: condition})
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Se produjo un error al recuperar los Checkin ."
            });
          });
      };