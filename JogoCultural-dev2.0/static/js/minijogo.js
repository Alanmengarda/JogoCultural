const bandeiras = {
  facil: [
    {
      pais: "Brasil 🇧🇷",
      imagem: "https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg",
      pecas: [
        { id: 1, x: 0, y: 0, width: 50, height: 50 },
        { id: 2, x: 50, y: 0, width: 50, height: 50 },
        { id: 3, x: 0, y: 50, width: 50, height: 50 },
        { id: 4, x: 50, y: 50, width: 50, height: 50 }
      ],
      explicacao: "A bandeira do Brasil representa as riquezas naturais do país. O verde simboliza as florestas, o amarelo as riquezas minerais, e o azul com estrelas representa o céu do Rio de Janeiro na Proclamação da República.",
      dimensoes: { width: 100, height: 100 }
    },
    {
      pais: "França 🇫🇷",
      imagem: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
      pecas: [
        { id: 1, x: 0, y: 0, width: 50, height: 50 },
        { id: 2, x: 50, y: 0, width: 50, height: 50 },
        { id: 3, x: 0, y: 50, width: 50, height: 50 },
        { id: 4, x: 50, y: 50, width: 50, height: 50 }
      ],
      explicacao: "A bandeira francesa, conhecida como Tricolor, representa os ideais da Revolução Francesa: azul (liberdade), branco (igualdade) e vermelho (fraternidade). Foi adotada oficialmente em 1794.",
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
      explicacao: "A bandeira japonesa, chamada Hinomaru, significa 'círculo do sol'. O círculo vermelho representa o sol nascente, simbolizando o Japão como a 'Terra do Sol Nascente'.",
      dimensoes: { width: 100, height: 100 }
    },
    {
      pais: "Alemanha 🇩🇪",
      imagem: "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg",
      pecas: [
        { id: 1, x: 0, y: 0, width: 50, height: 50 },
        { id: 2, x: 50, y: 0, width: 50, height: 50 },
        { id: 3, x: 0, y: 50, width: 50, height: 50 },
        { id: 4, x: 50, y: 50, width: 50, height: 50 }
      ],
      explicacao: "A bandeira alemã tem três faixas horizontais: preta, vermelha e dourada. Estas cores representam a unidade e liberdade alemã, sendo adotadas oficialmente em 1949.",
      dimensoes: { width: 100, height: 100 }
    },
    {
      pais: "Canadá 🇨🇦",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg",
      pecas: [
        { id: 1, x: 0, y: 0, width: 50, height: 50 },
        { id: 2, x: 50, y: 0, width: 50, height: 50 },
        { id: 3, x: 0, y: 50, width: 50, height: 50 },
        { id: 4, x: 50, y: 50, width: 50, height: 50 }
      ],
      explicacao: "A bandeira do Canadá apresenta a folha de bordo vermelha, símbolo nacional do país. Foi adotada em 1965, substituindo a Union Jack britânica.",
      dimensoes: { width: 100, height: 100 }
    }
  ],
  normal: [
    {
      pais: "Reino Unido 🇬🇧",
      imagem: "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg",
      pecas: [
        { id: 1, x: 0, y: 0, width: 50, height: 50 },
        { id: 2, x: 50, y: 0, width: 50, height: 50 },
        { id: 3, x: 0, y: 50, width: 50, height: 50 },
        { id: 4, x: 50, y: 50, width: 50, height: 50 }
      ],
      explicacao: "A Union Jack combina as cruzes de São Jorge (Inglaterra), Santo André (Escócia) e São Patrício (Irlanda do Norte), representando a união dos países do Reino Unido.",
      dimensoes: { width: 100, height: 100 }
    },
    {
      pais: "Estados Unidos 🇺🇸",
      imagem: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
      pecas: [
        { id: 1, x: 0, y: 0, width: 50, height: 50 },
        { id: 2, x: 50, y: 0, width: 50, height: 50 },
        { id: 3, x: 0, y: 50, width: 50, height: 50 },
        { id: 4, x: 50, y: 50, width: 50, height: 50 }
      ],
      explicacao: "A bandeira americana tem 13 listras representando as colônias originais e 50 estrelas representando os estados atuais. É conhecida como 'Stars and Stripes'.",
      dimensoes: { width: 100, height: 100 }
    },
    {
      pais: "Espanha 🇪🇸",
      imagem: "https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg",
      pecas: [
        { id: 1, x: 0, y: 0, width: 50, height: 50 },
        { id: 2, x: 50, y: 0, width: 50, height: 50 },
        { id: 3, x: 0, y: 50, width: 50, height: 50 },
        { id: 4, x: 50, y: 50, width: 50, height: 50 }
      ],
      explicacao: "A bandeira espanhola tem duas faixas vermelhas e uma amarela central com o brasão nacional. As cores representam os antigos reinos de Castela e Aragão.",
      dimensoes: { width: 100, height: 100 }
    },
    {
      pais: "Itália 🇮🇹",
      imagem: "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg",
      pecas: [
        { id: 1, x: 0, y: 0, width: 50, height: 50 },
        { id: 2, x: 50, y: 0, width: 50, height: 50 },
        { id: 3, x: 0, y: 50, width: 50, height: 50 },
        { id: 4, x: 50, y: 50, width: 50, height: 50 }
      ],
      explicacao: "A bandeira italiana, conhecida como 'Il Tricolore', tem três faixas verticais: verde (esperança), branco (fé) e vermelho (caridade). Foi inspirada na bandeira francesa.",
      dimensoes: { width: 100, height: 100 }
    },
    {
      pais: "China 🇨🇳",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg",
      pecas: [
        { id: 1, x: 0, y: 0, width: 50, height: 50 },
        { id: 2, x: 50, y: 0, width: 50, height: 50 },
        { id: 3, x: 0, y: 50, width: 50, height: 50 },
        { id: 4, x: 50, y: 50, width: 50, height: 50 }
      ],
      explicacao: "A bandeira chinesa tem fundo vermelho com cinco estrelas douradas. A estrela maior representa o Partido Comunista e as quatro menores representam as classes sociais unidas.",
      dimensoes: { width: 100, height: 100 }
    }
  ],
  dificil: [
    {
      pais: "Suíça 🇨🇭",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/0/08/Flag_of_Switzerland_%28Pantone%29.svg",
      pecas: [
        { id: 1, x: 0, y: 0, width: 50, height: 50 },
        { id: 2, x: 50, y: 0, width: 50, height: 50 },
        { id: 3, x: 0, y: 50, width: 50, height: 50 },
        { id: 4, x: 50, y: 50, width: 50, height: 50 }
      ],
      explicacao: "A bandeira suíça é uma das únicas bandeiras quadradas do mundo. A cruz branca sobre fundo vermelho simboliza a fé cristã e a neutralidade do país.",
      dimensoes: { width: 100, height: 100 }
    },
    {
      pais: "Coreia do Sul 🇰🇷",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg",
      pecas: [
        { id: 1, x: 0, y: 0, width: 50, height: 50 },
        { id: 2, x: 50, y: 0, width: 50, height: 50 },
        { id: 3, x: 0, y: 50, width: 50, height: 50 },
        { id: 4, x: 50, y: 50, width: 50, height: 50 }
      ],
      explicacao: "A bandeira sul-coreana, chamada Taegeukgi, apresenta o símbolo yin-yang (taegeuk) no centro e quatro trigramas nos cantos, representando os elementos fundamentais do universo.",
      dimensoes: { width: 100, height: 100 }
    },
    {
      pais: "Nepal 🇳🇵",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg",
      pecas: [
        { id: 1, x: 0, y: 0, width: 50, height: 50 },
        { id: 2, x: 50, y: 0, width: 50, height: 50 },
        { id: 3, x: 0, y: 50, width: 50, height: 50 },
        { id: 4, x: 50, y: 50, width: 50, height: 50 }
      ],
      explicacao: "A bandeira do Nepal é única por não ser retangular. Tem formato de dois triângulos sobrepostos com sol e lua, simbolizando que o país durará enquanto existirem esses astros.",
      dimensoes: { width: 100, height: 100 }
    },
    {
      pais: "Grécia 🇬🇷",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Greece.svg",
      pecas: [
        { id: 1, x: 0, y: 0, width: 50, height: 50 },
        { id: 2, x: 50, y: 0, width: 50, height: 50 },
        { id: 3, x: 0, y: 50, width: 50, height: 50 },
        { id: 4, x: 50, y: 50, width: 50, height: 50 }
      ],
      explicacao: "A bandeira grega tem nove listras azuis e brancas representando as sílabas do lema 'Liberdade ou Morte' e uma cruz simbolizando a fé ortodoxa grega.",
      dimensoes: { width: 100, height: 100 }
    },
    {
      pais: "Índia 🇮🇳",
      imagem: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
      pecas: [
        { id: 1, x: 0, y: 0, width: 50, height: 50 },
        { id: 2, x: 50, y: 0, width: 50, height: 50 },
        { id: 3, x: 0, y: 50, width: 50, height: 50 },
        { id: 4, x: 50, y: 50, width: 50, height: 50 }
      ],
      explicacao: "A bandeira indiana tem três faixas: açafrão (coragem), branco (verdade) e verde (prosperidade), com a roda de Ashoka no centro simbolizando o dharma e o progresso.",
      dimensoes: { width: 100, height: 100 }
    }
  ]
};

