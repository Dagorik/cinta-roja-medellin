const {Largometraje} = require('./Largometraje');

class Documental extends Largometraje{
  constructor(titulo,duracion,investigador,narrador){
    super(titulo,duracion);
    this.investigador = investigador
    this.narrador = narrador
  }
  getNarrador(){
    return `El narradro es ${this.narrador}`
  }
}

module.exports = {
  Documental
}