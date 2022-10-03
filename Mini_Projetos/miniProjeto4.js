// Velocidade máxima de 70 até km
// a cada 5 km acima do limite você ganha 1 ponto
// Math.Floor() - Arredondar valores decimais
// caso os pontos sejam, maior que 12 - "Carteira Suspendida"

verificarVelocidade(130);

function verificarVelocidade(velocidade) {
    const velocidadeMaxima = 70;
    const KmPorPonto = 5;
    if (velocidade <= velocidadeMaxima)
        console.log('Ok');
    else {
        const pontos = Math.floor((velocidade - velocidadeMaxima)/KmPorPonto);
        if(pontos >= 12)
            console.log('Carteira Suspensa');
        else
            console.log('Pontos:', pontos);
    }
}