let dificuldadeAtual = 'facil';
let indiceAtual = 0;
let acertos = 0;
let tentativas = 0;
let pecasColocadas = [];
let imagemCarregada = false;
let bandeirasAtuais = [];
let idiomaAtual = 'pt';

// Sistema de sons
function tocarSom(tipo) {
  try {
    // Criar sons usando Web Audio API
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    if (tipo === 'acerto') {
      // Som de acerto - frequências ascendentes
      const frequencies = [523.25, 659.25, 783.99]; // C5, E5, G5
      frequencies.forEach((freq, index) => {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(freq, audioContext.currentTime + index * 0.1);
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime + index * 0.1);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + index * 0.1 + 0.3);
        
        oscillator.start(audioContext.currentTime + index * 0.1);
        oscillator.stop(audioContext.currentTime + index * 0.1 + 0.3);
      });
    } else if (tipo === 'erro') {
      // Som de erro - frequência descendente
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(100, audioContext.currentTime + 0.5);
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
      
      oscillator.start();
      oscillator.stop(audioContext.currentTime + 0.5);
    } else if (tipo === 'completo') {
      // Som de bandeira completa - melodia de vitória
      const melody = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      melody.forEach((freq, index) => {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(freq, audioContext.currentTime + index * 0.15);
        gainNode.gain.setValueAtTime(0.2, audioContext.currentTime + index * 0.15);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + index * 0.15 + 0.4);
        
        oscillator.start(audioContext.currentTime + index * 0.15);
        oscillator.stop(audioContext.currentTime + index * 0.15 + 0.4);
      });
    } else if (tipo === 'final') {
      // Som de final de nível - fanfarra
      const fanfare = [523.25, 659.25, 783.99, 1046.50, 1318.51]; // C5, E5, G5, C6, E6
      fanfare.forEach((freq, index) => {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(freq, audioContext.currentTime + index * 0.2);
        gainNode.gain.setValueAtTime(0.25, audioContext.currentTime + index * 0.2);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + index * 0.2 + 0.6);
        
        oscillator.start(audioContext.currentTime + index * 0.2);
        oscillator.stop(audioContext.currentTime + index * 0.2 + 0.6);
      });
    }
  } catch (e) {
    console.log('Erro ao tocar som:', e);
  }
}

