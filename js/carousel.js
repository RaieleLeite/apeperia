document.getElementById('new0').style.display = 'block';

//Variáveis
var btns = document.querySelectorAll('.listaDeArtigos-slider-item');
var new0 = document.getElementById('new0');
var new1 = document.getElementById('new1');
var new2 = document.getElementById('new2');

var indicadorSlideAtual = document.createElement('span');
indicadorSlideAtual.classList.add('escondeVisualmente');
indicadorSlideAtual.id = 'escondeVisualmente';
indicadorSlideAtual.textContent = '(Slide atual)';


// Percorre todos os botoes controladores
btns.forEach(function(btn) {
  btn.addEventListener('click', function() {


    if(this.getAttribute('data-sliderItem') == '0'){
      new0.style.display = 'block';
      new1.style.display = 'none';
      new2.style.display = 'none';
    } else if(this.getAttribute('data-sliderItem') == '1'){
      new0.style.display = 'none';
      new1.style.display = 'block';
      new2.style.display = 'none';
    } else {
      new0.style.display = 'none';
      new1.style.display = 'none';
      new2.style.display = 'block';
    }

    document.querySelector('listaDeArtigos-slider-item.escondeVisualmente').remove();
    this.append(indicadorSlideAtual);

    // Remove classe 'ativo' dos outros botoes
    btns.forEach(function(btnRemoveClass) {
      btnRemoveClass.classList.remove('listaDeArtigos-slider-item--ativo')
    })

    this.classList.add('listaDeArtigos-slider-item--ativo')
  })
})