import React, {Component} from 'react';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div>
                Email:
                <input type='email' name="email" value="teste@teste.com"></input><br/>
                Senha:
                <input type='password' name="senha" value="1234"></input>
            </div>
        )
    }
}

export default App;