import React, {Component} from 'react';

class Contador extends Component{

    constructor(props){
        super(props);
        this.state = {
            number:0
        }
    }

    retornaElNumero = () => {
        return <p>{this.state.number}</p>
    }

    onClickHandle = (event) => {        
        const newNumber =  event.target.id === 'suma' 
            ? this.state.number + 1 
            : this.state.number - 1
        
        this.setState({
            number:newNumber
        });
    }

    render(){
        return(
            <div className="Contador">
                <h1>El contador: </h1> 
                {this.retornaElNumero()}
                <button id="suma" onClick={this.onClickHandle}>Sumar</button>
                <button id="resta" onClick={this.onClickHandle}>Resta</button>
            </div>
        )
    }

}

export default Contador;