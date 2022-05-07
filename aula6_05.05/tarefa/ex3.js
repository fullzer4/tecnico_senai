let media = 0

for (let i = 0; i < 5; i++){
    let salario = Math.random() * 1000
    console.log("salario: ", salario.toFixed(2))
    media += salario
}

media = media / 5

console.log("media: " + media.toFixed(2));