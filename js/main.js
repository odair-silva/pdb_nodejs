document.querySelector('#add-endereco').addEventListener('click', function(){
    var divContato = document.querySelector('#contato');
    divContato.innerHTML = divContato.innerHTML +(document.querySelector('#template-novo-endereco').innerHTML);
    //todo: replace do {{name}} no template com o nome da sua escolha
});
var especialidades = document.querySelectorAll('.especialidade input');
for(var i =0;i<especialidades.length; i++){
    especialidades[i].addEventListener('click',function(){
        var checkboxes = this.parentNode.parentNode.childNodes;
        if(this.checked){
            for(var j =0; j<checkboxes.length; j++){
                if(checkboxes[j].classList && checkboxes[j].classList.contains('patologia')){
                    checkboxes[j].classList.remove('hidden');
                }   
            }
        }else{
            for(var j =0; j<checkboxes.length; j++){
                if(checkboxes[j].classList && checkboxes[j].classList.contains('patologia')){
                    checkboxes[j].classList.add('hidden');
                }   
            }
        }
    });
}
document.querySelector('#contato').addEventListener('click',function (event) {
    if(event.target.id == 'remover-endereco'){
        event.target.parentNode.parentNode.remove();
    }
});
