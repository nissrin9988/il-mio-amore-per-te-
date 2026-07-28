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

  // Contenuto principale mostrato quando l'utente clicca "Inizia il viaggio"
  function start() {
    createStars(36);
    const app = document.getElementById('app');
    app.innerHTML = `
      <header>
        <h1>🌙 Il nostro piccolo universo</h1>
        <p class="lead">Un piccolo viaggio creato da me, per te.</p>
      </header>

      <section class="section">
        <h2>🎞 Galleria</h2>
        <p>Carica le tue foto nella cartella <code>/images</code>. Qui sotto ci sono segnaposto che potrai sostituire.</p>
        <div class="gallery" id="gallery">
          <img src="images/image1.jpg" alt="Foto 1 (sostituisci con la tua foto)">
          <img src="images/image2.jpg" alt="Foto 2 (sostituisci con la tua foto)">
          <img src="images/image3.jpg" alt="Foto 3 (sostituisci con la tua foto)">
        </div>
      </section>

      <section class="section">
        <h2>🎮 Quiz rapido</h2>
        <p><b>1)</b> Qual è la cosa che più ci accomuna?</p>
        <div>
          <button class="choice" onclick="quizAnswer(true)">🍕 Il cibo</button>
          <button class="choice" onclick="quizAnswer(false)">🎮 I videogiochi</button>
          <button class="choice" onclick="quizAnswer(false)">😴 Dormire</button>
          <button class="choice" onclick="quizAnswer(false)">🐱 I gatti</button>
        </div>
      </section>

      <section class="section">
        <h2>💌 Lettera</h2>
        <p>Alla fine del giro troverai una piccola lettera. Quando vuoi, clicca il bottone qui sotto.</p>
        <button class="btn" onclick="showLetter()">Leggi la lettera</button>
        <div id="letter" style="display:none;margin-top:12px;white-space:pre-wrap;">
Amore,

non so se tre o quattro mesi siano tanti o pochi. So solo che in così poco tempo sei riuscito a farmi provare qualcosa che, fino a poco fa, pensavo fosse quasi impossibile.

Con te ho scoperto che l’amore non si misura dai regali o dai grandi gesti, ma dalle piccole cose di ogni giorno. Dalle attenzioni che arrivano senza doverle chiedere, dai messaggi, dalla tua presenza costante, dal modo in cui riesci a farmi sentire importante senza mai essere invadente.

Mi hai fatta sentire scelta fin dall’inizio. Non mi hai lasciata nel dubbio, non mi hai costretta a interpretare silenzi o comportamenti. Hai voluto costruire qualcosa con me e hai avuto il coraggio di dimostrarmelo con i fatti. È una cosa che oggi sembra rara, e io non smetterò mai di esserne grata.

Sai qual è la cosa più bella? Che con te mi sento serena. Non sento il bisogno di rincorrere, di convincere qualcuno a restare o di chiedere attenzioni. Tu ci sei. E ci sei nel modo più semplice e sincero possibile.

Mi fai sentire al sicuro, ascoltata, capita. Mi fai sorridere anche nelle giornate più pesanti e riesci a rendere speciale perfino un momento qualunque. Senza accorgertene, mi hai insegnato che il vero amore non è fatto di promesse enormi, ma di presenza, rispetto, chiarezza e cura.

Forse è presto per qualcuno, ma per me il tempo conta meno di come una persona ti fa sentire. E tu, in così poco tempo, mi hai dato una tranquillità che non avevo mai conosciuto.

Grazie perché sei paziente con me. Grazie perché mi fai sentire vista. Grazie perché ogni giorno scegli di esserci e mi dimostri che l’amore non dovrebbe mai farmi dubitare di essere abbastanza.

Spero di riuscire a farti sentire anche solo una parte di tutto quello che tu fai sentire a me. Perché te lo meriti davvero.

E se c’è una cosa che voglio dirti più di tutte è questa: grazie per avermi fatto conoscere un amore che non si deve inseguire, ma che si vive. Un amore che mi fa sentire finalmente a casa.

Ti amo. E, se questo è solo l’inizio della nostra storia, non vedo l’ora di scoprire tutto quello che ci aspetta.

Con tutto il mio cuore. 🌟
        </div>
      </section>

      <p class="note">Suggerimento: sostituisci i file in /images con le tue foto mantenendo gli stessi nomi (image1.jpg, image2.jpg, ...)</p>
    `;
  }

  // Risposte al quiz (nessuna emoji che ride)
  window.quizAnswer = function(correct) {
    const choices = document.querySelectorAll('.choice');
    if (correct) {
      alert('❤️ Ovviamente lo sapevi! Hai indovinato.');
    } else {
      alert('Hmm, non è la risposta giusta questa volta — ma va bene così. 🌟');
    }
    choices.forEach((c, i) => c.classList.toggle('correct', i === 0 && correct));
  };

  // Mostra/nasconde la lettera
  window.showLetter = function() {
    const l = document.getElementById('letter');
    if (l) l.style.display = l.style.display === 'none' ? 'block' : 'none';
  };

  // Avvia qualche stella fin da subito e collega il pulsante start
  document.addEventListener('DOMContentLoaded', () => {
    createStars(22);
    const startBtn = document.getElementById('startBtn');
    if (startBtn) startBtn.addEventListener('click', start);
    // Se vuoi che inizi immediatamente, decommenta la riga seguente:
    // start();
  });
})();
