function miPrimerPromesa(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const numero = 6;
            numero > 5
                ? resolve('Se resolvio la promesa')
                : reject('Se rechazo la promesa')
        },3000)
    });
}

miPrimerPromesa()
    .then((mensaje) => {
        console.log('then');
        console.log(mensaje);
    })
    .catch((err) => {
        console.log('catch');
        console.log(err);
    })