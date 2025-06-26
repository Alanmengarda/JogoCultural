const bandeiras = [
  {
    pais: "Brasil 🇧🇷",
    ordem: ["Verde", "Amarelo", "Azul"],
    explicacao: "A bandeira do Brasil tem fundo verde (florestas), losango amarelo (riquezas minerais) e círculo azul com estrelas (céu).",
    cores: {
      "Verde": "#009739",
      "Amarelo": "#FEDD00", 
      "Azul": "#012169"
    }
  },
  {
    pais: "Alemanha 🇩🇪",
    ordem: ["Preto", "Vermelho", "Amarelo"],
    explicacao: "A bandeira alemã tem três faixas horizontais: preto (determinação), vermelho (coragem) e amarelo (generosidade).",
    cores: {
      "Preto": "#000000",
      "Vermelho": "#DD0000",
      "Amarelo": "#FFCE00"
    }
  },
  {
    pais: "França 🇫🇷",
    ordem: ["Azul", "Branco", "Vermelho"],
    explicacao: "A bandeira francesa (tricolor) tem três faixas verticais: azul (liberdade), branco (igualdade) e vermelho (fraternidade).",
    cores: {
      "Azul": "#0055A4",
      "Branco": "#FFFFFF",
      "Vermelho": "#EF4135"
    }
  },
  {
    pais: "Itália 🇮🇹",
    ordem: ["Verde", "Branco", "Vermelho"],
    explicacao: "A bandeira italiana tem três faixas verticais: verde (esperança), branco (fé) e vermelho (caridade).",
    cores: {
      "Verde": "#009246",
      "Branco": "#FFFFFF", 
      "Vermelho": "#CE2B37"
    }
  },
  {
    pais: "Japão 🇯🇵",
    ordem: ["Branco", "Vermelho"],
    explicacao: "A bandeira japonesa (Hinomaru) tem fundo branco (pureza) com um círculo vermelho (sol nascente).",
    cores: {
      "Branco": "#FFFFFF",
      "Vermelho": "#BC002D"
    }
  }
];

let indiceAtual = 0;
let acertos = 0;
let tentativas = 0;

function carregarBandeira() {
  const bandeira = bandeiras[indiceAtual];
  document.getElementById("titulo-jogo").innerHTML = `🏁 Monte a bandeira de ${bandeira.pais}`;

  // Criar peças com cores reais
  const pecas = bandeira.ordem
    .map(cor => {
      const corHex = bandeira.cores[cor];
      return `<button 
        draggable="true" 
        ondragstart="drag(event)" 
        id="${cor.toLowerCase()}"
        style="background: linear-gradient(135deg, ${corHex}, ${ajustarBrilho(corHex, -20)}); color: ${getContrastColor(corHex)}; border: 2px solid ${ajustarBrilho(corHex, -40)};"
      >${cor}</button>`;
    })
    .sort(() => Math.random() - 0.5) // embaralhar
    .join("");

  document.getElementById("pecas").innerHTML = pecas;
  document.getElementById("resultado-mini").innerHTML = "";
  document.getElementById("resultado-mini").className = "";
  
  // Adicionar animação de entrada para as peças
  setTimeout(() => {
    const botoes = document.querySelectorAll("#pecas button");
    botoes.forEach((btn, index) => {
      btn.style.animation = `slideInUp 0.5s ease-out ${index * 0.1}s forwards`;
      btn.style.opacity = '0';
      setTimeout(() => {
        btn.style.opacity = '1';
      }, index * 100);
    });
  }, 100);
}

