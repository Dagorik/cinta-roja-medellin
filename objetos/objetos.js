//El molde para crear perros
class Perro{
  constructor(color,patas,raza){
    this.color = color
    this.patas = patas
    this.raza = raza
  }
  getColor(){
    return this.color
  }
  ladrar(){
    return 'Waaau'
  }
}
//Crear instancias
// var ayudanteSanta = new Perro('Cafe',4,'Galgo')
// console.log(ayudanteSanta.color);
// var snoopy = new Perro('Negro y Blanco',4,'beagle')
// console.log(snoopy.raza);



class Auto{
  constructor(marca,modelo,color,kilometraje){
    this.marca = marca
    this.modelo = modelo
    this.color = color
    this.kilometraje = kilometraje
  }
  arrancar(){
    return 'Run'
  }
  getKm(){
    return this.kilometraje
  }
  setKm(nuevoKilometraje){
    this.kilometraje = nuevoKilometraje
  }
}

var porche = new Auto('Porche',2018,'Gris','0km')
console.log(porche);
porche.setKm('10km')
console.log(porche);
