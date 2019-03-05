import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Saludo from './Saludo';
import Despedida from './Despedida';
import Contador from './Contador';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      word:'Esperando...'
    }
  }

  componentWillMount(){
    console.log('componentWillMount');
  }

  componentDidMount(){
    console.log('componentDidMount');
    setTimeout(() => {
      this.setState({
        word:'Pasaron 3 segundos'
      })
    },3000);
  }

  render() { 
    console.log('render');
    return (
      <div className="App">
        <h1>Componenete app</h1>
        <p>{this.state.word}</p>
        <Saludo mensaje="Que onda"/>
        <Despedida/>
        <Contador/>
      </div>
    );
  }
}

export default App;
