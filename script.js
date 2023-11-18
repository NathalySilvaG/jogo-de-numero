let numeroSecreto;
let tentativas = 0;

function reiniciarJogo() {
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    tentativas = 0;
    document.getElementById('feedback').innerHTML = '';
    document.getElementById('contador').innerHTML = '';
}

function verificarAdivinhacao() {
    let tentativa = parseInt(document.getElementById('tentativa').value);
    tentativas++;

    if (tentativa === numeroSecreto) {
        document.getElementById('feedback').innerHTML = `Parabéns! Você acertou o número em ${tentativas} tentativas!`;
        let jogarNovamente = confirm('Deseja jogar novamente?');
        if (jogarNovamente) {
            reiniciarJogo();
        }
    } else if (Math.abs(tentativa - numeroSecreto) <= 10) {
        document.getElementById('feedback').innerHTML = 'Quente!';
    } else {
        document.getElementById('feedback').innerHTML = 'Frio!';
    }
    document.getElementById('contador').innerHTML = `Tentativas: ${tentativas}`;
}

reiniciarJogo();
