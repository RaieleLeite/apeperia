// mail-check-config.js
const domains = ['gmail.com', 'aol.com', 'outlook.com'];
const secondLevelDomains = ['hotmail'];            
const topLevelDomains = ['com', 'net', 'org', 'br'];

const campoEmail = document.querySelector('#email');
const sugestao    = document.getElementById('sugestao');

campoEmail.addEventListener('blur', () => {
  Mailcheck.run({
    email: campoEmail.value,
    domains,
    secondLevelDomains,
    topLevelDomains,

    // Sugestão encontrada
    suggested ({ full }) {
      sugestao.style.display = 'inline-block';
      sugestao.textContent = `Você quis dizer: ${full}?`;
      sugestao.dataset.full = full;     
    },

    empty () {
      sugestao.style.display = 'none';
      sugestao.textContent   = '';
      delete sugestao.dataset.full;
    }
  });
});

// Clique na sugestão → preenche input automaticamente
sugestao.addEventListener('click', e => {
  if (e.target.dataset.full) {
    campoEmail.value = e.target.dataset.full;
    sugestao.style.display = 'none';
  }
});
