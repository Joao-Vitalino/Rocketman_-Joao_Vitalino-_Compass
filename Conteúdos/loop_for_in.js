// LOOP For..In

const pessoa = {
    nome : 'Joao',
    idade : 22
};

for(let chave in pessoa) {
    console.log(chave, pessoa.nome);
    console.log(chave, pessoa['nome']);
}

// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }

const cores = ['Vermelho', 'Azul', 'Verde'];

for(let indice in cores) {
    console.log(indice, cores[indice])
}