const imgPc = document.querySelector("#imgPc");
const imgPlayer = document.querySelector("#imgPlayer");
const mensagem = document.querySelector("#mensagemJogo");
const btnComecar = document.querySelector("#comecar");
const pontosPcShow = document.querySelector("#pontosPc")
const pontosPlayerShow = document.querySelector("#pontosPlayer")

let pontosPc = 0;
let pontosPlayer = 0;
let escolhaPlayer = null;

const imagens = ["pedra.png", "papel.png", "tesoura.png"];
const nomes = ["Pedra", "Papel", "Tesoura"];

btnComecar.addEventListener("click", () => {
  if (escolhaPlayer === null) {
    console.log("IMPOSSIVEL CONTINUAR");
    return;
  }

  const escolhaPc = Math.floor(Math.random() * 3);

  imgPc.src = imagens[escolhaPc];

  const msg = decidirVencedor(escolhaPc, escolhaPlayer);
  mensagem.innerHTML = msg;
});

function escolherPlayer(valor) {
  escolhaPlayer = valor;
  imgPlayer.src = imagens[valor];
}

function decidirVencedor(pc, player) {
  if (pc === player) return "Empate!";

  if ((player - pc + 3) % 3 === 1) {
    pontosPlayer = pontosPlayer + 1;
    return `${nomes[player]} vence ${nomes[pc]}! +1 Ponto Jogador`;
  } else {
    pontosPc = pontosPc + 1;
    return `${nomes[pc]} vence ${nomes[player]}! +1 Ponto I.A`;
  }
}

function updPontos(pontosPlayerShow, pontosPcShow) {
    pontosPlayerShow.innerHTML = pontosPlayer
    pontosPcShow.innerHTML = pontosPc
}

setInterval(() => {
    updPontos(pontosPlayerShow, pontosPcShow)
}, 1);