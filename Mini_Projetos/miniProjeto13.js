// Objeto Postagem de Blog (Exercício)
// Eu quero que você crie neste exercício um objeto de postagem de blog que vai conter as seguintes propriedades
// postagem
/*
título
mensagem
autor
visualizacoes
comentarios
    (autor,mensagem)
estaAoVivo
*/

let postagem = {
    titulo : 'a',
    mensagem : 'b',
    autor : 'c',
    visualizacoes : 10,
    comentarios : [
        {autor : 'a', mensagem : 'b'},
        {autor : 'a', mensagem : 'b'}
    ],
    estaAoVivo : true
}

console.log(postagem);