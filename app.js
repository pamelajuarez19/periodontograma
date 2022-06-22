const express = require('express');
const cors = require('cors');
const request = require('request');

const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(cors())


app.listen(3000, () => {
    console.log(`url local  --> http://localhost:3000`);
})
