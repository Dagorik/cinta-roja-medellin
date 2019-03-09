import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import RegisterAuthor from './components/RegisterAuthor';
import {BrowserRouter,Route} from 'react-router-dom';
import ReadAuthor from './components/ReadAuthor';

class App extends Component {
  render(){
    return(
      <BrowserRouter>
        <div>
          <Navbar/>
          <main>
            <Route exact path='/' component={Home} />
            <Route exact path='/register' component={RegisterAuthor} />
            <Route exact path='/author/:uid' component={ReadAuthor} />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
