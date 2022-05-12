let nomes = ["Abobora", "Cascao", "Monica"];

for(i = 0; i < nomes.length; i++){
    console.log(`Array na posição ${i} ${nomes[i]}`);
}

for(let nome of nomes){
    console.log(nome, nome.length);
}