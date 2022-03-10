const somar = function(x, y){
    let resultado = x + y
    return "soma: ("+ x +") + ("+ y +") = " + resultado
 }

const subtrair =function(x,y){
    let resultado = x - y
    return "subtracao: ("+ x +") - ("+ y +") = " + resultado
}
 
console.log(somar(20, 40))
console.log(subtrair(40, 20))