function inicializarJogo() {
  dificuldadeAtual = document.getElementById("dificuldade-mini").value;
  bandeirasAtuais = bandeiras[dificuldadeAtual];
  indiceAtual = 0;
  acertos = 0;
  tentativas = 0;
  atualizarPainelEstatisticas();
  carregarBandeira();
  updateMiniGameInterface();
}

function mudarIdiomaMini() {
  idiomaAtual = document.getElementById("idioma-mini").value;
  
  // Salvar idioma no localStorage para sincronização
  try {
    localStorage.setItem('gameLanguage', idiomaAtual);
  } catch (e) {
    console.log('Erro ao salvar idioma:', e);
  }
  
  // Atualizar interface imediatamente
  updateMiniGameInterface();
  atualizarPainelEstatisticas();
}

function updateMiniGameInterface() {
  // Atualizar título do jogo
  const gameTitle = document.querySelector('h2');
  if (gameTitle) {
    gameTitle.textContent = tMini('flagGameTitle');
  }
  
  // Atualizar descrição
  const description = document.querySelector('.container p');
  if (description) {
    description.textContent = tMini('puzzleDescription');
  }
  
  // Atualizar labels das seções
  const puzzlePiecesTitle = document.querySelector('.secao h3');
  if (puzzlePiecesTitle) {
    puzzlePiecesTitle.textContent = tMini('puzzlePieces');
  }
  
  const assembleFlagTitle = document.querySelectorAll('.secao h3')[1];
  if (assembleFlagTitle) {
    assembleFlagTitle.textContent = tMini('assembleFlag');
  }
  
  // Atualizar botões
  const restartButton = document.querySelector('button[onclick="reiniciar()"]');
  if (restartButton) {
    restartButton.textContent = tMini('restart');
  }
  
  const nextButton = document.querySelector('button[onclick="proximaBandeira()"]');
  if (nextButton) {
    nextButton.textContent = tMini('nextFlag');
  }
  
  // Atualizar botão voltar
  const backButton = document.querySelector('.botao-voltar');
  if (backButton) {
    backButton.textContent = tMini('backToMain');
  }
  
  // Atualizar labels dos seletores
  const languageLabel = document.querySelector('label[for="idioma-mini"]');
  if (languageLabel) {
    languageLabel.textContent = tMini('language');
  }
  
  const difficultyLabel = document.querySelector('label[for="dificuldade-mini"]');
  if (difficultyLabel) {
    difficultyLabel.textContent = tMini('difficulty');
  }
  
  // Atualizar opções de dificuldade
  const difficultySelect = document.getElementById('dificuldade-mini');
  if (difficultySelect) {
    const options = difficultySelect.querySelectorAll('option');
    if (options.length >= 3) {
      options[0].textContent = tMini('easyMini');
      options[1].textContent = tMini('normalMini');
      options[2].textContent = tMini('hardMini');
    }
  }
  
  // Atualizar título da bandeira atual se existir
  if (bandeirasAtuais && bandeirasAtuais[indiceAtual]) {
    const bandeira = bandeirasAtuais[indiceAtual];
    const tituloJogo = document.getElementById("titulo-jogo");
    if (tituloJogo) {
      tituloJogo.innerHTML = `🧩 ${tMini('assembleFlag').replace('🏁 ', '')} ${bandeira.pais}`;
    }
  }
}

