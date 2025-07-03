let perguntas = [];
let perguntasFiltradas = [];
let indice = 0;
let pontuacao = 0;
let idioma = 'pt';
let ranking = [];
let dificuldadeAtual = 'facil';
let estatisticasTemas = {};
let jaSalvouPontuacao = false;

// Transições diferentes para cada pergunta
const transicoes = [
  'slideInLeft',
  'slideInRight', 
  'slideInUp',
  'zoomIn',
  'rotateIn',
  'bounceIn'
];

// Sistema de sons
function tocarSom(tipo) {
  try {
    const audio = document.getElementById(`som-${tipo}`);
    if (audio) {
      audio.currentTime = 0;
      audio.play().catch(e => console.log('Som não pôde ser reproduzido:', e));
    }
  } catch (e) {
    console.log('Erro ao tocar som:', e);
  }
}

function carregarPerguntas() {
  idioma = document.getElementById("idioma").value;
  dificuldadeAtual = document.getElementById("dificuldade").value;
  
  fetch(`/perguntas?lang=${idioma}`)
    .then(res => res.json())
    .then(data => {
      perguntas = data;
      filtrarPerguntasPorDificuldade();
      indice = 0;
      pontuacao = 0;
      jaSalvouPontuacao = false;
      inicializarEstatisticas();
      mostrarPergunta();
      atualizarPainelProgresso();
    });
}

function filtrarPerguntasPorDificuldade() {
  perguntasFiltradas = perguntas.filter(p => p.dificuldade === dificuldadeAtual);
  // Embaralhar perguntas
  perguntasFiltradas = perguntasFiltradas.sort(() => Math.random() - 0.5);
}

function inicializarEstatisticas() {
  estatisticasTemas = {};
  perguntasFiltradas.forEach(p => {
    if (!estatisticasTemas[p.tema]) {
      estatisticasTemas[p.tema] = {
        total: 0,
        acertos: 0,
        porcentagem: 0
      };
    }
    estatisticasTemas[p.tema].total++;
  });
  atualizarGraficoTemas();
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

function atualizarPainelProgresso() {
  const progressoDiv = document.getElementById('painel-progresso');
  const perguntasRestantes = perguntasFiltradas.length - indice;
  const perguntasRespondidas = indice;
  const porcentagemCompleta = Math.round((perguntasRespondidas / perguntasFiltradas.length) * 100);
  
  const dificuldadeTexto = {
    'facil': '🟢 Fácil',
    'normal': '🟡 Normal', 
    'dificil': '🔴 Difícil'
  };
  
  progressoDiv.innerHTML = `
    <div class="progresso-header">
      <h3>📊 PROGRESSO</h3>
    </div>
    
    <div class="progresso-item">
      <span class="progresso-label">Nível:</span>
      <span class="progresso-valor">${dificuldadeTexto[dificuldadeAtual]}</span>
    </div>
    
    <div class="progresso-item">
      <span class="progresso-label">Pergunta:</span>
      <span class="progresso-valor">${perguntasRespondidas + 1}/${perguntasFiltradas.length}</span>
    </div>
    
    <div class="progresso-item">
      <span class="progresso-label">Restantes:</span>
      <span class="progresso-valor">${perguntasRestantes}</span>
    </div>
    
    <div class="barra-progresso">
      <div class="barra-preenchida" style="width: ${porcentagemCompleta}%"></div>
    </div>
    <div class="porcentagem-texto">${porcentagemCompleta}% Completo</div>
    
    <div class="pontuacao-atual">
      <span class="progresso-label">Pontos:</span>
      <span class="progresso-valor pontos">${pontuacao}</span>
    </div>
  `;
}

function atualizarGraficoTemas() {
  const graficoDiv = document.getElementById('grafico-temas');
  let html = '<div class="grafico-header"><h4>📈 DESEMPENHO POR TEMA</h4></div>';
  
  const temasOrdenados = Object.entries(estatisticasTemas)
    .sort((a, b) => a[1].porcentagem - b[1].porcentagem);
  
  if (temasOrdenados.length === 0) {
    html += '<div class="tema-item">Nenhum tema respondido ainda</div>';
  } else {
    temasOrdenados.forEach(([tema, stats]) => {
      const cor = stats.porcentagem >= 70 ? '#00ff88' : 
                  stats.porcentagem >= 40 ? '#ffff00' : '#ff4444';
      
      html += `
        <div class="tema-item">
          <div class="tema-nome">${getThemeIcon(tema)} ${tema}</div>
          <div class="tema-stats">
            <div class="tema-barra">
              <div class="tema-preenchida" style="width: ${stats.porcentagem}%; background: ${cor}"></div>
            </div>
            <span class="tema-porcentagem">${stats.porcentagem}%</span>
          </div>
          <div class="tema-detalhes">${stats.acertos}/${stats.total}</div>
        </div>
      `;
    });
    
    // Mostrar tema que precisa melhorar
    if (temasOrdenados.length > 0) {
      const temaMelhorar = temasOrdenados[0];
      if (temaMelhorar[1].total > 0 && temaMelhorar[1].porcentagem < 70) {
        html += `
          <div class="tema-melhorar">
            <strong>💡 Foque em:</strong><br>
            ${getThemeIcon(temaMelhorar[0])} ${temaMelhorar[0]}
          </div>
        `;
      }
    }
  }
  
  graficoDiv.innerHTML = html;
}

function mostrarPergunta() {
  if (indice >= perguntasFiltradas.length) {
    mostrarResultado();
    return;
  }
  
  const quizBox = document.getElementById("quiz-box");
  const p = perguntasFiltradas[indice];
  
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
    
    atualizarPainelProgresso();
    
  }, 300);
}

