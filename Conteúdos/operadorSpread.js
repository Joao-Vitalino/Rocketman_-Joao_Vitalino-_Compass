// Operador Spread

const primeiro = [1,2,3];
const segundo = [4,5,6];
console.log(primeiro);
console.log(segundo);

//const combinado = primeiro.concat(segundo);
const combinado = [...primeiro,'a',...segundo,'#'];
console.log(combinado);

//const clonado = combinado.slice();
const clonado = [...combinado];
console.log(clonado);