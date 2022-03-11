//função entrar

function enter(){
    var area = document.getElementById('area');
    var texto = prompt('digite seu nome:');

    if(texto == '' || texto == null){
        alert('Digite seu nome.');
        area.innerHTML = 'Bem vindo...';

    } else{
        area.innerHTML = 'Bem vindo ' + texto;
    }
}

function enter2(nome){
    var area = document.getElementById('area2');
    var texto = prompt('digite seu sobrenome:');
    area.innerHTML = nome + " " + texto;

}


