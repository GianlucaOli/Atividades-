const prompt = require("prompt-sync") ()
const numero = Number(prompt("digite seu número: "))
if (!isNaN(numero)) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
} else {
    console.log("Por favor, digite um número válido.");
}
