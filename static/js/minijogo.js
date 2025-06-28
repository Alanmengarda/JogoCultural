const bandeiras = [
  {
    pais: "Brasil 🇧🇷",
    pecas: [
      { id: 1, tipo: "superior", cor: "#009739", texto: "Verde" },
      { id: 2, tipo: "meio", cor: "#FEDD00", texto: "Amarelo" },
      { id: 3, tipo: "inferior", cor: "#012169", texto: "Azul" }
    ],
    explicacao: "A bandeira do Brasil tem fundo verde (florestas), losango amarelo (riquezas minerais) e círculo azul com estrelas (céu).",
    ordem_correta: [1, 2, 3]
  },
  {
    pais: "Alemanha 🇩🇪",
    pecas: [
      { id: 1, tipo: "superior", cor: "#000000", texto: "Preto" },
      { id: 2, tipo: "meio", cor: "#DD0000", texto: "Vermelho" },
      { id: 3, tipo: "inferior", cor: "#FFCE00", texto: "Amarelo" }
    ],
    explicacao: "A bandeira alemã tem três faixas horizontais: preto (determinação), vermelho (coragem) e amarelo (generosidade).",
    ordem_correta: [1, 2, 3]
  },
  {
    pais: "França 🇫🇷",
    pecas: [
      { id: 1, tipo: "esquerda", cor: "#0055A4", texto: "Azul" },
      { id: 2, tipo: "meio", cor: "#FFFFFF", texto: "Branco" },
      { id: 3, tipo: "direita", cor: "#EF4135", texto: "Vermelho" }
    ],
    explicacao: "A bandeira francesa (tricolor) tem três faixas verticais: azul (liberdade), branco (igualdade) e vermelho (fraternidade).",
    ordem_correta: [1, 2, 3]
  },
  {
    pais: "Itália 🇮🇹",
    pecas: [
      { id: 1, tipo: "esquerda", cor: "#009246", texto: "Verde" },
      { id: 2, tipo: "meio", cor: "#FFFFFF", texto: "Branco" },
      { id: 3, tipo: "direita", cor: "#CE2B37", texto: "Vermelho" }
    ],
    explicacao: "A bandeira italiana tem três faixas verticais: verde (esperança), branco (fé) e vermelho (caridade).",
    ordem_correta: [1, 2, 3]
  },
  {
    pais: "Japão 🇯🇵",
    pecas: [
      { id: 1, tipo: "fundo", cor: "#FFFFFF", texto: "Branco" },
      { id: 2, tipo: "centro", cor: "#BC002D", texto: "Sol Vermelho" }
    ],
    explicacao: "A bandeira japonesa (Hinomaru) tem fundo branco (pureza) com um círculo vermelho (sol nascente).",
    ordem_correta: [1, 2]
  }
];

let indiceAtual = 0;
let acertos = 0;
let tentativas = 0;
let pecasColocadas = [];

function carregarBandeira() {
  const bandeira = bandeiras[indiceAtual];
  document.getElementById("titulo-jogo").innerHTML = `🧩 Monte a bandeira de ${bandeira.pais}`;

  // Limpar áreas
  document.getElementById("pecas-disponiveis").innerHTML = "";
  document.getElementById("area-montagem").innerHTML = "";
  document.getElementById("resultado-mini").innerHTML = "";
  document.getElementById("resultado-mini").className = "";
  pecasColocadas = [];

  // Criar peças embaralhadas
  const pecasEmbaralhadas = [...bandeira.pecas].sort(() => Math.random() - 0.5);
  
  pecasEmbaralhadas.forEach((peca, index) => {
    const elementoPeca = criarPeca(peca, false);
    elementoPeca.style.animationDelay = `${index * 0.1}s`;
    document.getElementById("pecas-disponiveis").appendChild(elementoPeca);
  });

  // Criar slots de montagem
  bandeira.pecas.forEach((peca, index) => {
    const slot = criarSlot(peca, index);
    document.getElementById("area-montagem").appendChild(slot);
  });
}

function criarPeca(peca, naArea = false) {
  const div = document.createElement('div');
  div.className = `peca ${naArea ? 'na-area' : 'disponivel'}`;
  div.draggable = !naArea;
  div.dataset.id = peca.id;
  div.dataset.tipo = peca.tipo;
  
  // Criar visual da peça baseado no tipo
  let visualPeca = '';
  if (peca.tipo === 'superior' || peca.tipo === 'meio' || peca.tipo === 'inferior') {
    // Faixas horizontais
    visualPeca = `
      <div class="peca-visual horizontal" style="background: ${peca.cor};">
        <span class="peca-texto">${peca.texto}</span>
      </div>
    `;
  } else if (peca.tipo === 'esquerda' || peca.tipo === 'direita') {
    // Faixas verticais
    visualPeca = `
      <div class="peca-visual vertical" style="background: ${peca.cor};">
        <span class="peca-texto">${peca.texto}</span>
      </div>
    `;
  } else if (peca.tipo === 'fundo') {
    // Fundo completo
    visualPeca = `
      <div class="peca-visual fundo" style="background: ${peca.cor}; border: 2px solid #ccc;">
        <span class="peca-texto">${peca.texto}</span>
      </div>
    `;
  } else if (peca.tipo === 'centro') {
    // Elemento central (como sol do Japão)
    visualPeca = `
      <div class="peca-visual centro" style="background: ${peca.cor};">
        <span class="peca-texto">${peca.texto}</span>
      </div>
    `;
  }
  
  div.innerHTML = visualPeca;
  
  if (!naArea) {
    div.addEventListener('dragstart', drag);
    div.addEventListener('dragend', dragEnd);
  }
  
  return div;
}

