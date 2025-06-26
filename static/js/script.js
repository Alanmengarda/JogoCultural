let perguntas = [];
let indice = 0;
let pontuacao = 0;
let idioma = 'pt';
let ranking = [];

// Transições diferentes para cada pergunta
const transicoes = [
  'slideInLeft',
  'slideInRight', 
  'slideInUp',
  'zoomIn',
  'rotateIn',
  'bounceIn'
];

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

function carregarRanking() {
  fetch('/ranking')
    .then(res => res.json())
    .then(data => {
      ranking = data;
      atualizarRankingSidebar();
    });
}

function atualizarRankingSidebar() {
  const rankingList = document.getElementById('ranking-list');
  rankingList.innerHTML = '';
  
  ranking.slice(0, 10).forEach((jogador, index) => {
    const li = document.createElement('li');
    li.className = `ranking-item ${index < 3 ? 'top-3' : ''}`;
    
    li.innerHTML = `
      <span class="ranking-position">#${index + 1}</span>
      <span class="ranking-name">${jogador.nome}</span>
      <span class="ranking-points">${jogador.pontos}pts</span>
    `;
    
    // Animação escalonada para cada item
    li.style.animationDelay = `${index * 0.1}s`;
    li.style.animation = 'slideInLeft 0.5s ease-out forwards';
    
    rankingList.appendChild(li);
  });
}

function mostrarPergunta() {
  const quizBox = document.getElementById("quiz-box");
  const p = perguntas[indice];
  
  // Aplicar transição de saída
  quizBox.classList.add('fade-out');
  
  setTimeout(() => {
    // Atualizar conteúdo
    document.getElementById("tema").innerText = `${getThemeIcon(p.tema)} ${p.tema}`;
    document.getElementById("pergunta").innerText = p.pergunta;
    document.getElementById("opcoes").innerHTML = "";
    document.getElementById("explicacao").classList.add("hidden");

    p.opcoes.forEach((op, i) => {
      const btn = document.createElement("button");
      btn.innerText = `${String.fromCharCode(65 + i)}. ${op}`;
      btn.onclick = () => responder(i);
      
      // Animação escalonada para as opções
      btn.style.animationDelay = `${i * 0.1}s`;
      btn.style.animation = 'slideInUp 0.4s ease-out forwards';
      btn.style.opacity = '0';
      
      document.getElementById("opcoes").appendChild(btn);
    });

    document.getElementById("proximo").disabled = true;
    
    // Aplicar transição de entrada com efeito diferente
    quizBox.classList.remove('fade-out');
    quizBox.classList.add('fade-in');
    
    // Aplicar transição específica baseada no índice da pergunta
    const transicaoAtual = transicoes[indice % transicoes.length];
    quizBox.style.animation = `${transicaoAtual} 0.6s ease-out`;
    
    // Remover classes após animação
    setTimeout(() => {
      quizBox.classList.remove('fade-in');
      quizBox.style.animation = '';
      
      // Mostrar opções com delay
      const opcoes = document.querySelectorAll("#opcoes button");
      opcoes.forEach(btn => {
        btn.style.opacity = '1';
      });
    }, 600);
    
  }, 300);
}

function getThemeIcon(tema) {
  const icons = {
    'Culinária': '🍜', 'Cuisine': '🍜',
    'Religião': '🕉️', 'Religion': '🕉️',
    'Arte': '🎨', 'Art': '🎨',
    'Vestimenta': '👘', 'Clothing': '👘',
    'Arquitetura': '🏛️', 'Architecture': '🏛️',
    'Língua': '🗣️', 'Language': '🗣️',
    'Dança': '💃', 'Dance': '💃',
    'Música': '🎵', 'Music': '🎵',
    'Festas': '🎉', 'Festivals': '🎉',
    'Cinema': '🎬', 'Cinema': '🎬',
    'Mitologia': '⚡', 'Mythology': '⚡',
    'Esportes Tradicionais': '🥋', 'Traditional Sports': '🥋',
    'Literatura': '📚', 'Literature': '📚',
    'Tradições': '🎭', 'Traditions': '🎭',
    'Arquitetura Religiosa': '⛪', 'Religious Architecture': '⛪',
    'Língua Alemã': '🇩🇪', 'German Language': '🇩🇪',
    'Língua Francesa': '🇫🇷', 'French Language': '🇫🇷'
  };
  return icons[tema] || '🌍';
}

