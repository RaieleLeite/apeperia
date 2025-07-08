// Variáveis
var mainContent = document.getElementById('conteudoPrincipal');
var btnAbreDialog = document.getElementById('abreDialog');
var dialog = document.getElementById('dialogNewsletter');
var dialogOverlay = document.querySelector('.dialogNewsletter-overlay');

btnAbreDialog.style.display = 'block';

// Quando abrir a dialog...
function abrirDialog(){
  dialog.showModal();
  mainContent.setAttribute("inert", ""); 
}

// Quando fechar a dialog...
function fecharDialog() {
  dialog.close();    
}

dialogOverlay.addEventListener('click', fecharDialog);

dialog.addEventListener('close', () => {
  mainContent.removeAttribute("inert");
  btnAbreDialog.focus();
});

document.addEventListener('keyup', function(evento){
  if(dialog.open && evento.key === "Escape"){
    fecharDialog();
  }
});
