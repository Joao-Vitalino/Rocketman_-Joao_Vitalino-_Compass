// Encontrar Elementos (PRIMITIVOS)

const numeros = [1,2,3,4];

// Encontra (1)
console.log(numeros.indexOf(2));
// Não Encontra (-1)
console.log(numeros.indexOf(5));
// Última referência
console.log(numeros.lastIndexOf(3));
// Existe (true)
console.log(numeros.indexOf(2) !== -1);
console.log(numeros.includes(2));