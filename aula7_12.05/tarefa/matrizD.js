x1 = Math.floor(Math.random() * 10)
y1 = Math.floor(Math.random() * 10)
matriz1 = [x1, y1]

x2 = Math.floor(Math.random() * 10)
y2 = Math.floor(Math.random() * 10)
matriz2 = [x2, y2]

matrizP = [matriz1, matriz2]
console.log(matrizP);

determinante1 = matrizP[1][1] * matrizP[0][0]
determinante2 = matrizP[1][0] * matrizP[0][1]
determinante = determinante1 - determinante2
console.log(determinante);