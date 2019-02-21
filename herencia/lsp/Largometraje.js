class Largometraje{

  constructor(titulo,duracion){
    this.titulo = titulo
    this.duracion = duracion
  }

  getTitulo(){
    return `El titulo del largometraje es ${this.titulo}`
  }
}

module.exports = {
    Largometraje
}