lista => [...suspeitos]
lista = [false, true]
TL_suspeitos = 0 + suspeitos.length
for(s = 0; s <= TL_suspeitos; s++){
    if(lista[s] === true){
        console.log(`suspeitos${s}`)
    }
}