function tMini(key, params = {}) {
  const miniTranslations = {
    pt: {
      flagGameTitle: "🧩 Quebra-cabeça de Bandeiras",
      puzzleDescription: "Arraste as peças da imagem real da bandeira para montar o quebra-cabeça",
      puzzlePieces: "🎯 Peças do Quebra-cabeça",
      assembleFlag: "🏁 Monte a Bandeira",
      restart: "🔄 Reiniciar Jogo",
      nextFlag: "➡️ Próxima Bandeira",
      backToMain: "← Voltar ao Jogo Principal",
      language: "Idioma:",
      difficulty: "Dificuldade:",
      easyMini: "🟢 Fácil (4 peças)",
      normalMini: "🟡 Normal (4 peças)",
      hardMini: "🔴 Difícil (4 peças)",
      statistics: "📊 ESTATÍSTICAS",
      level: "Nível:",
      flag: "Bandeira:",
      remaining: "Restantes:",
      hits: "Acertos:",
      complete: "Completo",
      hitRate: "Taxa de Acerto:",
      flagComplete: "✅ Bandeira Completa!",
      levelComplete: "🎉 Nível {level} Completo!",
      flagsAssembled: "Bandeiras Montadas",
      perfect: "🏆 Perfeito! Você é um expert em bandeiras!",
      excellent: "⭐ Excelente! Muito bem jogado!",
      goodJob: "👍 Bom trabalho! Continue praticando!"
    },
    en: {
      flagGameTitle: "🧩 Flag Puzzle",
      puzzleDescription: "Drag the pieces from the real flag image to assemble the puzzle",
      puzzlePieces: "🎯 Puzzle Pieces",
      assembleFlag: "🏁 Assemble the Flag",
      restart: "🔄 Restart Game",
      nextFlag: "➡️ Next Flag",
      backToMain: "← Back to Main Game",
      language: "Language:",
      difficulty: "Difficulty:",
      easyMini: "🟢 Easy (4 pieces)",
      normalMini: "🟡 Normal (4 pieces)",
      hardMini: "🔴 Hard (4 pieces)",
      statistics: "📊 STATISTICS",
      level: "Level:",
      flag: "Flag:",
      remaining: "Remaining:",
      hits: "Hits:",
      complete: "Complete",
      hitRate: "Hit Rate:",
      flagComplete: "✅ Flag Complete!",
      levelComplete: "🎉 Level {level} Complete!",
      flagsAssembled: "Flags Assembled",
      perfect: "🏆 Perfect! You are a flag expert!",
      excellent: "⭐ Excellent! Very well played!",
      goodJob: "👍 Good job! Keep practicing!"
    },
    es: {
      flagGameTitle: "🧩 Rompecabezas de Banderas",
      puzzleDescription: "Arrastra las piezas de la imagen real de la bandera para armar el rompecabezas",
      puzzlePieces: "🎯 Piezas del Rompecabezas",
      assembleFlag: "🏁 Arma la Bandera",
      restart: "🔄 Reiniciar Juego",
      nextFlag: "➡️ Siguiente Bandera",
      backToMain: "← Volver al Juego Principal",
      language: "Idioma:",
      difficulty: "Dificultad:",
      easyMini: "🟢 Fácil (4 piezas)",
      normalMini: "🟡 Normal (4 piezas)",
      hardMini: "🔴 Difícil (4 piezas)",
      statistics: "📊 ESTADÍSTICAS",
      level: "Nivel:",
      flag: "Bandera:",
      remaining: "Restantes:",
      hits: "Aciertos:",
      complete: "Completo",
      hitRate: "Tasa de Acierto:",
      flagComplete: "✅ ¡Bandera Completa!",
      levelComplete: "🎉 ¡Nivel {level} Completo!",
      flagsAssembled: "Banderas Armadas",
      perfect: "🏆 ¡Perfecto! ¡Eres un experto en banderas!",
      excellent: "⭐ ¡Excelente! ¡Muy bien jugado!",
      goodJob: "👍 ¡Buen trabajo! ¡Sigue practicando!"
    }
  };
  
  let translation = miniTranslations[idiomaAtual][key] || miniTranslations['pt'][key] || key;
  
  // Substituir parâmetros na tradução
  Object.keys(params).forEach(param => {
    translation = translation.replace(`{${param}}`, params[param]);
  });
  
  return translation;
}

