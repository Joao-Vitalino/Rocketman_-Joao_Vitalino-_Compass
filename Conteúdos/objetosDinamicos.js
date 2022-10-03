// Natureza dinâmica de objetos

const mouse = {
    cor : 'red',
    marca : 'dazz'
}

console.log(mouse);

mouse.velocidade = 5000;

console.log(mouse);

mouse.trocarDPI = function() {
    console.log('Mudando DPI');
}

console.log(mouse);

delete mouse.velocidade;
delete mouse.trocarDPI;

console.log(mouse);