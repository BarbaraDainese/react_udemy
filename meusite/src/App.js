import React from 'react';

const Equipe = (props) => {
    return (
        <div>
            <Sobre nome={props.nome} cargo={props.cargo}
                idade={props.idade}/>
            <Social fb={props.facebook}/>
            <hr/>
        </div>
    )
}

const Sobre = (props) =>{
    return(
        <div>
            <h2> Olá sou  a {props.nome}</h2>
            <h3>Cargo: {props.cargo}</h3>
            <h3>Idade: {props.idade}</h3>
        </div>
    );
}

const Social = (props) =>{
    return(
        <div>
            <a href={props.fb}> Facebook</a>
            <a> Instagram</a>
            <a> LinkedIn</a>
        </div>
    )
}

function App(){
    return (
        <div>
            <h1>Conheça nossa equipe:</h1>
            <Equipe nome="Barbara" cargo="Programadora" idade="35"
                facebook="https://google.com"/>
            <Equipe nome="Renan" cargo="Designer" idade="28"
                facebook="https://google.com"/>
            <Equipe nome="Guilherme" cargo="Backend" idade="34"
                facebook="https://google.com"/>
            
        </div>
    );
}

export default App;
