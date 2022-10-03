function verificaCalculo() {
    if (document.onclick(calculaAdicao())) {
        document.getElementById('verificaEntrada').calculaAdicao
    }
}

function calculaAdicao() {
    num1 = document.getElementById('numero1').value;
    num2 = document.getElementById('numero2').value;
    return num1 + num2;
}

function calculaSubtracao() {
    num1 = document.getElementById('numero1').value;
    num2 = document.getElementById('numero2').value;
    return num1 - num2;
}

function calculaMulplicacao() {
    num1 = document.getElementById('numero1').value;
    num2 = document.getElementById('numero2').value;
    return num1 * num2;
}

function calculaDivisao() {
    num1 = document.getElementById('numero1').value;
    num2 = document.getElementById('numero2').value;
    return num1 / num2;
}

function calculaPotenciacao() {
    num1 = document.getElementById('numero1').value;
    num2 = document.getElementById('numero2').value;
    return Math.pow(num1,num2);
}

function calculaRadiciacao() {
    num1 = document.getElementById('numero1').value;
    num2 = document.getElementById('numero2').value;
    return Math.sqrt(num1,num2);
}