// Iterando um Array

const numeros = [1,2,3,4,5];

// for...of
// for(numero of numeros)
//     console.log(numero);

// forEach
// numeros.forEach(function(numero) {
//     console.log(numero);
// })
numeros.forEach((numero,indice) => console.log(numero,indice))