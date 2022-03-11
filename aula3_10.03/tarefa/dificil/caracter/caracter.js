nome1 = "gabriel"
nome2 = "giovana"
nome3 = "lucas"
nome4 = "anselmo"
quantidade1 = nome1.length
quantidade2 = nome2.length
quantidade3 = nome3.length
quantidade4 = nome4.length
total = quantidade1 + quantidade2 + quantidade3 + quantidade4

const  contagem =function(){
    console.log("O total de caracteres que a nossa lista tem é: "+total+"")
    console.log("Lista:")
    console.log(nome1)
    console.log(nome2)
    console.log(nome3)
    console.log(nome4)
}
console.log(contagem())