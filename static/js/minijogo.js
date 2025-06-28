const bandeiras = [
  {
    pais: "Brasil 🇧🇷",
    imagem: "https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg",
    pecas: [
      { id: 1, x: 0, y: 0, width: 50, height: 50 },
      { id: 2, x: 50, y: 0, width: 50, height: 50 },
      { id: 3, x: 0, y: 50, width: 50, height: 50 },
      { id: 4, x: 50, y: 50, width: 50, height: 50 }
    ],
    explicacao: "A bandeira do Brasil representa as riquezas naturais e a diversidade do país.",
    dimensoes: { width: 100, height: 100 }
  },
  {
    pais: "França 🇫🇷",
    imagem: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
    pecas: [
      { id: 1, x: 0, y: 0, width: 33.33, height: 100 },
      { id: 2, x: 33.33, y: 0, width: 33.33, height: 100 },
      { id: 3, x: 66.66, y: 0, width: 33.34, height: 100 }
    ],
    explicacao: "A bandeira francesa representa liberdade, igualdade e fraternidade.",
    dimensoes: { width: 100, height: 100 }
  },
  {
    pais: "Alemanha 🇩🇪",
    imagem: "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg",
    pecas: [
      { id: 1, x: 0, y: 0, width: 100, height: 33.33 },
      { id: 2, x: 0, y: 33.33, width: 100, height: 33.33 },
      { id: 3, x: 0, y: 66.66, width: 100, height: 33.34 }
    ],
    explicacao: "A bandeira alemã simboliza a unidade e democracia do país.",
    dimensoes: { width: 100, height: 100 }
  },
  {
    pais: "Japão 🇯🇵",
    imagem: "https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg",
    pecas: [
      { id: 1, x: 0, y: 0, width: 50, height: 50 },
      { id: 2, x: 50, y: 0, width: 50, height: 50 },
      { id: 3, x: 0, y: 50, width: 50, height: 50 },
      { id: 4, x: 50, y: 50, width: 50, height: 50 }
    ],
    explicacao: "A bandeira japonesa representa o sol nascente e a pureza.",
    dimensoes: { width: 100, height: 100 }
  },
  {
    pais: "Reino Unido 🇬🇧",
    imagem: "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg",
    pecas: [
      { id: 1, x: 0, y: 0, width: 50, height: 50 },
      { id: 2, x: 50, y: 0, width: 50, height: 50 },
      { id: 3, x: 0, y: 50, width: 50, height: 50 },
      { id: 4, x: 50, y: 50, width: 50, height: 50 }
    ],
    explicacao: "A Union Jack combina as cruzes de São Jorge, Santo André e São Patrício.",
    dimensoes: { width: 100, height: 100 }
  }
];

let indiceAtual = 0;
let acertos = 0;
let tentativas = 0;
let pecasColocadas = [];
let imagemCarregada = false;

function carregarBandeira() {
  const bandeira = bandeiras[indiceAtual];
  document.getElementById("titulo-jogo").innerHTML = `🧩 Monte a bandeira de ${bandeira.pais}`;

  // Limpar áreas
  document.getElementById("pecas-disponiveis").innerHTML = "";
  document.getElementById("area-montagem").innerHTML = "";
  document.getElementById("resultado-mini").innerHTML = "";
  document.getElementById("resultado-mini").className = "";
  pecasColocadas = [];
  imagemCarregada = false;

  // Pré-carregar a imagem
  const img = new Image();
  img.crossOrigin = "anonymous";
  img.onload = function() {
    imagemCarregada = true;
    criarPecasESlots(bandeira, this);
  };
  img.onerror = function() {
    // Fallback para imagem local ou placeholder
    console.log("Erro ao carregar imagem, usando fallback");
    criarPecasFallback(bandeira);
  };
  img.src = bandeira.imagem;
}

function criarPecasESlots(bandeira, imagemOriginal) {
  // Criar canvas para cortar a imagem em peças
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = 300;
  canvas.height = 200;
  
  // Desenhar a imagem completa no canvas
  ctx.drawImage(imagemOriginal, 0, 0, canvas.width, canvas.height);
  
  // Criar peças embaralhadas
  const pecasEmbaralhadas = [...bandeira.pecas].sort(() => Math.random() - 0.5);
  
  pecasEmbaralhadas.forEach((peca, index) => {
    const elementoPeca = criarPecaComImagem(peca, bandeira, canvas);
    elementoPeca.style.animationDelay = `${index * 0.1}s`;
    document.getElementById("pecas-disponiveis").appendChild(elementoPeca);
  });

  // Criar slots de montagem
  criarAreaMontagem(bandeira);
}

