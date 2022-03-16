import { render } from '@testing-library/react';
import React, {Component} from 'react';

class Equipe extends Component{
    render(){
        return(
            <><Sobre nome={this.props.nome} cargo={this.props.cargo} idade={this.props.idade} /><Social /><hr /></>
        );
    }
}

class Sobre extends Component{
    render(){
        return(
            <div>
                <h2>Olá! Sou o (a) {this.props.nome}</h2>
                <h3>Cargo: {this.props.cargo}</h3>
                <h3>Idade: {this.props.idade}</h3>
            </div>
        );
    }
}

const Social = () =>{
    return(
        <div>
        <a>Facebook </a>
        <a>LinkedIn </a>
        </div>
        );
}

function App(){
    return(
        <div>
            <h1>Conheça nossa equipe:</h1>
            <Equipe nome="Matheus" cargo="Programador" idade="30"/>
            <Equipe nome="Maria" cargo="Designer" idade="32"/>
            <Equipe nome="Julio" cargo="Frontend" idade="25"/>
        </div>
    );
}

export default App;