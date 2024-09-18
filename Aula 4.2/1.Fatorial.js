const prompt = require("prompt-sync")();
let numero = Number(prompt("Digite seu número: "));

let resultado = 1;
for (let i = 1; i <= numero; i++) {
  resultado *= i;
}
console.log(`O fatorial é ${resultado}`);