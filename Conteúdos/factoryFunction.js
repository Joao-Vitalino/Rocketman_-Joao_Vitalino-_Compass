// Factory Functions JavaScript (Função de Fábrica)

// Objeto
const celular = {
    marcaCelular : 'ASUS',
    tamanhoTela : {
        vertical : 155,
        horizontal : 75
    },
    capacidadeBateria : 5000,
    ligar : function() {
        console.log("Fazendo ligação...")
    }
}
console.log(celular);

// Factory Function
function criarCelular(marcaCelular,tamanhoTela,capacidadeBateria){
    return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar() {
            console.log("Fazendo ligação...");
        }
    }
}

const celular1 = criarCelular('Zenfone',5.5,5000);
console.log(celular1);