function getThemeIcon(tema) {
  const icons = {
    'Culinária': '🍜', 'Cuisine': '🍜', 'Gastronomía': '🍜',
    'Religião': '🕉️', 'Religion': '🕉️', 'Religión': '🕉️',
    'Arte': '🎨', 'Art': '🎨',
    'Cultura': '🎭', 'Culture': '🎭',
    'Arquitetura': '🏛️', 'Architecture': '🏛️', 'Arquitectura': '🏛️',
    'Língua': '🗣️', 'Language': '🗣️', 'Idioma': '🗣️',
    'Dança': '💃', 'Dance': '💃', 'Danza': '💃',
    'Música': '🎵', 'Music': '🎵', 'Música': '🎵',
    'Festas': '🎉', 'Festivals': '🎉', 'Festivales': '🎉',
    'Cinema': '🎬', 'Cinema': '🎬', 'Cine': '🎬',
    'Mitologia': '⚡', 'Mythology': '⚡', 'Mitología': '⚡',
    'Esportes Tradicionais': '🥋', 'Traditional Sports': '🥋', 'Deportes Tradicionales': '🥋',
    'Literatura': '📚', 'Literature': '📚',
    'Tradições': '🎭', 'Traditions': '🎭', 'Tradiciones': '🎭',
    'Arquitetura Religiosa': '⛪', 'Religious Architecture': '⛪', 'Arquitectura Religiosa': '⛪',
    'Filosofia': '🤔', 'Philosophy': '🤔', 'Filosofía': '🤔',
    'História': '📜', 'History': '📜', 'Historia': '📜',
    'Ciência': '🔬', 'Science': '🔬', 'Ciencia': '🔬',
    'Geografia': '🌍', 'Geography': '🌍', 'Geografía': '🌍',
    'Economia': '💰', 'Economy': '💰', 'Economía': '💰',
    'Tecnologia': '💻', 'Technology': '💻', 'Tecnología': '💻'
  };
  return icons[tema] || '🌍';
}

function responder(indiceEscolhido) {
  const p = perguntasFiltradas[indice];
  const opcoes = document.querySelectorAll("#opcoes button");

  // Desabilita todos os botões de opção
  opcoes.forEach(b => b.disabled = true);

  const exp = document.getElementById("explicacao");
  exp.classList.remove("hidden");

  // Atualizar estatísticas do tema
  if (!estatisticasTemas[p.tema]) {
    estatisticasTemas[p.tema] = { total: 0, acertos: 0, porcentagem: 0 };
  }

  if (indiceEscolhido === p.resposta_correta) {
    // Pontuação baseada na dificuldade
    const pontosPorDificuldade = {
      'facil': 5,
      'normal': 10,
      'dificil': 20
    };
    pontuacao += pontosPorDificuldade[p.dificuldade];
    
    estatisticasTemas[p.tema].acertos++;
    
    exp.innerHTML = `✅ <strong>Resposta correta! (+${pontosPorDificuldade[p.dificuldade]} pontos)</strong><br><em>${p.explicacao}</em>`;
    opcoes[indiceEscolhido].classList.add("correta");
    
    // Tocar som de acerto
    tocarSom('acerto');
    
    // Efeito de partículas simulado
    criarEfeitoSucesso(opcoes[indiceEscolhido]);
    
    // Vibração de sucesso
    if (navigator.vibrate) {
      navigator.vibrate([100, 50, 100]);
    }
  } else {
    exp.innerHTML = `❌ <strong>Resposta errada!</strong> A correta era: <strong>${p.opcoes[p.resposta_correta]}</strong><br><em>${p.explicacao}</em>`;
    opcoes[indiceEscolhido].classList.add("errada");
    opcoes[p.resposta_correta].classList.add("correta");
    
    // Tocar som de erro
    tocarSom('erro');
    
    // Vibração de erro
    if (navigator.vibrate) {
      navigator.vibrate([200, 100, 200, 100, 200]);
    }
  }

  // Atualizar porcentagem do tema
  estatisticasTemas[p.tema].porcentagem = Math.round(
    (estatisticasTemas[p.tema].acertos / estatisticasTemas[p.tema].total) * 100
  );

  document.getElementById("proximo").disabled = false;
  
  atualizarGraficoTemas();
  atualizarPainelProgresso();
}

