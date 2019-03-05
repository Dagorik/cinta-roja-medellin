const mongoose = require('mongoose');

const trabajoSchema = new mongoose.Schema({
    salario:{
        type:Number,
        default: 950
    },
    puesto:String
},{timestamps:true});

const Trabajo = mongoose.model('Trabajo',trabajoSchema);

module.exports = {
    Trabajo
}