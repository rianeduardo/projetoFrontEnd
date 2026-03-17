const imgPc = document.querySelector("#imgPc");
const imgPlayer = document.querySelector("#imgPlayer");
const mensagem = document.querySelector("#mensagemJogo");
const btnComecar = document.querySelector("#comecar");
const pontosPcShow = document.querySelector("#pontosPc");
const pontosPlayerShow = document.querySelector("#pontosPlayer");

const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
document.body.appendChild(canvas);
canvas.style.position = "fixed";
canvas.style.top = "0";
canvas.style.left = "0";
canvas.style.pointerEvents = "none";
canvas.style.zIndex = "9999";

let particulas = [];

function ajustarCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", ajustarCanvas);
ajustarCanvas();

let pontosPc = 0;
let pontosPlayer = 0;
let escolhaPlayer = null;

const imagens = ["pedra.png", "papel.png", "tesoura.png"];
const nomes = ["Pedra", "Papel", "Tesoura"];

btnComecar.addEventListener("click", () => {
  if (escolhaPlayer === null) return;

  const escolhaPc = Math.floor(Math.random() * 3);
  imgPc.src = imagens[escolhaPc];

  criarParticulas();

  mensagem.classList.remove("animar-texto");
  void mensagem.offsetWidth;
  mensagem.classList.add("animar-texto");

  const msg = decidirVencedor(escolhaPc, escolhaPlayer);
  mensagem.innerHTML = msg;

  updPontos();
});

function escolherPlayer(valor) {
  escolhaPlayer = valor;
  imgPlayer.src = imagens[valor];
}

function decidirVencedor(pc, player) {
  if (pc === player) return "Empate!";
  if ((player - pc + 3) % 3 === 1) {
    pontosPlayer++;
    return `${nomes[player]} vence ${nomes[pc]}! +1 ponto para o Jogador`;
  } else {
    pontosPc++;
    return `${nomes[pc]} vence ${nomes[player]}! +1 ponto para a I.A`;
  }
}

function updPontos() {
  pontosPlayerShow.innerHTML = pontosPlayer;
  pontosPcShow.innerHTML = pontosPc;
}

function criarParticulas() {
  const x = window.innerWidth / 2;
  const y = window.innerHeight / 2;

  for (let i = 0; i < 50; i++) {
    particulas.push({
      x: x,
      y: y,
      vx: (Math.random() - 0.5) * 15,
      vy: (Math.random() - 0.5) * 15,
      size: Math.random() * 8 + 2,
      color: "#FFF",
      alpha: 1
    });
  }
}

function animarParticulas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particulas.forEach((p, index) => {
    p.x += p.vx;
    p.y += p.vy;
    p.alpha *= 0.95;
    ctx.globalAlpha = p.alpha;
    ctx.fillStyle = p.color;
    ctx.fillRect(p.x, p.y, p.size, p.size);

    if (p.alpha < 0.01) particulas.splice(index, 1);
  });
  requestAnimationFrame(animarParticulas);
}
animarParticulas();