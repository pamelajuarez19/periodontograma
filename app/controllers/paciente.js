const db = require('../models');
const paciente = db.paciente;
const Op = db.Sequelize.Op;

// crear y guardar un nuevo registro
    exports.create = (req, res) => {
        // Validar solicitud
        if (!req.body.persona) {
          res.status(400).send({
            message: res
          });
          return;
        }
      
        // Crear ,
        const pacientes = {
            fechanachimiento: req.body.fechanachimiento,
            genero: req.body.genero,
            grupoetnico: req.body.grupoetnico,
            dentista: req.body.dentista,
            persona: req.body.persona,
            sangrado: req.body.sangrado,
            placa: req.body.placa,
            gingivitis: req.body.gingiviti,
            periodontitis: req.body.periodontitis,
            tipodefrenillols: req.body.tipodefrenillols,
            tipodefrenilloli: req.body.tipodefrenilloli,
            tipodefrenillol: req.body.tipodefrenillol,
            ortodoncia: req.body.ortodoncia
        };
      
        // Guardar paciente en la base de datos el registro
        paciente .create(pacientes)
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
      
        paciente.findAll({where: condition})
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