function getDifficultyTextMini(difficulty) {
  const difficultyTexts = {
    'facil': {
      'pt': '🟢 Fácil',
      'en': '🟢 Easy',
      'es': '🟢 Fácil'
    },
    'normal': {
      'pt': '🟡 Normal',
      'en': '🟡 Normal',
      'es': '🟡 Normal'
    },
    'dificil': {
      'pt': '🔴 Difícil',
      'en': '🔴 Hard',
      'es': '🔴 Difícil'
    }
  };
  
  return difficultyTexts[difficulty][idiomaAtual] || difficultyTexts[difficulty]['pt'];
}

function atualizarPainelEstatisticas() {
  const painelDiv = document.getElementById('painel-estatisticas');
  const bandeirasRestantes = bandeirasAtuais.length - indiceAtual;
  const porcentagemAcertos = tentativas > 0 ? Math.round((acertos / tentativas) * 100) : 0;
  
  painelDiv.innerHTML = `
    <div class="stats-header">
      <h3>${tMini('statistics')}</h3>
    </div>
    
    <div class="stats-item">
      <span class="stats-label">${tMini('level')}</span>
      <span class="stats-valor">${getDifficultyTextMini(dificuldadeAtual)}</span>
    </div>
    
    <div class="stats-item">
      <span class="stats-label">${tMini('flag')}</span>
      <span class="stats-valor">${indiceAtual + 1}/${bandeirasAtuais.length}</span>
    </div>
    
    <div class="stats-item">
      <span class="stats-label">${tMini('remaining')}</span>
      <span class="stats-valor">${bandeirasRestantes}</span>
    </div>
    
    <div class="stats-item">
      <span class="stats-label">${tMini('hits')}</span>
      <span class="stats-valor acertos">${acertos}/${tentativas}</span>
    </div>
    
    <div class="barra-progresso-mini">
      <div class="barra-preenchida-mini" style="width: ${((indiceAtual) / bandeirasAtuais.length) * 100}%"></div>
    </div>
    <div class="porcentagem-texto-mini">${Math.round(((indiceAtual) / bandeirasAtuais.length) * 100)}% ${tMini('complete')}</div>
    
    <div class="taxa-acertos">
      <span class="stats-label">${tMini('hitRate')}</span>
      <span class="stats-valor taxa">${porcentagemAcertos}%</span>
    </div>
  `;
}

