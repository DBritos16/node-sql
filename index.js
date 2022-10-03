//Import dependencies
const express = require('express');
const morgan = require('morgan');
const cors = require ('cors');
require('dotenv').config();
require('./database/conection')

const App = express();


//midlewares
App.use(morgan('dev'));
App.use(cors());
App.use(express.json());

//Routes
App.use(require('./src/routes/user.routes'));


const PORT = process.env.PORT || 5000;

App.listen(PORT, (err)=>{
    (err)?console.log(`Error al inicar servidor: ${err}`):console.log(`Servidor corriendo en el purto ${PORT}`);
});