const express = require('express');
const bodyParser = require('body-parser');
const { User, Trabajo } = require('./models/index');
const PORT = 3000
const app = express();

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.get('/',(req,res) => {
    res.send({message:'Server -------'})
});

app.post('/api/v1/create/user',(req,res) => {
    const {nombre,apellidos,edad,foto_perfil,genero} = req.body
    const newUser = User({
        nombre,
        apellidos,
        edad,
        foto_perfil,
        genero
    });
    newUser.save((err,user) => {
        err 
        ? res.status(400).send(err) 
        : res.status(201).send(user)
    }); 
});

app.get('/api/v1/user',(req,res) => {
    User.find({is_active:true}).exec()
        .then((users) => {
            res.send(users)
        }).catch((err) => {
            res.status(409).send(err) 
        });
});

app.get('/api/v1/popultaion/user',(req,res) => {
    User.find({is_active:true})
        .populate('puesto')
        .exec()
        .then((users) => {
            res.send(users)
        }).catch((err) => {
            res.status(409).send(err) 
        });
});

app.get('/api/v1/user/:uid',(req,res) => {
    User.findById(req.params.uid).exec()
        .then((user) => {
            res.send(user)
        }).catch((err) => {
            res.status(409).send(err) 
        });
});

app.put('/api/v1/user/:uid',(req,res) => {
    const {uid} = req.params
    User.findByIdAndUpdate(uid,{$set:req.body},{new:true}).exec()
        .then((newUser) => {
            res.send(newUser)
        }).catch((err) => {
            res.status(409).send(err) 
        });
});

app.post('/api/v1/trabajo/user/:uid',(req,res) => {
    const {uid} = req.params
    const {id_puesto} = req.body
    User.findByIdAndUpdate(uid,{$set:{puesto:id_puesto}},{new:true}).exec()
        .then((result) => {
            res.send(result)
        }).catch((err) => {
            res.status(409).send(err) 
        });
});

app.delete('/api/v1/user/:uid',(req,res) => {
    const {uid} = req.params
    User.findByIdAndDelete(uid).exec()
        .then(() => {
            res.sendStatus(204);
        }).catch((err) => {
            res.status(409).send(err);
        });
});

app.post('/api/v1/mascota/user/:idUser',(req,res) => {
    const {idUser} = req.params
    User.findByIdAndUpdate(idUser,
        {$push:{mascotas:[req.body]}},{new:true}).exec()
            .then((newUser) => {
                res.status(201).send(newUser);
            }).catch((err) => {
                res.status(409).send(err);
            });
});

app.post('/api/v1/create/trabajo',(req,res) => {
    const {salario,puesto} = req.body
    const newTrabajo = Trabajo({salario,puesto})
    newTrabajo.save((err,trabajo) => {
        err 
        ? res.status(400).send(err) 
        : res.status(201).send(trabajo)
    }); 
});

app.get('/api/v1/trabajo',(req,res) => {
    Trabajo.find().exec()
        .then((trabajos) => {
            res.send(trabajos);
        }).catch((err) => {
            res.status(400).send(err);
        });
});



module.exports  = app;