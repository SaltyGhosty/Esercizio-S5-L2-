const overlay = document.querySelector('#overlay-contatti');
const apriContatti = document.querySelector('#apri-contatti');
const chiudiContatti = document.querySelector('#chiudi-contatti');

apriContatti.addEventListener('click', () => {
  overlay.removeAttribute('hidden');
  document.body.style.overflow = 'hidden';
});

chiudiContatti.addEventListener('click', () => {
  overlay.setAttribute('hidden', '');
  document.body.style.overflow = '';
});

overlay.addEventListener('click', (event) => {
  if (event.target === overlay) {
    overlay.setAttribute('hidden', '');
    document.body.style.overflow = '';
  }
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    overlay.setAttribute("hidden", "");
    document.body.style.overflow = ""; 
  }
});


const formContatti = document.querySelector('#overlay-contatti form');
formContatti.addEventListener('submit', (event) => {
  event.preventDefault();
  const messaggioSuccesso = `
    <div style="text-align: center; padding: 20px;">
      <h2 style="color: hsl(220, 60%, 30%); text-align: center;">Grazie!</h2>
      <p>Sarai contattato al più presto.</p>
      <button type="button" id="chiudi-successo" style="margin-top: 20px;">Chiudi</button>
    </div>
  `;
   formContatti.innerHTML = messaggioSuccesso;
  document.querySelector('#chiudi-successo').addEventListener('click', () => {
    overlay.setAttribute('hidden', '');
    document.body.style.overflow = '';
    
   
  });
});