const luzes = document.querySelectorAll('.luz');
const estado = document.getElementById("estado");

let i = 0;
let contador = 5;

const tempos = [5, 2, 5];
// verde 5s, amarelo 2s, vermelho 5s

function mudarSemaforo() {

    luzes.forEach(luz => luz.className = 'luz');

    if (i == 0) {
        document.getElementById('verde').classList.add('verde');
        estado.innerHTML = `🟢 SIGA (${contador})`;
    }

    else if (i == 1) {
        document.getElementById('amarelo').classList.add('amarelo');
        estado.innerHTML = `🟡 ATENÇÃO (${contador})`;
    }

    else if (i == 2) {
        document.getElementById('vermelho').classList.add('vermelho');
        estado.innerHTML = `🔴 PARE (${contador})`;
    }

}

function cicloSemaforo() {

    mudarSemaforo();

    contador--;

    if (contador < 0) {

        i = (i + 1) % 3;
        contador = tempos[i];

    }

}

contador = tempos[0];

setInterval(cicloSemaforo, 1000);