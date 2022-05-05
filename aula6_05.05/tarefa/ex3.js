let media = 0
let n = 5
for (let i = 0; i < n; i++){
    let salario = Math.random() * 1000
    console.log("salario: ", salario.toFixed(2))
    media += salario
}

media = media / n

console.log(media.toFixed(2));