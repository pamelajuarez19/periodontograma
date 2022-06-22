const db = require('../models');
const enfermedades = db.enfermedades;
const Op = db.Sequelize.Op;

// crear y guardar un nuevo registro
    exports.create = (req, res) => {
        // Validar solicitud
        if (!req.body.descripcionenfermedad) {
          res.status(400).send({
            message: res
          });
          return;
        }
      
        // Crear ,
        const enfermedadesestructura = {
            descripcionenfermedad: req.body.descripcionenfermedad
        };
      
        // Guardar enfermedades en la base de datos el registro
        enfermedades .create(enfermedadesestructura)
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
      
        enfermedades.findAll({where: condition})
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