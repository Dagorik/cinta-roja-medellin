//Ejecucion normal
// console.log(1);
// console.log(2);
// console.log(3);


console.log(1);
setTimeout(()=>{ 
  console.log(2);
},3000)
setTimeout(()=>{ 
  console.log(3);
},4000)
console.log(4);

//Cuello de botella
console.log(1);
setTimeout(() => {
  console.log(2);
},1000)
for(let i = 0; i<9999999999; i++){
  if(i===9999999998){
    console.log(3);
  }
}
console.log(4);