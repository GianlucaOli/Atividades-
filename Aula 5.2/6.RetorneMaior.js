let numeros = [3, 1, 5, 9, 2, 4];
console.log(numeros.sort((a, b) => a - b)); //ordem crescente do numero
let organizado = numeros.sort((a, b) => a - b);
console.log(organizado.slice(5))