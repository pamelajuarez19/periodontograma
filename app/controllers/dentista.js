const db = require('../models');
const dentista = db.dentista;
const Op = db.Sequelize.Op;

// crear y guardar un nuevo registro
    exports.create = (req, res) => {
        // Validar solicitud
        if (!req.body.nombreclinica) {
          res.status(400).send({
            message: res
          });
          return;
        }
      
        // Crear ,
        const dentistas = {
            especialidad: req.body.especialidad,
            nombreclinica: req.body.nombreclinica,
            persona: req.body.persona
        };
      
        // Guardar dentista en la base de datos el registro
        dentista .create(dentistas)
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
      
        dentista.findAll({where: condition})
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