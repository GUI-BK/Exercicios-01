//captura os botões
const btnSoma = document.getElementById('soma');
const btnSub = document.getElementById('subtracao');
const btnMulti = document.getElementById('multiplicacao');
const btnDiv = document.getElementById('divisao');


//captura o texto do resultado
let resultado = document.getElementById('resultado');


//cálculo da soma
btnSoma.addEventListener("click", () => {
    let valor1 = document.getElementById('valor1').value;
    let valor2 = document.getElementById('valor2').value;
    let soma = parseInt(valor1) + parseInt(valor2);

    resultado.innerHTML= "Resultado:" + soma
});


//cálculo da subtração
btnSub.addEventListener("click", () => {
    let valor1 = document.getElementById('valor1').value;
    let valor2 = document.getElementById('valor2').value;
    let sub = parseInt(valor1) - parseInt(valor2);

    resultado.innerHTML= "Resultado:" + sub
});


//cálculo da multiplicação
btnMulti.addEventListener("click", () => {
    let valor1 = document.getElementById('valor1').value;
    let valor2 = document.getElementById('valor2').value;
    let multi = parseInt(valor1) * parseInt(valor2);

    resultado.innerHTML = "Resultado:" + multi
});


//calculo da divisão
btnDiv.addEventListener("click", () => {
    let valor1 = document.getElementById('valor1').value;
    let valor2 = document.getElementById('valor2').value;
    let div = parseInt(valor1) / parseInt(valor2);

    resultado.innerHTML= "Resultado:" + div
});

