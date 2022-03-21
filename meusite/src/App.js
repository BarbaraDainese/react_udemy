import React, {Component} from 'react';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: 'teste@teste.com',
            senha:'123456',
            sexo: 'Masculino'

        }

        this.trocaEmail = this.trocaEmail.bind(this);
        this.trocaSexo = this.trocaSexo.bind(this);

     

    }

    trocaEmail(event){
        let valorDigitado = event.target.value;

        this.setState({email:valorDigitado});
    }

    trocaSexo(event){
        let valorDigitado = event.target.value;
        this.setState({sexo: valorDigitado});
    }

    

    render(){
        return(
            <div>
                Email:
                <input type='email' name="email" value={this.state.email}
                onChange={this.trocaEmail}></input><br/>
                Senha:
                <input type='password' name="senha" value={this.state.senha}
                onChange={(e)=> this.setState({senha:e.target.value})}/><br/>
                Sexo:
                <select name="sexo" value={this.state.sexo} onChange={this.trocaSexo}>
                    <option value="masculino">Masculino</option>
                    <option value="Feminino">Feminino</option>
                </select>
            </div>
        )
    }
}

export default App;