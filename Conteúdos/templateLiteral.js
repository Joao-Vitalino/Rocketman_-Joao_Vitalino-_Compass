// Template Literal

const mensagem = 'Oi isso é a minha\n primeira mensagem';
console.log(mensagem);
const mensagem1 = 'Oi isso é a minha\n \'primeira\' mensagem';
console.log(mensagem1);
const mensagem2 = 
'Oi isso é a minha\n' +
 '\'primeira\' mensagem';
console.log(mensagem2);

//Object {}^
// Boolean true, false
// string '', ""
// Template ``

const outra = `Oi isso é a minha 'primeira' mensagem`;
console.log(outra);

const nome = 'Joao';

const email = 
`Olá ${nome} - ${10+10}
Boa sorte mais tarde!`;
console.log(email);