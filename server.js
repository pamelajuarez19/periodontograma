const express= require('express');
const bodyParser = require('body-parser');
const cors=require('cors');

const app = express();
var corsOptions = {
    origin:'https://localhost:8081'

};


app.use (cors(corsOptions));
app.use (bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


const db= require('./app/models');
db.sequelize.sync();

//simple route
app.get("/", (req, res) => {
    res.json({message:"Periodontograma"})
});



app.get("/", (req, res) => {
    res.json({message:"Periodontograma"})
});

require('./app/routes/route')(app);


const PORT = process.env.PORT || 8080;
app.listen(PORT, (req, res) => {
    console.log(`app ejecutandose correctamente ${PORT}`);
});
