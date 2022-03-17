const clean = function(){
    document.getElementById('resultado').value = "";
    let x = document.getElementById("x").value = "";
    let y = document.getElementById("y").value = "";
}

const somar = function(){
    let x = document.getElementById("x").value
    let y = document.getElementById("y").value
    resultado = parseFloat(x) + parseFloat(y)
    document.getElementById("resultado").value = resultado
    console.log(resultado)
}

const diminuir = function(){
    let x = document.getElementById("x").value
    let y = document.getElementById("y").value
    resultado = parseFloat(x) - parseFloat(y)
    document.getElementById("resultado").value = resultado
    console.log(resultado)
}
const dividir = function(){
    let x = document.getElementById("x").value
    let y = document.getElementById("y").value
    resultado = parseFloat(x) / parseFloat(y)
    document.getElementById("resultado").value = resultado
    console.log(resultado)
}
const multiplicar = function(){
    let x = document.getElementById("x").value
    let y = document.getElementById("y").value
    resultado = parseFloat(x) * parseFloat(y)
    document.getElementById("resultado").value = resultado
    console.log(resultado)
}
const potencia = function(){
    let x = document.getElementById("x").value
    let y = document.getElementById("y").value
    resultado = Math.pow(x, y)
    document.getElementById("resultado").value = resultado
    console.log(resultado)
}

const raiz = function(){
    let x = document.getElementById("x").value
    let y = document.getElementById("y").value
    resultado = Math.sqrt(x)
    document.getElementById("resultado").value = resultado
    console.log(resultado)
}

const resto = function(){
    let x = document.getElementById("x").value
    let y = document.getElementById("y").value
    resultado = x % y
    document.getElementById("resultado").value = resultado
    console.log(resultado)
}