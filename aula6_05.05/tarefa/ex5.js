function minhalista(...nomes){ // ele deixa inserir mais doq um nome na funcao como lista
    console.log(nomes);
    Qnomes = nomes.length;
    TotalC = (nomes.join(''));
    TotalC = TotalC.length
    if (Qnomes > 1){
        console.log(`numero de caracteres Total:  ${TotalC}, com um total de ${Qnomes} de nomes`);
    }
}
minhalista("Matheus", "Gabriel", "Joao", "Gigi", "Isabela", "Roger", "Tulio", "Federico", "Manuela", "PauloBastistella");