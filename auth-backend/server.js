const express = require('express');
const PORT = 3000
const router = require('./routes');
const app = express();

app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.use('/api/v1',router);

app.listen(PORT,() => {
    console.log('Server on '+ PORT);
});