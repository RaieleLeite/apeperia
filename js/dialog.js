// Variáveis
var mainContent = document.querySelector('.conteudoPrincipal');
var btnAbreDialog = document.getElementById('abreDialog');
var dialog = document.getElementById('dialogNewsletter');

btnAbreDialog.style.display = 'block';

// Quando abrir a dialog...
function abrirDialog(){
  dialog.showModal();
  mainContent.setAttribute("inert", ""); 
}

// Quando fechar a dialog...
function fecharDialog() {
  dialog.close();    
  mainContent.removeAttribute("inert"); 
}


