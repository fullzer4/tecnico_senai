
    const somar = function(){
        let x = document.getElementById("x").value
        let y = document.getElementById("y").value
        z = parseFloat(x) + parseFloat(y)
        document.getElementById("z").value = z
        console.log(z)
    }
    const diminuir = function(){
        let x = document.getElementById("x").value
        let y = document.getElementById("y").value
        z = parseFloat(x) - parseFloat(y)
        document.getElementById("z").value = z
        console.log(z)
    }
    const dividir = function(){
        let x = document.getElementById("x").value
        let y = document.getElementById("y").value
        z = parseFloat(x) / parseFloat(y)
        document.getElementById("z").value = z
        console.log(z)
    }
    const multiplicar = function(){
        let x = document.getElementById("x").value
        let y = document.getElementById("y").value
        z = parseFloat(x) * parseFloat(y)
        document.getElementById("z").value = z
        console.log(z)
    }
