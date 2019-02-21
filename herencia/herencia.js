class Animal{
  constructor(nombre){
    this.cerebro = true,
    this.patas = 0
    this.nombre = nombre
  }
  getNombre(){
    return this.nombre
  }
}
class Perro extends Animal{
  constructor(pulgas,nombre){
    super(nombre);
    this.pulgas = pulgas
    this.patas = 4
    console.log('Se creo el Perro');
  }
}
const snoopy = new Perro(8,'Snoopy')
console.log(snoopy.getNombre());


// class Gato extends Animal{
//   constructor(vidas){
//     this.vidas = vidas
//   }
// }