function ajustarBrilho(cor, quantidade) {
  const hex = cor.replace('#', '');
  const r = Math.max(0, Math.min(255, parseInt(hex.substr(0, 2), 16) + quantidade));
  const g = Math.max(0, Math.min(255, parseInt(hex.substr(2, 2), 16) + quantidade));
  const b = Math.max(0, Math.min(255, parseInt(hex.substr(4, 2), 16) + quantidade));
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

function getContrastColor(hexcolor) {
  const hex = hexcolor.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  const brightness = ((r * 299) + (g * 587) + (b * 114)) / 1000;
  return brightness > 128 ? '#000000' : '#FFFFFF';
}

function verificar() {
  const bandeira = bandeiras[indiceAtual];
  const ordem = Array.from(document.querySelectorAll("#pecas button")).map(btn => btn.innerText);
  const resultadoDiv = document.getElementById("resultado-mini");
  
  tentativas++;

  if (ordem.join() === bandeira.ordem.join()) {
    acertos++;
    resultadoDiv.innerHTML = `✅ <strong>Perfeito!</strong><br>${bandeira.explicacao}`;
    resultadoDiv.className = "correto";
    
    // Efeito de sucesso
    criarEfeitoSucesso();
    
    // Vibração de sucesso
    if (navigator.vibrate) {
      navigator.vibrate([100, 50, 100]);
    }
  } else {
    resultadoDiv.innerHTML = `❌ <strong>Tente novamente!</strong><br>Ordem correta: ${bandeira.ordem.join(' → ')}<br><em>${bandeira.explicacao}</em>`;
    resultadoDiv.className = "errado";
    
    // Vibração de erro
    if (navigator.vibrate) {
      navigator.vibrate([200, 100, 200]);
    }
  }
  
  // Atualizar estatísticas
  atualizarEstatisticas();
}

function criarEfeitoSucesso() {
  // Criar efeito de confete
  for (let i = 0; i < 15; i++) {
    const confete = document.createElement('div');
    confete.style.cssText = `
      position: fixed;
      width: 8px;
      height: 8px;
      background: ${['#00ffff', '#ff00ff', '#ffff00', '#00ff88'][Math.floor(Math.random() * 4)]};
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      left: 50%;
      top: 30%;
      animation: confetti${i} 2s ease-out forwards;
    `;
    
    // Criar animação única para cada confete
    const style = document.createElement('style');
    style.textContent = `
      @keyframes confetti${i} {
        0% {
          transform: translate(0, 0) rotate(0deg) scale(1);
          opacity: 1;
        }
        100% {
          transform: translate(${(Math.random() - 0.5) * 300}px, ${Math.random() * 300 + 100}px) rotate(${Math.random() * 360}deg) scale(0);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
    document.body.appendChild(confete);
    
    // Remover elementos após animação
    setTimeout(() => {
      confete.remove();
      style.remove();
    }, 2000);
  }
}

function proximaBandeira() {
  indiceAtual = (indiceAtual + 1) % bandeiras.length;
  
  // Efeito de transição
  const container = document.querySelector('.container');
  container.style.transform = 'scale(0.95)';
  container.style.opacity = '0.7';
  
  setTimeout(() => {
    carregarBandeira();
    container.style.transform = 'scale(1)';
    container.style.opacity = '1';
  }, 200);
}

function atualizarEstatisticas() {
  // Criar ou atualizar painel de estatísticas
  let stats = document.getElementById('stats-panel');
  if (!stats) {
    stats = document.createElement('div');
    stats.id = 'stats-panel';
    stats.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: rgba(20, 20, 40, 0.9);
      border: 2px solid var(--primary-color);
      border-radius: 15px;
      padding: 15px;
      color: var(--text-light);
      font-weight: bold;
      backdrop-filter: blur(10px);
      z-index: 1000;
      min-width: 150px;
    `;
    document.body.appendChild(stats);
  }
  
  const porcentagem = tentativas > 0 ? Math.round((acertos / tentativas) * 100) : 0;
  stats.innerHTML = `
    <div style="text-align: center; color: var(--primary-color); margin-bottom: 10px;">📊 STATS</div>
    <div>✅ Acertos: ${acertos}</div>
    <div>🎯 Tentativas: ${tentativas}</div>
    <div>📈 Taxa: ${porcentagem}%</div>
  `;
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  ev.target.style.opacity = '0.5';
  ev.target.style.transform = 'rotate(5deg)';
}

function drop(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  const dragged = document.getElementById(data);
  const container = ev.target.closest("#pecas");

  // Restaurar aparência do elemento arrastado
  dragged.style.opacity = '1';
  dragged.style.transform = 'rotate(0deg)';

  if (ev.target.tagName === "BUTTON" && ev.target !== dragged) {
    // Trocar posições
    const temp = document.createElement('div');
    container.insertBefore(temp, ev.target);
    container.insertBefore(ev.target, dragged);
    container.insertBefore(dragged, temp);
    container.removeChild(temp);
  } else if (ev.target === container) {
    container.appendChild(dragged);
  }
  
  // Efeito visual de drop
  dragged.style.animation = 'bounceIn 0.3s ease-out';
  setTimeout(() => {
    dragged.style.animation = '';
  }, 300);
}

// Event listeners para melhorar a experiência de drag
document.addEventListener('dragend', function(ev) {
  if (ev.target.tagName === 'BUTTON') {
    ev.target.style.opacity = '1';
    ev.target.style.transform = 'rotate(0deg)';
  }
});

// Adicionar animações CSS extras
function adicionarAnimacoesExtras() {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes bounceIn {
      0% {
        transform: scale(0.8);
      }
      50% {
        transform: scale(1.1);
      }
      100% {
        transform: scale(1);
      }
    }
  `;
  document.head.appendChild(style);
}

// Inicialização
window.onload = function() {
  adicionarAnimacoesExtras();
  carregarBandeira();
  atualizarEstatisticas();
};