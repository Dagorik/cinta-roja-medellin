import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class Card extends Component{

    render(){
        return(
            <div className="card mt-3 col-4">
                <img src="https://cdn.heraldodemexico.com.mx/wp-content/uploads/2018/11/gato_surrealista.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <p className="card-text">{this.props.id}, {this.props.name} {this.props.apellido}</p>
                    <Link to={`/author/${this.props.id}`}>Vamonos</Link>
                </div>
            </div>
        );
    }
}

export default Card;