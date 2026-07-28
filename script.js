(function(){
  // Crea stelle decorative 🌟 nello sfondo
  function createStars(count = 30) {
    const bg = document.querySelector('.stars-bg');
    if (!bg) return;
    bg.innerHTML = '';
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    for (let i = 0; i < count; i++) {
      const s = document.createElement('span');
      s.className = 'star';
      s.textContent = '🌟';
      s.style.left = Math.floor(Math.random() * vw) + 'px';
      s.style.top = Math.floor(Math.random() * vh + vh * 0.2) + 'px';
      s.style.fontSize = (10 + Math.random() * 26) + 'px';
      s.style.animationDuration = (8 + Math.random() * 12) + 's';
      s.style.opacity = 0.7 + Math.random() * 0.3;
      bg.appendChild(s);
    }
  }

  // Mostra una sola sezione alla volta con transizione
  function showSection(id) {
    document.querySelectorAll('.section').forEach(s => {
      if (s.id === id) {
        s.classList.add('active');
        s.style.display = 'block';
        s.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        s.classList.remove('active');
        s.style.display = 'none';
      }
    });
  }

  // Sezioni in ordine per la navigazione a freccia
  const sectionsOrder = ['quiz-section','photo-section','stars-section','letter-section'];
  function getCurrentSectionIndex() {
    const active = document.querySelector('.section.active');
    if (!active) return 0;
    return Math.max(0, sectionsOrder.indexOf(active.id));
  }
  function goToNext() {
    const i = getCurrentSectionIndex();
    const next = Math.min(sectionsOrder.length - 1, i + 1);
    showSection(sectionsOrder[next]);
  }
  function goToPrev() {
    const i = getCurrentSectionIndex();
    const prev = Math.max(0, i - 1);
    showSection(sectionsOrder[prev]);
  }

  // Contenuto principale mostrato quando l'utente clicca "Apri il viaggio"
  function start() {
    createStars(36);

    // Se il markup esiste già (index.html statico), non sovrascriverlo: colleghiamo i comportamenti
    const correctAnswers = [0, 3, 2, 1]; // Q1, Q2, Q3, Q4
    let completedCount = 0;
    const totalQuestions = 4;

    // inizialmente mostra solo il quiz
    showSection('quiz-section');

    // Aggiungi listener per le scelte
    document.querySelectorAll('.choice').forEach(btn => {
      // evita di agganciare più volte (se start viene chiamata più volte)
      if (btn.__hooked) return;
      btn.__hooked = true;

      btn.addEventListener('click', (e) => {
        const q = Number(btn.getAttribute('data-q'));
        const a = Number(btn.getAttribute('data-a'));
        const parent = btn.closest('.q');
        if (!parent) return;
        // if this question already answered, ignore
        if (parent.getAttribute('data-answered') === 'true') return;
        parent.setAttribute('data-answered','true');

        const feedbackDiv = parent.querySelector('.feedback');
        if (feedbackDiv) {
          feedbackDiv.classList.remove('fb-correct','fb-wrong');
        }

        parent.querySelectorAll('.choice').forEach(c => { c.classList.remove('correct','wrong'); c.disabled = true; });
        if (a === correctAnswers[q]) {
          btn.classList.add('correct');
          if (feedbackDiv) { feedbackDiv.textContent = 'dai questa era facile'; feedbackDiv.classList.add('fb-correct'); }
        } else {
          btn.classList.add('wrong');
          if (feedbackDiv) { feedbackDiv.textContent = 'prevedibile...'; feedbackDiv.classList.add('fb-wrong'); }
          // evidenzia la risposta corretta
          const correctBtn = parent.querySelector(`.choice[data-a="${correctAnswers[q]}"]`);
          if (correctBtn) correctBtn.classList.add('correct');
        }

        // increment completed count and check
        completedCount += 1;
        if (completedCount === totalQuestions) {
          // show the custom button text as requested
          const after = document.getElementById('after-quiz');
          if (after) {
            after.innerHTML = `<button class="btn" id="toPhotoBtn">e non abbiamo ancora finito, schiaccia la stellina qua🌟</button>`;
            const toPhoto = document.getElementById('toPhotoBtn');
            if (toPhoto) {
              toPhoto.addEventListener('click', () => { showSection('photo-section'); });
            }
          }
        }
      });
    });

    // Photo seen button (sia fallback che dinamico)
    document.addEventListener('click', (e) => {
      const id = e.target && e.target.id;
      if (id === 'seenPhotoBtn' || id === 'seenPhotoBtnFallback') {
        // enable stars and go to stars section
        document.querySelectorAll('.star-btn').forEach(b => { b.disabled = false; });
        showSection('stars-section');
      }
    });

    // Stelle cliccabili con conteggio: la lettera si sblocca dopo tutte le stelle
    const reasons = [
      'Mi fai sentire sicura e capita: la tua presenza e le tue attenzioni rendono ogni giorno più leggero.',
      'Mi fai ridere anche nelle giornate difficili: il tuo umorismo è un rifugio.',
      'Sei presente senza bisogno di essere chiesto: sei lì nei momenti importanti e in quelli piccoli.',
      'Con te le piccole cose diventano speciali: rendi unico anche un pomeriggio qualunque.'
    ];
    const starContent = document.getElementById('star-content');
    let starsClicked = new Set();
    document.querySelectorAll('.star-btn').forEach(btn => {
      if (btn.__hooked) return;
      btn.__hooked = true;
      btn.addEventListener('click', () => {
        const i = Number(btn.getAttribute('data-star'));
        starsClicked.add(i);
        if (starContent) starContent.innerHTML = `<div class="reason">${reasons[i]}</div>`;

        // if all stars clicked, reveal letter section
        if (starsClicked.size === document.querySelectorAll('.star-btn').length) {
          showSection('letter-section');
        }
      });
    });

    // freccine di navigazione
    function hookNavArrows() {
      document.querySelectorAll('.nav-arrow.prev').forEach(b => {
        if (b.__hooked) return; b.__hooked = true;
        b.addEventListener('click', (e) => { e.preventDefault(); goToPrev(); });
      });
      document.querySelectorAll('.nav-arrow.next').forEach(b => {
        if (b.__hooked) return; b.__hooked = true;
        b.addEventListener('click', (e) => { e.preventDefault(); goToNext(); });
      });
    }
    hookNavArrows();

    // supporto tastiera (frecce sinistra/destra)
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') { goToNext(); }
      if (e.key === 'ArrowLeft') { goToPrev(); }
    });

  }

  // Overlay iniziale (sbarramento)
  function showOverlay() {
    const overlay = document.createElement('div');
    overlay.id = 'intro-overlay';
    overlay.style.position = 'fixed';
    overlay.style.inset = 0;
    overlay.style.background = 'linear-gradient(180deg, rgba(255,250,240,0.95), rgba(255,245,220,0.92))';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.zIndex = 9999;
    overlay.innerHTML = `
      <div style="text-align:center;color:#4b3300;padding:28px;border-radius:12px;max-width:420px;">
        <h2 style="margin:0 0 8px;">Benvenuta</h2>
        <p style="margin:0 0 18px;">Premi il pulsante per aprire il viaggio</p>
        <button class="btn" id="openBtn">Apri il viaggio</button>
      </div>
    `;
    document.body.appendChild(overlay);
    document.getElementById('openBtn').addEventListener('click', () => {
      overlay.remove();
      start();
    });
  }

  // Mostra/nasconde la lettera
  window.showLetter = function() {
    const l = document.getElementById('letter');
    if (l) l.style.display = l.style.display === 'none' ? 'block' : 'none';
    if (l && l.style.display === 'block') l.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  // Avvia qualche stella fin da subito e mostra overlay
  document.addEventListener('DOMContentLoaded', () => {
    createStars(22);
    showOverlay();

    // se l'utente avesse già cliccato Inizia (link fallback), colleghiamo comunque i comportamenti
    const startBtn = document.getElementById('startBtn');
    if (startBtn) {
      startBtn.addEventListener('click', (e) => { e.preventDefault(); start(); });
    }
  });
})();
