//let nomes = ["Clara", "Rafael", "Sofia", "Lucas", "Isabela", "Thiago", "Ana", "Pedro", "Mariana", "Bruno"]

const prompt = require("prompt-sync")();

let nomes = [];

// Se você quiser substituir os nomes no vetor, use um loop que vai até 10
for (let i = 0; i < 10; i++) {
  let nome = prompt(`Digite o nome ${i + 1}:`);
  nomes[i] = nome; // Substitui o nome na posição correspondente
}

// Entrando com o nome a ser buscado
let nomeBuscar = prompt("Digite o nome que deseja buscar:");

// Verificando se o nome está no vetor
if (nomes.includes(nomeBuscar)) {
  console.log("Achei");
} else {
  console.log("Não Achei");
}
