import React, {Component} from 'react';
import axios from 'axios';

class RegisterAuthor extends Component{

    constructor(props){
        super(props);
        this.state = {
            name:"",
            last_name:"",
            biography:"",
            age:"",
            gender:"F",
            nacionalidad:'MX'
        }
    }

    onInputChange = (e) => {
        const {id,value} = e.target
        this.setState({
            [id]:value
        })
    }

    onBtnSubmit = (e) => {
        e.preventDefault();
        const URL = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/'
        axios.post(URL,this.state)
            .then((result) => {
                alert(`Usuario guardado con el id: ${result.data.id}`)
                this.props.history.push('/')
            }).catch((err) => {
                alert(err)
            });
    }

    render(){
        return(
            <div className="RegisterAuthor col p-3">
                <form className="col-2" onSubmit={this.onBtnSubmit}>
                    <label>Nombre: </label>
                    <input type="text" id="name"
                        onChange={this.onInputChange}
                        value={this.state.name}
                    />
                    
                    <label>Apellido: </label>
                    <input type="text" id="last_name"
                        onChange={this.onInputChange}
                        value={this.state.last_name}
                    />
                    
                    <label>Biografia: </label>
                    <input type="text" id="biography"
                        onChange={this.onInputChange}
                        value={this.state.biography}
                    />
                    
                    <label>Genero</label>
                    <select className="form-control" onChange={this.onInputChange} 
                        id="gender" value={this.state.gender}>
                        <option>F</option>
                        <option>M</option>
                    </select>

                    <label>Edad: </label>
                    <input type="number" id="age"
                        onChange={this.onInputChange}
                        value={this.state.age}
                    />
                    <button type="submit" className="btn btn-success mt-4">Guardar</button>
                </form>
            </div>
        );
    }
}
export default RegisterAuthor;