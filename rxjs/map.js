const list = [5,3,1,2,3,4,1,2,3,4,1,3]
const lista2 = [
    {nombre:'Pedro',id:1,age:22},
    {nombre:'Juan',id:2,age:32},
    {nombre:'Marta',id:3,age:55},
    {nombre:'Panchito',id:4,age:12}
]

//Manera fea
const nameList = []
for(let i = 0; i < lista2.length; i++){
    nameList.push(lista2[i].nombre)
}

//Manera bien
const nameListMap = lista2.map((elemnt,index,list) => {
    return elemnt.age
});

//Super bien
const nameListMap2 = lista2.map((elemnt) => elemnt.age);

console.log(nameListMap2);
console.log(nameList);
