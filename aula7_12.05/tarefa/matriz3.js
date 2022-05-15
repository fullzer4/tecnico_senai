x1 = Math.floor(Math.random() * 10)
y1 = Math.floor(Math.random() * 10)
z1 = Math.floor(Math.random() * 10)
matriz1 = [x1, y1, z1]
x2 = Math.floor(Math.random() * 10)
y2 = Math.floor(Math.random() * 10)
z2 = Math.floor(Math.random() * 10)
matriz2 = [x2, y2, z2]
x3 = Math.floor(Math.random() * 10)
y3 = Math.floor(Math.random() * 10)
z3 = Math.floor(Math.random() * 10)
matriz3 = [x3, y3, z3]

matrizP = [matriz1, matriz2, matriz3]
console.log(matrizP);


diagonalP1 = matrizP[0][0] *=2
diagonalP2 = matrizP[1][1] *=2
diagonalP3 = matrizP[2][2] *=2

console.log(`Os elementos da diagonal principal multiplicados ficam: ${diagonalP1}, ${diagonalP2}, ${diagonalP3}`);