function carregarBandeira() {
  if (indiceAtual >= bandeirasAtuais.length) {
    mostrarFinalNivel();
    return;
  }
  
  // Limpa a mensagem de acerto/erro ao trocar de bandeira
  document.getElementById("resultado-mini").innerHTML = "";
  document.getElementById("resultado-mini").className = "";

  const bandeira = bandeirasAtuais[indiceAtual];
  document.getElementById("titulo-jogo").innerHTML = `🧩 ${tMini('assembleFlag').replace('🏁 ', '')} ${bandeira.pais}`;

  document.getElementById("pecas-disponiveis").innerHTML = "";
  document.getElementById("area-montagem").innerHTML = "";

  pecasColocadas = [];
  imagemCarregada = false;

  const img = new Image();
  img.crossOrigin = "anonymous";
  img.onload = function() {
    imagemCarregada = true;
    criarPecasESlots(bandeira, this);
  };
  img.onerror = function() {
    criarPecasFallback(bandeira);
  };
  img.src = bandeira.imagem;
  
  atualizarPainelEstatisticas();
}

function criarPecasESlots(bandeira, imagemOriginal) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = 300;
  canvas.height = 200;
  ctx.drawImage(imagemOriginal, 0, 0, canvas.width, canvas.height);

  const pecasEmbaralhadas = [...bandeira.pecas].sort(() => Math.random() - 0.5);

  pecasEmbaralhadas.forEach((peca, index) => {
    const elementoPeca = criarPecaComImagem(peca, canvas);
    elementoPeca.style.animationDelay = `${index * 0.1}s`;
    document.getElementById("pecas-disponiveis").appendChild(elementoPeca);
  });

  criarAreaMontagem(bandeira);
}

