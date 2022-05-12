let numeros = [];

for(i = 0; i <10; i++){
    numeros.push(Math.random()*10)
}

console.log(numeros);

for(i in numeros){
    numeros[i] *= numeros[i]
}
console.log(numeros);