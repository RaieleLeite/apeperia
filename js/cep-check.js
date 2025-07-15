var campoCep = document.querySelector('#cep');

campoCep.oninvalid = function(){
    this.setCustomValidity('');

    if(!this.validity.valid){
        this.setCustomValidity('Verifique novamente o seu CEP!');
        this.parentNode.classList.add('contatoCampo--erro');
    }
}
