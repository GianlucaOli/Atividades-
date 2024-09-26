let matriz = [
  [30, 12, 94],
  [4, 100, 50],
];

let maiorValor = matriz[0][0];

for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 3; j++) {
    if (matriz[i][j] > maiorValor) {
      maiorValor = matriz[i][j];
    }
  }
}

console.log("O maior valor da matriz é:", maiorValor);
