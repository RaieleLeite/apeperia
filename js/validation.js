var divs = document.querySelectorAll('.contatoCampo');


divs.forEach(function(input, correct){
    if(input != correct){
        input.parentNode.classList.add('contatoCampo--erro');
        campoEmail.classList.add('contatoCampo--validouErro');   
    }else{
        input.parentNode.classList.add('contatoCampo--sucesso');
        campoEmail.classList.add('contatoCampo--validouFoi');      
    }    
})
    
