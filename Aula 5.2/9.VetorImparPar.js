let numeros = [17, 12, 5, 9, 20, 2];
console.log(numeros.sort((a, b) => a - b));
let par = numeros.filter(num => num % 2 === 0)
console.log(`Seus numeros pares são: ${par}`)
let impar = numeros.filter(num => num % 2 !== 0)
console.log(`Seus numeros impares são: ${impar}`)
