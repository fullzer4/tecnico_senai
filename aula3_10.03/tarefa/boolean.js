culpado1="Giovana"
culpado2="Gabriel"
culpado3="Arthur"
culpado4="Lucas"
culpado5="Isabel"
culpado6="Ana"
pesquisa1= true
pesquisa2= false
pesquisa3= false
pesquisa4= true
pesquisa5= true
pesquisa6= false
v1 = isAtivo= pesquisa1
v2 = isAtivo= pesquisa2
v3 = isAtivo= pesquisa3
v4 = isAtivo= pesquisa4
v5 = isAtivo= pesquisa5
v6 = isAtivo= pesquisa6

const verificar =function(culpado, v){
    if(v == true){
        return "Caso: "+ culpado +", Inocente"
    }
    else{
        return "Caso: "+ culpado +", Culpado"
    }
}

console.log("Achamos os culpados este e o resultado de nossa pesquisa:")
console.log("culpados:")
console.log(verificar(culpado1, v1))
console.log(verificar(culpado2, v2))
console.log(verificar(culpado3, v3))
console.log(verificar(culpado4, v4))
console.log(verificar(culpado5, v5))
console.log(verificar(culpado6, v6))