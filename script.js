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

  // Contenuto principale mostrato quando l'utente clicca "Apri il viaggio"
  function start() {
    createStars(36);
    const app = document.getElementById('app');
    app.innerHTML = `
      <div class="card">
        <header>
          <h1>🌙 Il nostro piccolo universo</h1>
          <p class="lead">Un piccolo viaggio creato da me, per te.</p>
        </header>

        <section class="section" id="quiz-section">
          <h2>🎮 Quiz rapido</h2>
          <div class="quiz" id="quiz">
            <div class="q">
              <p><b>1)</b> Qual è la cosa che più ci accomuna?</p>
              <div>
                <button class="choice" data-q="0" data-a="0">🍕 Il cibo</button>
                <button class="choice" data-q="0" data-a="1">🎮 I videogiochi</button>
                <button class="choice" data-q="0" data-a="2">😴 Dormire</button>
                <button class="choice" data-q="0" data-a="3">🐱 I gatti</button>
              </div>
            </div>

            <div class="q">
              <p><b>2)</b> Cosa amo più di te?</p>
              <div>
                <button class="choice" data-q="1" data-a="0">💸 I tuoi soldi</button>
                <button class="choice" data-q="1" data-a="1">Il fatto che mi sopporti ogni giorno</button>
                <button class="choice" data-q="1" data-a="2">Che mi fai ridere</button>
                <button class="choice" data-q="1" data-a="3">Il gelato 🍦</button>
              </div>
            </div>

            <div class="q">
              <p><b>3)</b> Qual è la cosa che fai meglio?</p>
              <div>
                <button class="choice" data-q="2" data-a="0">Rubarmi le patatine</button>
                <button class="choice" data-q="2" data-a="1">Addormentarti ovunque</button>
                <button class="choice" data-q="2" data-a="2">Farmi arrabbiare per sport</button>
                <button class="choice" data-q="2" data-a="3">Farmi sentire amata ❤️</button>
              </div>
            </div>

            <div class="q">
              <p><b>4)</b> Qual è il tuo superpotere?</p>
              <div>
                <button class="choice" data-q="3" data-a="0">Trovare sempre il lato negativo</button>
                <button class="choice" data-q="3" data-a="1">Finire il cibo prima degli altri</button>
                <button class="choice" data-q="3" data-a="2">Farmi ridere anche quando sono arrabbiata</button>
                <button class="choice" data-q="3" data-a="3">Farmi innervosire quando devo scegliere un film</button>
              </div>
            </div>
          </div>
        </section>

        <section class="section" id="photo-section">
          <h2>🎞 Galleria</h2>
          <div class="gallery" id="gallery">
            <img src="images/IMG_0364.jpeg" alt="Foto principale">
          </div>
          <p class="note" style="margin-top:10px;">Queste foto raccontano alcuni dei nostri ricordi — scorri per riviverli.</p>
        </section>

        <section class="section" id="stars-section">
          <h2>💖 I motivi per cui ti amo</h2>
          <p>Premi una stella per leggere il motivo corrispondente:</p>
          <div id="stars" style="display:flex;gap:12px;margin-top:12px;flex-wrap:wrap;">
            <button class="star-btn" data-star="0">⭐</button>
            <button class="star-btn" data-star="1">⭐</button>
            <button class="star-btn" data-star="2">⭐</button>
            <button class="star-btn" data-star="3">⭐</button>
          </div>
          <div id="star-content" style="margin-top:12px;min-height:40px;">
            <!-- contenuti mostrati cliccando le stelle -->
          </div>
        </section>

        <section class="section" id="letter-section">
          <h2>💌 Lettera</h2>
          <button class="btn" onclick="showLetter()">Leggi la lettera</button>
          <div id="letter" style="display:none;margin-top:12px;white-space:pre-wrap;">Amore,

non so se tre o quattro mesi siano tanti o pochi. So solo che in così poco tempo sei riuscito a farmi provare qualcosa che, fino a poco fa, pensavo fosse quasi impossibile.

Con te ho scoperto che l’amore non si misura dai regali o dai grandi gesti, ma dalle piccole cose di ogni giorno. Dalle attenzioni che arrivano senza doverle chiedere, dai messaggi, dalla tua presenza costante, dal modo in cui riesci a farmi sentire importante senza mai essere invadente.

Mi hai fatta sentire scelta fin dall’inizio. Non mi hai lasciata nel dubbio, non mi hai costretta a interpretare silenzi o comportamenti. Hai voluto costruire qualcosa con me e hai avuto il coraggio di dimostrarmelo con i fatti. È una cosa che oggi sembra rara, e io non smetterò mai di esserne grata.

Sai qual è la cosa più bella? Che con te mi sento serena. Non sento il bisogno di rincorrere, di convincere qualcuno a restare o di chiedere attenzioni. Tu ci sei. E ci sei nel modo più semplice e sincero possibile.

Mi fai sentire al sicuro, ascoltata, capita. Mi fai sorridere anche nelle giornate più pesanti e riesci a rendere speciale perfino un momento qualunque. Senza accorgertene, mi hai insegnato che il vero amore non è fatto di promesse enormi, ma di presenza, rispetto, chiarezza e cura.

Forse è presto per qualcuno, ma per me il tempo conta meno di come una persona ti fa sentire. E tu, in così poco tempo, mi hai dato una tranquillità che non avevo mai conosciuto.

Grazie perché sei paziente con me. Grazie perché mi fai sentire vista. Grazie perché ogni giorno scegli di esserci e mi dimostri che l’amore non dovrebbe mai farmi dubitare di essere abbastan[...]

Spero di riuscire a farti sentire anche solo una parte di tutto quello che tu fai sentire a me. Perché te lo meriti davvero.

E se c’è una cosa che voglio dirti più di tutte è questa: grazie per avermi fatto conoscere un amore che non si deve inseguire, ma che si vive. Un amore che mi fa sentire finalmente a casa.

Ti amo. E, se questo è solo l’inizio della nostra storia, non vedo l’ora di scoprire tutto quello che ci aspetta.

Con tutto il mio cuore. 🌟

</div>
        </section>

        <p class="note">Suggerimento: se vuoi cambiare i testi o le didascalie fammi sapere.</p>
      </div>
    `;

    // Dopo aver inserito il markup, colleghiamo i comportamenti dinamici
    setTimeout(() => {
      const correctAnswers = [0, 3, 2, 1]; // Q1, Q2, Q3, Q4
      document.querySelectorAll('.choice').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const q = Number(btn.getAttribute('data-q'));
          const a = Number(btn.getAttribute('data-a'));
          const parent = btn.closest('.q');
          if (!parent) return;
          parent.querySelectorAll('.choice').forEach(c => { c.classList.remove('correct','wrong'); c.disabled = true; });
          if (a === correctAnswers[q]) { btn.classList.add('correct'); alert('✅ Giusto!'); } else { btn.classList.add('wrong'); alert('❌ Non è corretto.'); }
        });
      });

      // Stelle cliccabili
      const reasons = [
        'Mi fai sentire sicura e capita: la tua presenza e le tue attenzioni rendono ogni giorno più leggero.',
        'Mi fai ridere anche nelle giornate difficili: il tuo umorismo è un rifugio.',
        'Sei presente senza bisogno di essere chiesto: sei lì nei momenti importanti e in quelli piccoli.',
        'Con te le piccole cose diventano speciali: rendi unico anche un pomeriggio qualunque.'
      ];
      const starContent = document.getElementById('star-content');
      document.querySelectorAll('.star-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const i = Number(btn.getAttribute('data-star'));
          if (starContent.getAttribute('data-current') == i) { starContent.innerHTML = ''; starContent.removeAttribute('data-current'); return; }
          starContent.setAttribute('data-current', i);
          starContent.innerHTML = `<div style="padding:12px;border-radius:10px;background:rgba(255,255,255,0.03);border:1px solid rgba(0,0,0,0.06);">${reasons[i]}</div>`;
          starContent.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
      });
    },50);
  }

  // Overlay iniziale (sbarramento)
  function showOverlay() {
    const overlay = document.createElement('div');
    overlay.id = 'intro-overlay';
    overlay.style.position = 'fixed';
    overlay.style.inset = 0;
    overlay.style.background = 'linear-gradient(180deg, rgba(10,10,8,0.95), rgba(30,20,6,0.92))';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.zIndex = 9999;
    overlay.innerHTML = `
      <div style="text-align:center;color:#fffbe6;padding:28px;border-radius:12px;max-width:360px;">
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
  });
})();
