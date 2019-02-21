const {Largometraje} = require('./Largometraje');

class Pelicula extends Largometraje{
  constructor(titulo,duracion,genero,protagonista){
    super(titulo,duracion);
    this.genero = genero
    this.protagonista = protagonista
  }

  getProtagonista(){
    return `El protagonista es ${this.protagonista}`
  }

}

module.exports = {
  Pelicula
}