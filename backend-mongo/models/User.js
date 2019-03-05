const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nombre:{
        type:String,
        required:true
    },
    apellidos:String,
    edad:Number,
    foto_perfil:{
        type:String,
        default:'https://areajugones.sport.es/wp-content/uploads/2018/03/DXVhKJtVQAAx-Jd-810x400.jpg'
    },
    genero:{
        type:String,
        required:true,
        enum:['F','M']
    },
    mascotas:{
        type:[{
            nombre:String,
            raza:{
                type:String,
                required:true
            }
        }]
    },
    puesto:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Trabajo'
    },
    is_active:{
        type:Boolean,
        default:true,
    }
},{timestamps:true});

const User = mongoose.model('User',userSchema);

module.exports = {User}