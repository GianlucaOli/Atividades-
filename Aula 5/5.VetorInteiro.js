let numeros = [1, 2, 3, 4, 5];
console.log(numeros);
let soma = 0;
for (let i = 0; i < numeros.length; i++) {
  soma = soma + numeros[i];
  console.log(`a soma desses numeros é ${soma}`);
}