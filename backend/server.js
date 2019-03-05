const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//Configuración para poder obtener el body del request
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

//http://localhost:3000
app.get('/',(request,response) => {
    response.send({message:'Hola desde express'})
});

//http://localhost:3000/api/v1/user
app.get('/api/v1/user',(req,res) => {
    res.send({id:'2',name:'Panchito',age:30})
});

//http://localhost:3000/api/v1/userbyid/id_user_4
app.get('/api/v1/userbyid/:uid',(req,res) => {
    console.log(req.params);
    res.send({message:`El usuario que buscas 
                    es ${req.params.uid}`})
});

//http://localhost:3000/api/v1/finduser?q=gato
app.get('/api/v1/finduser',(req,res) => {
    console.log(req.query);
    res.send({message:'Usuario buscado por querys',querys:req.query})
});

//http://localhost:3000/api/v1/create/user
app.post('/api/v1/create/user',(req,res) => {
    console.log(req.body);
    res.status(201).send({id:1,...req.body})
});

app.listen(3000,() => {
    console.log('Server on port 3000');
});