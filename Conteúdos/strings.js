// Strings

// Tipo primitivo
const mensagem = 'minha primeira mensagem';
// Tipo objeto
const outraMensagem = new String('bom dia');

console.log(typeof(mensagem));
console.log('');
console.log(typeof(outraMensagem));
console.log('');
console.log(outraMensagem.length);
console.log('');
console.log(outraMensagem[2]);
console.log('');
console.log(mensagem.includes('primeira'));
console.log('');
console.log(mensagem.includes('vermelho'));
console.log('');
console.log(mensagem.startsWith('verde'));
console.log('');
console.log(mensagem.endsWith('mensagem'));
console.log('');
console.log(mensagem.indexOf('primeira'));
console.log('');
console.log(mensagem.replace('minha', 'sua'));
console.log('');
console.log(mensagem.trim());
console.log('');
console.log(mensagem.split(' '));