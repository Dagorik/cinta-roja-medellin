const {Documental} = require('./Documental');
const {Pelicula} = require('./Pelicula');
const {Cine} = require('./Cine');

const alertaAeropuerto = new Documental('Alerta aeropuerto',35,'Un vato','Los polis')
const avangers = new Pelicula('Avangers',120,'Accion','Iron Man')

const cineColombia = new Cine('12:30','Sala 7');
console.log(cineColombia);
console.log(cineColombia.reproducir(alertaAeropuerto));