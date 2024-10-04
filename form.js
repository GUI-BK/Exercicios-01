//captura os botões
const btnCadastrar = document.getElementById('cadastrar');
const btnLimpar = document.getElementById('limpar');

//evento de cadastrar
btnCadastrar.addEventListener("click", () => {
    //captura os valores dos inputs
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let data = document.getElementById('data').value;

    //captura as <li>'s 
    let valor1 = document.getElementById('valor1');
    let valor2 = document.getElementById('valor2');
    let valor3 = document.getElementById('valor3');

    //insere os valores dos inputs nas <li>'s
    valor1.innerHTML = "Nome: " + nome
    valor2.innerHTML = "E-mail: " + email
    valor3.innerHTML = "Data de nascimento: " + data

});

//evento de limpar
btnLimpar.addEventListener("click", () => {
    //limpa os inputs
    nome.value = ""
    email.value = ""
    data.value = ""

    //limpa as <li>'s
    valor1.innerHTML = "Nome:"
    valor2.innerHTML = "E-mail:"
    valor3.innerHTML = "Data de nascimento:"
});

