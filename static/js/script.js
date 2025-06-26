let perguntas = [];
let indice = 0;
let pontuacao = 0;
let idioma = 'pt';

function carregarPerguntas() {
  idioma = document.getElementById("idioma").value;
  fetch(`/perguntas?lang=${idioma}`)
    .then(res => res.json())
    .then(data => {
      perguntas = data;
      indice = 0;
      pontuacao = 0;
      mostrarPergunta();
    });
}

function mostrarPergunta() {
  const p = perguntas[indice];
  document.getElementById("tema").innerText = `Tema: ${p.tema}`;
  document.getElementById("pergunta").innerText = p.pergunta;
  document.getElementById("opcoes").innerHTML = "";
  document.getElementById("explicacao").classList.add("hidden");

  p.opcoes.forEach((op, i) => {
    const btn = document.createElement("button");
    btn.innerText = op;
    btn.onclick = () => responder(i);
    document.getElementById("opcoes").appendChild(btn);
  });

  document.getElementById("proximo").disabled = true;
}

function responder(indiceEscolhido) {
  const p = perguntas[indice];
  document.querySelectorAll("#opcoes button").forEach(b => b.disabled = true);

  if (indiceEscolhido === p.resposta_correta) {
    pontuacao += 10;
  }

  const exp = document.getElementById("explicacao");
  exp.innerText = "🧠 " + p.explicacao;
  exp.classList.remove("hidden");

  document.getElementById("proximo").disabled = false;
}

function proximaPergunta() {
  indice++;
  if (indice < perguntas.length) {
    mostrarPergunta();
  } else {
    mostrarResultado();
  }
}

function mostrarResultado() {
  document.getElementById("quiz-box").classList.add("hidden");
  document.getElementById("resultado").classList.remove("hidden");
  document.getElementById("pontuacao-final").innerText = `${pontuacao} pontos`;

  if (pontuacao >= 20) {
    document.getElementById("link-bonus").classList.remove("hidden");
  }
}

function enviarPontuacao() {
  const nome = document.getElementById("nome-jogador").value || "Anônimo";
  fetch("/pontuar", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nome, pontos: pontuacao })
  }).then(() => alert("Pontuação salva com sucesso!"));
}

// Início
carregarPerguntas();