function criarEfeitoSucesso(elemento) {
  // Criar efeito de brilho temporário
  elemento.style.boxShadow = '0 0 50px rgba(0, 255, 136, 0.8), 0 0 100px rgba(0, 255, 136, 0.4)';
  elemento.style.transform = 'scale(1.05)';
  
  setTimeout(() => {
    elemento.style.transform = 'scale(1)';
  }, 300);
}

function proximaPergunta() {
  indice++;
  mostrarPergunta();
}

function mostrarResultado() {
  document.getElementById("quiz-box").classList.add("hidden");
  document.getElementById("resultado").classList.remove("hidden");
  document.getElementById("pontuacao-final").innerText = `${pontuacao} pontos`;

  // Tocar som de final
  tocarSom('final');

  // Mostrar link bonus se pontuação alta
  const pontuacaoMinima = {
    'facil': 15,
    'normal': 30,
    'dificil': 60
  };
  
  if (pontuacao >= pontuacaoMinima[dificuldadeAtual]) {
    document.getElementById("link-bonus").classList.remove("hidden");
  }
  
  // Efeito de fogos de artifício simulado para pontuações altas
  if (pontuacao >= pontuacaoMinima[dificuldadeAtual] * 2) {
    criarEfeitoFogosArtificio();
  }
  
  // Mostrar botão de salvar apenas se ainda não salvou
  const botaoSalvar = document.getElementById("botao-salvar");
  const inputNome = document.getElementById("nome-jogador");
  
  if (jaSalvouPontuacao) {
    botaoSalvar.style.display = 'none';
    inputNome.style.display = 'none';
    
    const mensagemSalvo = document.createElement('div');
    mensagemSalvo.innerHTML = '✅ <strong>Pontuação já foi salva!</strong><br>Reinicie o jogo para jogar novamente.';
    mensagemSalvo.style.cssText = `
      background: rgba(0, 255, 136, 0.2);
      border: 2px solid var(--success-color);
      border-radius: 10px;
      padding: 15px;
      margin: 20px 0;
      text-align: center;
      color: var(--success-color);
    `;
    
    document.getElementById("resultado").insertBefore(mensagemSalvo, document.getElementById("link-bonus"));
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
  if (jaSalvouPontuacao) {
    alert("Você já salvou sua pontuação! Reinicie o jogo para jogar novamente.");
    return;
  }
  
  const nome = document.getElementById("nome-jogador").value || "Anônimo";
  fetch("/pontuar", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nome, pontos: pontuacao })
  }).then(() => {
    jaSalvouPontuacao = true;
    alert("Pontuação salva com sucesso! 🎉\nSeus pontos foram somados ao seu total no ranking!");
    carregarRanking(); // Atualizar ranking após salvar
    
    // Esconder botão e input após salvar
    document.getElementById("botao-salvar").style.display = 'none';
    document.getElementById("nome-jogador").style.display = 'none';
    
    // Mostrar mensagem de sucesso
    const mensagemSalvo = document.createElement('div');
    mensagemSalvo.innerHTML = '✅ <strong>Pontuação salva com sucesso!</strong><br>Seus pontos foram somados ao ranking. Reinicie para jogar novamente.';
    mensagemSalvo.style.cssText = `
      background: rgba(0, 255, 136, 0.2);
      border: 2px solid var(--success-color);
      border-radius: 10px;
      padding: 15px;
      margin: 20px 0;
      text-align: center;
      color: var(--success-color);
      animation: slideInUp 0.5s ease-out;
    `;
    
    document.getElementById("resultado").insertBefore(mensagemSalvo, document.getElementById("link-bonus"));
  });
}

function reiniciarJogo() {
  jaSalvouPontuacao = false;
  document.getElementById("resultado").classList.add("hidden");
  document.getElementById("quiz-box").classList.remove("hidden");
  carregarPerguntas();
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