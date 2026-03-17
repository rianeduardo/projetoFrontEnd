const audio = new AudioContext();

function tocarNota(freq) {
    const osc = audio.createOscillator();
    const gain = audio.createGain();

    osc.frequency.value = freq;
    osc.type = "triangle";

    osc.connect(gain);
    gain.connect(audio.destination);

    const agora = audio.currentTime;

    gain.gain.setValueAtTime(0.001, agora);
    gain.gain.exponentialRampToValueAtTime(0.4, agora + 0.01); // ataque
    gain.gain.exponentialRampToValueAtTime(0.001, agora + 0.4); // decaimento

    osc.start(agora);
    osc.stop(agora + 0.4);
}

const notas = {

    do1: 261.63,
    dos1: 277.18,
    re1: 293.66,
    res1: 311.13,
    mi1: 329.63,
    fa1: 349.23,
    fas1: 369.99,
    sol1: 392.00,
    sols1: 415.30,
    la1: 440.00,
    las1: 466.16,
    si1: 493.88,

    do2: 523.25,
    dos2: 554.37,
    re2: 587.33,
    res2: 622.25,
    mi2: 659.25,
    fa2: 698.46,
    fas2: 739.99,
    sol2: 783.99,
    sols2: 830.61,
    la2: 880.00,
    las2: 932.33,
    si2: 987.77

}

for (let nota in notas) {

    const tecla = document.getElementById(nota);

    if (tecla) {

        tecla.addEventListener("click", function () {

            tocarNota(notas[nota]);

        });

    }

}

const teclado = {

    a: "do1",
    w: "dos1",
    s: "re1",
    e: "res1",
    d: "mi1",
    f: "fa1",
    t: "fas1",
    g: "sol1",
    y: "sols1",
    h: "la1",
    u: "las1",
    j: "si1",

    k: "do2",
    o: "dos2",
    l: "re2",
    p: "res2",
    z: "mi2",
    x: "fa2",
    c: "fas2",
    v: "sol2",
    b: "sols2",
    n: "la2",
    m: "las2",
    q: "si2"

}

document.addEventListener("keydown", function (event) {

    const nota = teclado[event.key];

    if (nota) {

        const tecla = document.getElementById(nota);

        if (tecla) {
            tecla.click();
        }

    }

});