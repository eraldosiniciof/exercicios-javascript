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