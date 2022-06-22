const db = require('../models');
const persona = db.persona;
const Op = db.Sequelize.Op;

// crear y guardar un nuevo registro
    exports.create = (req, res) => {
        // Validar solicitud
        if (!req.body.nombre) {
          res.status(400).send({
            message: res
          });
          return;
        }
      
        // Crear ,
        const personas = {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            telefono: req.body.telefono,
            dpi: req.body.DPI,
            direccion: req.body.direccion
        };
      
        // Guardar persona en la base de datos el registro
        persona .create(personas)
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
      
        persona.findAll({where: condition})
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