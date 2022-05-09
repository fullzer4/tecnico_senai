//leia 10 nomes e mostre ao usuario a quantidade de letras

let nomes = ["Gabriel", "jose", "Adolfo", "Anselmo", "Isabelas", "Augusto", "Gustavo", "Gabriela", "Giovana", "Matheus"]

let n = nomes.length
let total = 0

for (let i = 0; i < n; i++){
    total += nomes[i].length
    console.log(nomes)
}
console.log("Total de Caracteres", total)
