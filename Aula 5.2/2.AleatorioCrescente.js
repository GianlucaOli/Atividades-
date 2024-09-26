let numeros = [40, 1, 5, 200, 211, 210];
console.log(numeros.sort()); //ordem do primeiro numero ex: 1, 200, 201, 30
console.log(numeros.sort((a, b) => a - b)); //ordem crescente do numero
console.log(numeros.sort((a, b) => b - a)); //ordem decrescente do numero