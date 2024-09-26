let numeros = [5, 10, 15, 20, 25, 30]
let soma = 0
for (let numero of numeros) {
    soma  = soma + numero;
    media = soma / 6
  }
console.log(`Soma dos numeros é: ${soma}`);
console.log(`A média total é: ${media}`)