const mongoose = require('mongoose');
const { User } = require('./User');
const { Trabajo } = require('./Trabajo');
const URL_MONGO = 'mongodb+srv://prueba:prueba@cluster0-in5es.mongodb.net/cinta-roja?retryWrites=true'
//Configuración de la cadena de conexión
mongoose.connect(URL_MONGO,{useNewUrlParser:true},(err) => {
    !err 
        ? console.log('Conexión exitosa')
        : console.log('Error en la conexión')
});
module.exports = {
    User,
    Trabajo
}