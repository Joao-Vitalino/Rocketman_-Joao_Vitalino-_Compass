// Remover Elementos do Array

const numeros = [1,2,3,4,5,6];
console.log(numeros);

numeros.push();
numeros.unshift();
numeros.splice();

// Final
const ultimo = numeros.pop();
console.log(ultimo);
console.log(numeros);
// Início
const primeiro = numeros.shift();
console.log(primeiro);
console.log(numeros);
// Meio
const meio = numeros.splice(2,1);
console.log(meio);
console.log(numeros);