const resultado = document.querySelector('#resultados')

// Função criada em um ficheiro externo que mostra uma mensagem

function mensagem() {
    open('exec1.html', '_blank')
}

// aparece um número aleatório entre 0 e 50
function gerarNumero() {
    let gerar = Math.round(Math.random() * 100, 0)
    let verificar = gerar >= 0 && gerar <= 50

    while (!verificar) {
        gerar = Math.round(Math.random() * 100, 0)
        verificar = gerar >= 0 && gerar <= 50
    }
    
    resultado.innerHTML = `Número aleatório entre 0 e 50:<br>${gerar}`
}

function divisao() {
    const resto = 25 % 3
    resultado.innerHTML = `Resto de 25 dividido por 3: ${resto}`
}

const texto1 = document.querySelector('#texto1')
// texto1.setAttribute('placeholder', 'teste')
texto1.addEventListener("focusin", () => texto1.setAttribute("value", "Caixa de texto ativa"))
texto1.addEventListener("focusout", () => texto1.setAttribute("value", "Perdeu o foco!"))

function exec7() {
    const cxTxt = document.querySelector('#texto7').value
    const num = Number(cxTxt)

    if (cxTxt == '') {
        alert('Digite um número no exercício 7')
    } else {
        if (num >= 0 && num < 10) {
            resultado.innerHTML = 'Insufiente'
        } else if (num >= 10 && num < 14) {
            resultado.innerHTML = 'Bom'
        } else if (num >= 14) {
            resultado.innerHTML = 'Muito Bom!'
        }
    }

}
