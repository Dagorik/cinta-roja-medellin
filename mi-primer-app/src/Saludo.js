import React, {Component} from 'react';

class Saludo extends Component{
    render(){
        // console.log(this.props);
        return (
            <div className="Saludo">
                <h1>{this.props.mensaje} desde componente Saludo</h1>
            </div>
        );
    }

}

export default Saludo;