function criarPecaComImagem(peca, bandeira, canvasOriginal) {
  const div = document.createElement('div');
  div.className = 'peca disponivel';
  div.draggable = true;
  div.dataset.id = peca.id;
  
  // Criar canvas para esta peça específica
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  // Calcular dimensões da peça
  const larguraPeca = (peca.width / 100) * 300;
  const alturaPeca = (peca.height / 100) * 200;
  
  canvas.width = larguraPeca;
  canvas.height = alturaPeca;
  
  // Recortar a parte correspondente da imagem original
  const sourceX = (peca.x / 100) * 300;
  const sourceY = (peca.y / 100) * 200;
  
  ctx.drawImage(
    canvasOriginal,
    sourceX, sourceY, larguraPeca, alturaPeca,
    0, 0, larguraPeca, alturaPeca
  );
  
  // Adicionar borda e efeitos à peça
  ctx.strokeStyle = '#00ffff';
  ctx.lineWidth = 3;
  ctx.strokeRect(0, 0, larguraPeca, alturaPeca);
  
  // Adicionar número da peça
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(5, 5, 25, 25);
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 16px Arial';
  ctx.fillText(peca.id, 12, 22);
  
  div.appendChild(canvas);
  
  // Estilizar a div da peça
  div.style.cssText = `
    margin: 5px;
    border-radius: 8px;
    cursor: grab;
    transition: all 0.3s ease;
    position: relative;
    animation: slideInUp 0.5s ease-out;
    animation-fill-mode: both;
    box-shadow: 0 4px 15px rgba(0, 255, 255, 0.3);
  `;
  
  div.addEventListener('dragstart', drag);
  div.addEventListener('dragend', dragEnd);
  
  return div;
}

function criarAreaMontagem(bandeira) {
  const areaMontagem = document.getElementById("area-montagem");
  
  // Criar container da bandeira completa
  const containerBandeira = document.createElement('div');
  containerBandeira.className = 'bandeira-container';
  containerBandeira.style.cssText = `
    position: relative;
    width: 300px;
    height: 200px;
    border: 3px dashed var(--primary-color);
    border-radius: 10px;
    margin: 0 auto;
    background: rgba(255, 255, 255, 0.1);
  `;
  
  // Criar slots para cada peça
  bandeira.pecas.forEach(peca => {
    const slot = document.createElement('div');
    slot.className = 'slot';
    slot.dataset.aceita = peca.id;
    
    const left = (peca.x / 100) * 300;
    const top = (peca.y / 100) * 200;
    const width = (peca.width / 100) * 300;
    const height = (peca.height / 100) * 200;
    
    slot.style.cssText = `
      position: absolute;
      left: ${left}px;
      top: ${top}px;
      width: ${width}px;
      height: ${height}px;
      border: 2px dashed rgba(0, 255, 255, 0.5);
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
      background: rgba(0, 255, 255, 0.05);
    `;
    
    // Adicionar número do slot
    const numeroSlot = document.createElement('span');
    numeroSlot.textContent = peca.id;
    numeroSlot.style.cssText = `
      color: var(--primary-color);
      font-size: 24px;
      font-weight: bold;
      opacity: 0.7;
      pointer-events: none;
    `;
    slot.appendChild(numeroSlot);
    
    slot.addEventListener('dragover', allowDrop);
    slot.addEventListener('drop', drop);
    
    containerBandeira.appendChild(slot);
  });
  
  areaMontagem.appendChild(containerBandeira);
}

function criarPecasFallback(bandeira) {
  // Fallback com cores sólidas se a imagem não carregar
  const cores = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'];
  
  const pecasEmbaralhadas = [...bandeira.pecas].sort(() => Math.random() - 0.5);
  
  pecasEmbaralhadas.forEach((peca, index) => {
    const div = document.createElement('div');
    div.className = 'peca disponivel';
    div.draggable = true;
    div.dataset.id = peca.id;
    
    div.style.cssText = `
      width: 80px;
      height: 60px;
      background: ${cores[peca.id - 1]};
      border: 3px solid var(--primary-color);
      border-radius: 8px;
      margin: 5px;
      cursor: grab;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      color: white;
      text-shadow: 1px 1px 2px rgba(0,0,0,0.7);
      transition: all 0.3s ease;
      animation: slideInUp 0.5s ease-out;
      animation-delay: ${index * 0.1}s;
      animation-fill-mode: both;
    `;
    
    div.textContent = `Peça ${peca.id}`;
    
    div.addEventListener('dragstart', drag);
    div.addEventListener('dragend', dragEnd);
    
    document.getElementById("pecas-disponiveis").appendChild(div);
  });
  
  criarAreaMontagem(bandeira);
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
  const slot = ev.target.closest('.slot');
  if (slot) {
    slot.style.background = 'rgba(255, 255, 0, 0.2)';
    slot.style.borderColor = 'var(--accent-color)';
    slot.style.transform = 'scale(1.05)';
  }
}

