
const verificarProduto = (opcao) => {
    let resultado = "<br><h3>Opção selecionada</h3><br><br>"
    switch(opcao){
        case 'hb1':
            resultado += "Hamburguer Simples esta com preco de R$ 30"
            console.log('Hamburguer Simples esta com preco de R$ 30')
            break
        case 'hb2':
            resultado += "Hamburguer Simples esta com preco de R$ 30"
            console.log('Hamburguer Duplo esta com preco de R$ 35')
            break
        case 'hb3':
            resultado += "Hamburguer Simples esta com preco de R$ 30"
            console.log('Hamburguer Bacon esta com preco de R$ 40')
            break
        case 'hb4':
            resultado += "Hamburguer Simples esta com preco de R$ 30"
            console.log('Hamburguer Bacon Duplo esta com preco de R$ 45')
            break
        default: 
            console.log('Opção invalida')
            break
    }
}