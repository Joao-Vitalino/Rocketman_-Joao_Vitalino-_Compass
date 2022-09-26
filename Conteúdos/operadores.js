// //OPERADORES

// // ARITMÉTICOS (MATEMÁTICOS)
// let salario = 100;

// // + - * / **

// console.log(salario + salario);
// console.log(salario - salario);
// console.log(salario * salario);
// console.log(salario / salario);
// console.log(5 ** 5);

// // ++ e -- incremento e decremento

// let idade = 18;

// console.log(idade++);
// console.log(idade);
// console.log(++idade);

// console.log(idade--);
// console.log(idade);
// console.log(--idade);

// ATRIBUIÇÃO

// let valorTecladoGamer = 100;
// // valorTecladoGamer = valorTecladoGamer + valorTecladoGamer
// valorTecladoGamer += valorTecladoGamer

// console.log(valorTecladoGamer);

// // valorTecladoGamer = valorTecladoGamer - valorTecladoGamer
// valorTecladoGamer -= valorTecladoGamer

// console.log(valorTecladoGamer);

// IGUALDADE

//Igualdade estrita
// === compara os valores e o tipo também
// esse é o mais recomendado
// console.log(1 === 1);
// console.log(1 === '1');

// //Igualdade solta
// // == compara apenas os valores
// console.log(1 == 1);
// console.log(1 == '1');

// OPERADOR TERNÁRIO
// 100 pontos premium, senao comum
// let pontos = 100;
// let tipo = pontos >= 100 ? 'premium' : 'comum';
// console.log(tipo);

// LÓGICOS
// AND (&&) OR (||) NOT (!=)

// //AND
// console.log(true && true);
// console.log(true && false);

// let maiorDeIdade = true;
// let possuiCarteiraDeTrabalho = true;
// let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;

// console.log(podeAplicar);

//OR
console.log(true || true);
console.log(true || false);

let maiorDeIdade = false;
let possuiCarteiraDeTrabalho = false;
let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho;

console.log("Pode aplicar: ",podeAplicar);

//OPERADOR NOT (!)
let candidatoRecusado = !podeAplicar;

console.log("Candidato recusado: ",candidatoRecusado);

// BITWISE
//Falsy
//undefined, null, 0, false, '', NaN - not a number

//Truthy
//false || 'rafael' = 'rafael'
//false || 1 = 1

let corPersonalizada = 'Vermelho';
let corPadrao = 'Azul';
let corPerfil = corPersonalizada || corPadrao;
//Retorna o primeiro verdadeiro que encontrar
// no caso o Vermelho
console.log(corPerfil);

corPersonalizada = '';
corPadrao = 'Azul';
corPerfil = corPersonalizada || corPadrao;
//Retorna o primeiro verdadeiro que encontrar
// no caso o Vermelho
console.log(corPerfil);