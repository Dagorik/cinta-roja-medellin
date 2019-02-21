class Cine{
  constructor(horario,sala){
    this.horario = horario
    this.sala = sala
  }

  reproducir(objetoLargometraje){
    return `Se esta reproduciendo el 
      largometraje ${objetoLargometraje.getTitulo()}`
  }
}

module.exports = {
  Cine
}