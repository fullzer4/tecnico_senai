function salarios(...salario){
    console.log(salario);
    Qsalario = salario.length
    Media = 0
    Total = 0
    for(s = 0; s < salario.length; s++){
        Total = Total + salario[s]
    }
    Media = Total / Qsalario
    console.log(`O total de salarios é: ${Qsalario} e a média deles é: ${Media}`)
}
salarios(1000, 1000, 1000, 1000, 1000)