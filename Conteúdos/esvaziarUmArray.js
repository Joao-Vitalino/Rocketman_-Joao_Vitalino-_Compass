// Esvaziar um Array

let numeros = [1,2,3,4,5,6];
console.log(numeros);
let outros = numeros;

// Solução 1
// numeros = [];
// console.log(numeros);
// console.log(outros);

// Solução 2 - MELHOR OPÇÃO
numeros.length = 0;
console.log(numeros);
console.log(outros);

// Solução 3
// numeros.splice(0, numeros.length);
// console.log(numeros);
// console.log(outros);

// Solução 4
// while (numeros.length > 0) {
//     numeros.pop();
// }
// console.log(numeros);
// console.log(outros);