function criarSlot(peca, index) {
  const div = document.createElement('div');
  div.className = `slot slot-${peca.tipo}`;
  div.dataset.aceita = peca.id;
  div.dataset.posicao = index;
  
  // Criar placeholder visual
  let placeholder = '';
  if (peca.tipo === 'superior' || peca.tipo === 'meio' || peca.tipo === 'inferior') {
    placeholder = `<div class="placeholder horizontal">Arraste ${peca.texto} aqui</div>`;
  } else if (peca.tipo === 'esquerda' || peca.tipo === 'direita') {
    placeholder = `<div class="placeholder vertical">Arraste ${peca.texto} aqui</div>`;
  } else if (peca.tipo === 'fundo') {
    placeholder = `<div class="placeholder fundo">Arraste ${peca.texto} aqui</div>`;
  } else if (peca.tipo === 'centro') {
    placeholder = `<div class="placeholder centro">Arraste ${peca.texto} aqui</div>`;
  }
  
  div.innerHTML = placeholder;
  
  div.addEventListener('dragover', allowDrop);
  div.addEventListener('drop', drop);
  
  return div;
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.dataset.id);
  ev.target.style.opacity = '0.5';
  ev.target.style.transform = 'rotate(5deg) scale(1.1)';
  ev.target.classList.add('arrastando');
}

function dragEnd(ev) {
  ev.target.style.opacity = '1';
  ev.target.style.transform = 'rotate(0deg) scale(1)';
  ev.target.classList.remove('arrastando');
}

function allowDrop(ev) {
  ev.preventDefault();
  ev.target.closest('.slot').classList.add('slot-hover');
}

function drop(ev) {
  ev.preventDefault();
  const slot = ev.target.closest('.slot');
  slot.classList.remove('slot-hover');
  
  const pecaId = parseInt(ev.dataTransfer.getData("text"));
  const slotAceita = parseInt(slot.dataset.aceita);
  const posicao = parseInt(slot.dataset.posicao);
  
  if (pecaId === slotAceita) {
    // Peça correta
    const pecaOriginal = document.querySelector(`[data-id="${pecaId}"].disponivel`);
    if (pecaOriginal) {
      const bandeira = bandeiras[indiceAtual];
      const pecaData = bandeira.pecas.find(p => p.id === pecaId);
      
      // Remover peça da área de peças disponíveis
      pecaOriginal.remove();
      
      // Adicionar peça ao slot
      const novaPeca = criarPeca(pecaData, true);
      slot.innerHTML = '';
      slot.appendChild(novaPeca);
      
      // Registrar peça colocada
      pecasColocadas[posicao] = pecaId;
      
      // Efeito visual de sucesso
      slot.classList.add('slot-preenchido');
      novaPeca.style.animation = 'pecaEncaixe 0.5s ease-out';
      
      // Verificar se completou
      if (pecasColocadas.filter(p => p !== undefined).length === bandeira.pecas.length) {
        setTimeout(verificarCompleto, 500);
      }
    }
  } else {
    // Peça incorreta - efeito de erro
    slot.classList.add('slot-erro');
    setTimeout(() => {
      slot.classList.remove('slot-erro');
    }, 600);
    
    // Vibração de erro
    if (navigator.vibrate) {
      navigator.vibrate([100, 50, 100]);
    }
  }
}

function verificarCompleto() {
  const bandeira = bandeiras[indiceAtual];
  const resultadoDiv = document.getElementById("resultado-mini");
  
  tentativas++;
  
  // Verificar se a ordem está correta
  const ordemCorreta = pecasColocadas.every((pecaId, index) => 
    pecaId === bandeira.ordem_correta[index]
  );
  
  if (ordemCorreta) {
    acertos++;
    resultadoDiv.innerHTML = `✅ <strong>Perfeito!</strong><br>${bandeira.explicacao}`;
    resultadoDiv.className = "correto";
    
    // Efeito de sucesso
    criarEfeitoSucesso();
    
    // Vibração de sucesso
    if (navigator.vibrate) {
      navigator.vibrate([100, 50, 100, 50, 100]);
    }
  }
  
  // Atualizar estatísticas
  atualizarEstatisticas();
}

function criarEfeitoSucesso() {
  // Criar efeito de confete
  for (let i = 0; i < 20; i++) {
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

function reiniciar() {
  carregarBandeira();
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
    
    @keyframes pecaEncaixe {
      0% {
        transform: scale(0.8) rotate(-10deg);
      }
      50% {
        transform: scale(1.1) rotate(5deg);
      }
      100% {
        transform: scale(1) rotate(0deg);
      }
    }
    
    @keyframes pulseGlow {
      0%, 100% {
        box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
      }
      50% {
        box-shadow: 0 0 40px rgba(0, 255, 255, 0.6);
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