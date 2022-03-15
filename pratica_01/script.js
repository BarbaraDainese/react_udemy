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


//local storage

var nome4 = '';
if (typeof localStorage.nome4 == 'undefined'){
    localStorage.nome4 = prompt('Digite seu nome: ');
}

nome4 = localStorage.nome3;

document.getElementById('nome4').innerHTML = nome4;

//Spread operator

function cadastroPessoa(info){
    let novosDados={
        ...info,
        cargo: 'Programadora',
        status: 1,
        codigo: '234567'
    };
    return novosDados;
}

console.log(cadastroPessoa({nome:'Barbara', sobrenome:'Dainese', anoInicio: 2021}));


function cadastrar(usuarios, ...novosUsuarios){
    let totalUsuarios=[
        ...usuarios,
        ...novosUsuarios,
        ];
    return console.log(totalUsuarios);

}

let usuarios = ['mateus', 'lucas'];

let novosUsuarios = cadastrar(usuarios, 'joão', 'maria');

//manipulando arrays

const lista = [1,2,3,4,5,6];
const novaLista = lista.map(function(item, index){
    return item + index;
});

console.log(novaLista);

const soma = lista.reduce(function(total, proximo){
    return total + proximo;
});

console.log(soma);

const find = lista.find(function(item){
    return item === 66;
});
console.log(find);

//função anônima

function adicionar(...numeros){
    let total = numeros.reduce((total, proximo)=>total+proximo);
    console.log(total);
}

adicionar(1,2,3,4,5,6);