function criarPecaComImagem(peca, canvasOriginal) {
  const div = document.createElement('div');
  div.className = 'peca disponivel';
  div.draggable = true;
  div.dataset.id = peca.id;

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  const larguraPeca = (peca.width / 100) * 300;
  const alturaPeca = (peca.height / 100) * 200;
  canvas.width = larguraPeca;
  canvas.height = alturaPeca;

  const sourceX = (peca.x / 100) * 300;
  const sourceY = (peca.y / 100) * 200;

  ctx.drawImage(
    canvasOriginal,
    sourceX, sourceY, larguraPeca, alturaPeca,
    0, 0, larguraPeca, alturaPeca
  );

  ctx.strokeStyle = '#00ffff';
  ctx.lineWidth = 3;
  ctx.strokeRect(0, 0, larguraPeca, alturaPeca);

  div.appendChild(canvas);

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

    slot.addEventListener('dragover', allowDrop);
    slot.addEventListener('drop', drop);

    containerBandeira.appendChild(slot);
  });

  areaMontagem.appendChild(containerBandeira);
}

function criarPecasFallback(bandeira) {
  const cores = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4'];
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

    div.textContent = peca.id;
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
  slot.style.background = 'rgba(0, 255, 255, 0.05)';
  slot.style.borderColor = 'rgba(0, 255, 255, 0.5)';
  slot.style.transform = 'scale(1)';

  const pecaId = parseInt(ev.dataTransfer.getData("text"));
  const slotAceita = parseInt(slot.dataset.aceita);

  if (pecaId === slotAceita) {
    const pecaOriginal = document.querySelector(`[data-id="${pecaId}"].disponivel`);
    if (pecaOriginal) {
      // Mover a peça original para o slot
      pecaOriginal.classList.remove('disponivel');
      pecaOriginal.classList.add('na-area');
      pecaOriginal.draggable = false;
      pecaOriginal.style.cssText = `
        width: 100%;
        height: 100%;
        border-radius: 5px;
        animation: pecaEncaixe 0.5s ease-out;
      `;

      slot.innerHTML = '';
      slot.appendChild(pecaOriginal);

      pecasColocadas.push(pecaId);

      slot.style.borderColor = 'var(--success-color)';
      slot.style.boxShadow = '0 0 20px rgba(0, 255, 136, 0.6)';

      // Tocar som de acerto
      tocarSom('acerto');

      if (pecasColocadas.length === bandeirasAtuais[indiceAtual].pecas.length) {
        setTimeout(verificarCompleto, 500);
      }

      if (navigator.vibrate) {
        navigator.vibrate([50]);
      }
    }
  } else {
    slot.style.background = 'rgba(255, 68, 68, 0.3)';
    slot.style.borderColor = 'var(--error-color)';
    slot.style.animation = 'shake 0.6s ease-out';

    // Tocar som de erro
    tocarSom('erro');

    setTimeout(() => {
      slot.style.background = 'rgba(0, 255, 255, 0.05)';
      slot.style.borderColor = 'rgba(0, 255, 255, 0.5)';
      slot.style.animation = '';
    }, 600);

    if (navigator.vibrate) {
      navigator.vibrate([100, 50, 100]);
    }
  }
}

function verificarCompleto() {
  const bandeira = bandeirasAtuais[indiceAtual];
  const resultadoDiv = document.getElementById("resultado-mini");

  tentativas++;
  acertos++;

  resultadoDiv.innerHTML = `
    <div class="resultado-completo">
      <h3>${tMini('flagComplete')}</h3>
      <div class="explicacao-bandeira">
        <h4>🏛️ ${bandeira.pais}</h4>
        <p><em>${bandeira.explicacao}</em></p>
      </div>
    </div>
  `;
  resultadoDiv.className = "correto";

  // Tocar som de bandeira completa
  tocarSom('completo');

  criarEfeitoSucesso();

  if (navigator.vibrate) {
    navigator.vibrate([100, 50, 100, 50, 100]);
  }

  atualizarPainelEstatisticas();
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

    setTimeout(() => {
      confete.remove();
      style.remove();
    }, 3000);
  }
}

