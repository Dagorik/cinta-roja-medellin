const request = require('request');

function createAuthor(name,last_name,biography,gender,age){
    const jsonToSend = {name,last_name,biography,gender,age,nacionalidad:'MX'}
    const URL = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/'
    request.post({url:URL,form:jsonToSend},(err,response,body) => {
        console.log(err);
        console.log(response.statusCode);
        console.log(JSON.parse(body));
    })
}

function getAuthorById(id){
    const URL = `https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/${id}`
    request.get(URL,(err,response,body) => {
        console.log(err);
        console.log(response.statusCode);
        console.log(JSON.parse(body));
    })
}

//createAuthor('Vato desde js','medellin','lakjsdlkasjd','M',20)
getAuthorById('2047')