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