function mostrarFinalNivel() {
  const resultadoDiv = document.getElementById("resultado-mini");
  const porcentagemAcertos = Math.round((acertos / tentativas) * 100);
  
  // Tocar som de final de nível
  tocarSom('final');
  
  const levelText = getDifficultyTextMini(dificuldadeAtual).replace(/🟢|🟡|🔴/, '').trim();
  
  let mensagemFinal;
  if (porcentagemAcertos === 100) {
    mensagemFinal = tMini('perfect');
  } else if (porcentagemAcertos >= 80) {
    mensagemFinal = tMini('excellent');
  } else {
    mensagemFinal = tMini('goodJob');
  }
  
  resultadoDiv.innerHTML = `
    <div class="final-nivel">
      <h2>${tMini('levelComplete', { level: levelText })}</h2>
      <div class="estatisticas-finais">
        <div class="stat-final">
          <span class="stat-numero">${acertos}</span>
          <span class="stat-label">${tMini('flagsAssembled')}</span>
        </div>
        <div class="stat-final">
          <span class="stat-numero">${porcentagemAcertos}%</span>
          <span class="stat-label">${tMini('hitRate')}</span>
        </div>
      </div>
      <div class="mensagem-final">
        ${mensagemFinal}
      </div>
    </div>
  `;
  resultadoDiv.className = "final-completo";
  
  // Efeito especial para 100%
  if (porcentagemAcertos === 100) {
    criarEfeitoFogosArtificio();
  }
}

function criarEfeitoFogosArtificio() {
  for (let i = 0; i < 30; i++) {
    const fogo = document.createElement('div');
    fogo.style.cssText = `
      position: fixed;
      width: 6px;
      height: 6px;
      background: ${['#00ffff', '#ff00ff', '#ffff00', '#00ff88', '#ff6b6b'][Math.floor(Math.random() * 5)]};
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      left: 50%;
      top: 50%;
      animation: fogos${i} 3s ease-out forwards;
    `;

    const style = document.createElement('style');
    style.textContent = `
      @keyframes fogos${i} {
        0% {
          transform: translate(0, 0) scale(1);
          opacity: 1;
        }
        100% {
          transform: translate(${(Math.random() - 0.5) * 600}px, ${(Math.random() - 0.5) * 600}px) scale(0);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
    document.body.appendChild(fogo);

    setTimeout(() => {
      fogo.remove();
      style.remove();
    }, 3000);
  }
}

function reiniciar() {
  // Reiniciar o jogo do zero
  inicializarJogo();
}

function proximaBandeira() {
  indiceAtual++;
  const container = document.querySelector('.container');
  container.style.transform = 'scale(0.95)';
  container.style.opacity = '0.7';

  setTimeout(() => {
    carregarBandeira();
    container.style.transform = 'scale(1)';
    container.style.opacity = '1';
  }, 300);
}

function mudarDificuldade() {
  inicializarJogo();
}

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

window.onload = function() {
  adicionarAnimacoesExtras();
  
  // Detectar idioma da página principal ou usar padrão
  try {
    idiomaAtual = localStorage.getItem('gameLanguage') || 'pt';
    
    // Definir o idioma no seletor
    const idiomaSelect = document.getElementById('idioma-mini');
    if (idiomaSelect) {
      idiomaSelect.value = idiomaAtual;
    }
  } catch (e) {
    console.log('Erro ao carregar idioma:', e);
    idiomaAtual = 'pt';
  }
  
  inicializarJogo();
  updateMiniGameInterface();
};