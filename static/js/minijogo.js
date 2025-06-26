function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  const dragged = document.getElementById(data);
  const container = ev.target.closest("#pecas");

  // Mover o botão para a nova posição
  if (ev.target.tagName === "BUTTON") {
    container.insertBefore(dragged, ev.target);
  } else {
    container.appendChild(dragged);
  }
}

function verificar() {
  const ordem = Array.from(document.querySelectorAll("#pecas button"))
    .map(btn => btn.innerText);

  if (ordem.join() === "Verde,Amarelo,Azul") {
    document.getElementById("resultado-mini").innerText = "✅ Correto! Você montou a bandeira!";
  } else {
    document.getElementById("resultado-mini").innerText = "❌ Tente novamente!";
  }
}

const bandeiras = [
  {
    pais: "Brasil 🇧🇷",
    ordem: ["Verde", "Amarelo", "Azul"],
    explicacao: "A bandeira do Brasil tem fundo verde, losango amarelo e círculo azul com estrelas."
  },
  {
    pais: "Alemanha 🇩🇪",
    ordem: ["Preto", "Vermelho", "Amarelo"],
    explicacao: "A bandeira alemã é composta por três faixas horizontais: preto, vermelho e amarelo."
  },
  {
    pais: "França 🇫🇷",
    ordem: ["Azul", "Branco", "Vermelho"],
    explicacao: "A bandeira francesa tem três faixas verticais: azul, branco e vermelho."
  }
];

let indiceAtual = 0;

function carregarBandeira() {
  const bandeira = bandeiras[indiceAtual];
  document.getElementById("titulo-jogo").innerText = `Monte a bandeira de ${bandeira.pais}`;

  const pecas = bandeira.ordem
    .map(cor => `<button draggable="true" ondragstart="drag(event)" id="${cor.toLowerCase()}">${cor}</button>`)
    .sort(() => Math.random() - 0.5) // embaralhar
    .join("");

  document.getElementById("pecas").innerHTML = pecas;
  document.getElementById("resultado-mini").innerText = "";
}

function verificar() {
  const bandeira = bandeiras[indiceAtual];
  const ordem = Array.from(document.querySelectorAll("#pecas button")).map(btn => btn.innerText);

  if (ordem.join() === bandeira.ordem.join()) {
    document.getElementById("resultado-mini").innerHTML = `✅ Correto! ${bandeira.explicacao}`;
  } else {
    document.getElementById("resultado-mini").innerHTML = `❌ Tente novamente! ${bandeira.explicacao}`;
  }
}

function proximaBandeira() {
  indiceAtual = (indiceAtual + 1) % bandeiras.length;
  carregarBandeira();
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  const dragged = document.getElementById(data);
  const container = ev.target.closest("#pecas");

  if (ev.target.tagName === "BUTTON") {
    container.insertBefore(dragged, ev.target);
  } else {
    container.appendChild(dragged);
  }
}

// Iniciar primeira bandeira ao carregar
window.onload = carregarBandeira;

