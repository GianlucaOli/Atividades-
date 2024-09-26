let matriz = [
  [1, 0, 0],
  [4, 5, 0],
  [7, 8, 9],
];

for (let i = 0; i < matriz.length; i++) {
  let linha = "";

  // Itera sobre as colunas de cada linha
  for (let j = 0; j < matriz[i].length; j++) {
    linha += matriz[i][j] + " ";
  }

  console.log(linha.trim());
}