function responder(indiceEscolhido) {
  const p = perguntas[indice];
  const opcoes = document.querySelectorAll("#opcoes button");

  // Desabilita todos os botões de opção
  opcoes.forEach(b => b.disabled = true);

  const exp = document.getElementById("explicacao");
  exp.classList.remove("hidden");

  // Efeito sonoro simulado com vibração (se suportado)
  if (navigator.vibrate) {
    if (indiceEscolhido === p.resposta_correta) {
      navigator.vibrate([100, 50, 100]); // Padrão de sucesso
    } else {
      navigator.vibrate([200, 100, 200, 100, 200]); // Padrão de erro
    }
  }

  if (indiceEscolhido === p.resposta_correta) {
    pontuacao += 10;
    exp.innerHTML = `✅ <strong>Resposta correta!</strong><br><em>${p.explicacao}</em>`;
    opcoes[indiceEscolhido].classList.add("correta");
    
    // Efeito de partículas simulado
    criarEfeitoSucesso(opcoes[indiceEscolhido]);
  } else {
    exp.innerHTML = `❌ <strong>Resposta errada!</strong> A correta era: <strong>${p.opcoes[p.resposta_correta]}</strong><br><em>${p.explicacao}</em>`;
    opcoes[indiceEscolhido].classList.add("errada");
    opcoes[p.resposta_correta].classList.add("correta");
  }

  document.getElementById("proximo").disabled = false;
  
  // Atualizar pontuação em tempo real
  atualizarPontuacaoAtual();
}

function criarEfeitoSucesso(elemento) {
  // Criar efeito de brilho temporário
  elemento.style.boxShadow = '0 0 50px rgba(0, 255, 136, 0.8), 0 0 100px rgba(0, 255, 136, 0.4)';
  elemento.style.transform = 'scale(1.05)';
  
  setTimeout(() => {
    elemento.style.transform = 'scale(1)';
  }, 300);
}

function atualizarPontuacaoAtual() {
  // Criar ou atualizar indicador de pontuação atual
  let pontuacaoAtual = document.getElementById('pontuacao-atual');
  if (!pontuacaoAtual) {
    pontuacaoAtual = document.createElement('div');
    pontuacaoAtual.id = 'pontuacao-atual';
    pontuacaoAtual.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: linear-gradient(135deg, rgba(0, 255, 255, 0.2), rgba(255, 0, 255, 0.2));
      border: 2px solid var(--primary-color);
      border-radius: 15px;
      padding: 15px 25px;
      color: var(--text-light);
      font-weight: bold;
      font-size: 1.2rem;
      backdrop-filter: blur(10px);
      z-index: 1000;
      animation: slideInRight 0.5s ease-out;
    `;
    document.body.appendChild(pontuacaoAtual);
  }
  
  pontuacaoAtual.innerHTML = `⭐ ${pontuacao} pontos`;
  
  // Efeito de pulsação quando a pontuação muda
  pontuacaoAtual.style.animation = 'none';
  setTimeout(() => {
    pontuacaoAtual.style.animation = 'titlePulse 0.5s ease-out';
  }, 10);
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

  // Remover indicador de pontuação atual
  const pontuacaoAtual = document.getElementById('pontuacao-atual');
  if (pontuacaoAtual) {
    pontuacaoAtual.remove();
  }

  // Mostrar link bonus se pontuação alta
  if (pontuacao >= 20) {
    document.getElementById("link-bonus").classList.remove("hidden");
  }
  
  // Efeito de fogos de artifício simulado para pontuações altas
  if (pontuacao >= 50) {
    criarEfeitoFogosArtificio();
  }
}

function criarEfeitoFogosArtificio() {
  // Criar múltiplos elementos de "faísca" temporários
  for (let i = 0; i < 20; i++) {
    const faisca = document.createElement('div');
    faisca.style.cssText = `
      position: fixed;
      width: 4px;
      height: 4px;
      background: ${['#00ffff', '#ff00ff', '#ffff00'][Math.floor(Math.random() * 3)]};
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      left: 50%;
      top: 50%;
      animation: firework${i} 2s ease-out forwards;
    `;
    
    // Criar animação única para cada faísca
    const style = document.createElement('style');
    style.textContent = `
      @keyframes firework${i} {
        0% {
          transform: translate(0, 0) scale(1);
          opacity: 1;
        }
        100% {
          transform: translate(${(Math.random() - 0.5) * 400}px, ${(Math.random() - 0.5) * 400}px) scale(0);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
    document.body.appendChild(faisca);
    
    // Remover elementos após animação
    setTimeout(() => {
      faisca.remove();
      style.remove();
    }, 2000);
  }
}

function enviarPontuacao() {
  const nome = document.getElementById("nome-jogador").value || "Anônimo";
  fetch("/pontuar", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nome, pontos: pontuacao })
  }).then(() => {
    alert("Pontuação salva com sucesso! 🎉");
    carregarRanking(); // Atualizar ranking após salvar
  });
}

// Adicionar CSS dinâmico para animações extras
function adicionarAnimacoesExtras() {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes rotateIn {
      from {
        opacity: 0;
        transform: rotate(-180deg) scale(0.5);
      }
      to {
        opacity: 1;
        transform: rotate(0deg) scale(1);
      }
    }
    
    @keyframes bounceIn {
      0% {
        opacity: 0;
        transform: scale(0.3) translateY(-100px);
      }
      50% {
        opacity: 1;
        transform: scale(1.05) translateY(0);
      }
      70% {
        transform: scale(0.9);
      }
      100% {
        transform: scale(1);
      }
    }
  `;
  document.head.appendChild(style);
}

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
  adicionarAnimacoesExtras();
  carregarPerguntas();
  carregarRanking();
  
  // Atualizar ranking a cada 30 segundos
  setInterval(carregarRanking, 30000);
});