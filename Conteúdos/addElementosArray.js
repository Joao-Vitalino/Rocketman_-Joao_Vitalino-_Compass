// Introdução a Arrays
// Add novos elementos
const numeros = [1,2,3];
console.log(numeros);

// Início
numeros.unshift(0);
console.log(numeros);
// Meio
numeros.splice(1,0,'a');
console.log(numeros);
// Final
numeros.push(5);
console.log(numeros);