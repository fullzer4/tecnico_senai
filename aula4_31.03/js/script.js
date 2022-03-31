let produtos = document.querySelector("#produtos")
let botao = document.querySelector("#comprar")

botao.addEventListener("click", comprar)
function comprar(){
    let compra ="Produto comprado/n"
    if(produtos.value == "hamburguer Simples"){
        compra += "Produto: " +produtos.value + ", valor: R$45,00"
    } else if (produtos.value == "Hamburguer Duplo"){
        compra += "Produto: " +produtos.value + ", valor: R$45,00"
    } else if (produtos.value == "Hamburguer Duplo com bacon"){
        compra += "Produto: " +produtos.value + ", valor: R$45,00"
    } else if (produtos.value == "Hamburguer Triplo com bacon"){
        compra += "Produto: " +produtos.value + ", valor: R$45,00"
    } else {
        compra += "produto não selecionado"
    }
    alert(compra)  
}