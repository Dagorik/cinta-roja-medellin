import React, {Component} from 'react';

class Despedida extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            word:'Bye',
            time:'Mañana'
        }
    }

    render(){
        return(
            <h2>{this.state.word} desde Componenete 
                despedidas time: {this.state.time}</h2>
        );
    }
    
}

export default Despedida