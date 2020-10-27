

let resultado = ''

function enviar() {

    var nome = document.getElementById('nome').value;

   
    alert( nome + ' sua mensagem foi enviada com sucesso !')

}

// ===================== 

let inicio = document.getElementById('inicio')

inicio = prompt('digite seu nome')

let nomeCliente = document.getElementById('nomeCliente')

nomeCliente.innerHTML = inicio




// ===============

function aumentarImg() {
    document.getElementById('img_produto').style.width = "180px"
    document.getElementById('img_produto').style.height = '180px'
}

function diminuirImg() {
    document.getElementById('img_produto').style.width = "100px"
    document.getElementById('img_produto').style.height = '100px'
}

// ===============

function avisoPage() {
    document.getElementById('cartoes')
    alert('continue navegando em nosso e-commerce')
}