const list = [5,3,1,2,3,4,1,2,3,4,1,3]
const lista2 = [
    {nombre:'Pedro',id:1,age:22},
    {nombre:'Juan',id:2,age:32},
    {nombre:'Marta',id:3,age:55},
    {nombre:'Panchito',id:4,age:12}
]

const arrayFilter = lista2.filter((element,index,array) => {
    return element.age > 25
});

const filter = lista2.filter((element)=> element.age > 25);

const arrayFor = []
for(let i = 0; i< lista2.length; i++){
    if(lista2[i].age > 25){
       arrayFor.push(lista2[i]) 
    }
}

console.log(filter);
console.log(arrayFor);