document.getElementById('new0').style.display = 'block';

// Variáveis
var btns = document.querySelectorAll('.listaDeArtigos-slider-item');
var noticias = document.querySelectorAll('.listaDeArtigos-item');

var indicadorSlideAtual = document.createElement('span');
indicadorSlideAtual.classList.add('escondeVisualmente');
indicadorSlideAtual.id = 'escondeVisualmente';
indicadorSlideAtual.textContent = '(Slide atual)';

// Percorre todos os botões controladores
btns.forEach(function(btn) {
  btn.addEventListener('click', function () {
    
    // Oculta todas as notícias
    noticias.forEach(function(noticia) {
      noticia.style.display = 'none';
    });

    // Exibe a notícia correspondente ao botão clicado
    var slideId = this.getAttribute('data-sliderItem');
    var noticiaCorrespondente = document.querySelector(`.listaDeArtigos-item[data-noticia="${slideId}"]`);
    if (noticiaCorrespondente) {
      noticiaCorrespondente.style.display = 'block';
    }

    // Remove indicador anterior, se existir
    var indicadorAnterior = document.getElementById('escondeVisualmente');
    if (indicadorAnterior) {
      indicadorAnterior.remove();
    }

    // Adiciona o indicador de slide atual
    this.appendChild(indicadorSlideAtual);

    // Atualiza classes de estilo
    btns.forEach(function(btnRemoveClass) {
      btnRemoveClass.classList.remove('listaDeArtigos-slider-item--ativo');
    });

    this.classList.add('listaDeArtigos-slider-item--ativo');
  });
});
