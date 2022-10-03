// Combinar e Cortar Arrays

const primeiro = [1,2,3];
const segundo = [4,5,6];
console.log(primeiro);
console.log(segundo);

// Combinar
const combinado = primeiro.concat(segundo);
console.log(combinado);

// Dividir
const cortado = combinado.slice(1,3)
console.log(cortado);

const cortado2 = combinado.slice(1)
console.log(cortado2);

const cortado3 = combinado.slice()
console.log(cortado3);