function drop(ev) {
  ev.preventDefault();
  const slot = ev.target.closest('.slot');
  
  // Resetar estilo do slot
  slot.style.background = 'rgba(0, 255, 255, 0.05)';
  slot.style.borderColor = 'rgba(0, 255, 255, 0.5)';
  slot.style.transform = 'scale(1)';
  
  const pecaId = parseInt(ev.dataTransfer.getData("text"));
  const slotAceita = parseInt(slot.dataset.aceita);
  
  if (pecaId === slotAceita) {
    // Peça correta
    const pecaOriginal = document.querySelector(`[data-id="${pecaId}"].disponivel`);
    if (pecaOriginal) {
      // Remover peça da área de peças disponíveis
      pecaOriginal.remove();
      
      // Clonar e adicionar peça ao slot
      const novaPeca = pecaOriginal.cloneNode(true);
      novaPeca.classList.remove('disponivel');
      novaPeca.classList.add('na-area');
      novaPeca.draggable = false;
      novaPeca.style.cssText = `
        width: 100%;
        height: 100%;
        border-radius: 5px;
        animation: pecaEncaixe 0.5s ease-out;
      `;
      
      // Limpar slot e adicionar peça
      slot.innerHTML = '';
      slot.appendChild(novaPeca);
      
      // Registrar peça colocada
      pecasColocadas.push(pecaId);
      
      // Efeito visual de sucesso
      slot.style.borderColor = 'var(--success-color)';
      slot.style.boxShadow = '0 0 20px rgba(0, 255, 136, 0.6)';
      
      // Verificar se completou
      if (pecasColocadas.length === bandeiras[indiceAtual].pecas.length) {
        setTimeout(verificarCompleto, 500);
      }
      
      // Som de sucesso simulado com vibração
      if (navigator.vibrate) {
        navigator.vibrate([50]);
      }
    }
  } else {
    // Peça incorreta - efeito de erro
    slot.style.background = 'rgba(255, 68, 68, 0.3)';
    slot.style.borderColor = 'var(--error-color)';
    slot.style.animation = 'shake 0.6s ease-out';
    
    setTimeout(() => {
      slot.style.background = 'rgba(0, 255, 255, 0.05)';
      slot.style.borderColor = 'rgba(0, 255, 255, 0.5)';
      slot.style.animation = '';
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
  acertos++;
  
  resultadoDiv.innerHTML = `✅ <strong>Parabéns!</strong><br>Você montou a bandeira de ${bandeira.pais}!<br><em>${bandeira.explicacao}</em>`;
  resultadoDiv.className = "correto";
  
  // Efeito de sucesso
  criarEfeitoSucesso();
  
  // Vibração de sucesso
  if (navigator.vibrate) {
    navigator.vibrate([100, 50, 100, 50, 100]);
  }
  
  // Atualizar estatísticas
  atualizarEstatisticas();
}

function criarEfeitoSucesso() {
  // Criar efeito de confete
  for (let i = 0; i < 25; i++) {
    const confete = document.createElement('div');
    confete.style.cssText = `
      position: fixed;
      width: 10px;
      height: 10px;
      background: ${['#00ffff', '#ff00ff', '#ffff00', '#00ff88'][Math.floor(Math.random() * 4)]};
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      left: 50%;
      top: 30%;
      animation: confetti${i} 3s ease-out forwards;
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
          transform: translate(${(Math.random() - 0.5) * 400}px, ${Math.random() * 400 + 100}px) rotate(${Math.random() * 720}deg) scale(0);
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
    }, 3000);
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
  }, 300);
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
    <div>✅ Completados: ${acertos}</div>
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
        opacity: 0.7;
      }
      50% {
        transform: scale(1.1) rotate(5deg);
        opacity: 0.9;
      }
      100% {
        transform: scale(1) rotate(0deg);
        opacity: 1;
      }
    }
    
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      25% { transform: translateX(-10px); }
      75% { transform: translateX(10px); }
    }
    
    .peca:hover {
      transform: translateY(-5px) scale(1.05);
      box-shadow: 0 10px 25px rgba(0, 255, 255, 0.6);
    }
    
    .peca.arrastando {
      transform: rotate(5deg) scale(1.1);
      z-index: 1000;
      box-shadow: 0 15px 35px rgba(0, 255, 255, 0.8);
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