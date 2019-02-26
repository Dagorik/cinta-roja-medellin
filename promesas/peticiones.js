const request = require('request');

function createAuthor(name,last_name,biography,gender,age){
    return new Promise((resolve,reject) => {
        const jsonToSend = {name,last_name,biography,gender,age,nacionalidad:'MX'}
        const URL = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/'
        request.post({url:URL,form:jsonToSend},(err,response,body) => {
        response.statusCode === 201
            ? resolve(JSON.parse(body))
            : reject(JSON.parse(body))
        })
    });
}

function modifyAuthorById(id,name,is_alive){
    return new Promise((resolve,reject) => {
        const jsonToSend = {name,is_alive}
        const URL = `https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/${id}/`
        request.patch({url:URL,form:jsonToSend},(err,response,body) => {
            response.statusCode === 200
            ? resolve(JSON.parse(body))
            : reject(JSON.parse(body))
        });
    });
}

function getAuthorById(id){
    return new Promise((resolve,reject) => {
        const URL = `https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/${id}/`
        request.get(URL,(err,response,body) => {
            response.statusCode === 200
            ? resolve(JSON.parse(body))
            : reject(JSON.parse(body))
        });
    });
}



createAuthor('Promesa name','Promesa last name','Promesa biografia','F',30)
    .then((newAuthor) => getAuthorById(newAuthor.id))
    .then((author) => modifyAuthorById(author.id,'Promesa modificada',true))
    .then((authorModify) => getAuthorById(authorModify.id))
    .then((author) => console.log(author))
    .catch((err) => console.log(err))