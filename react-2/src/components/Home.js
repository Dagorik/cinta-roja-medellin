import React, {Component} from 'react';
import Card from './Card';
import axios from 'axios';

class Home extends Component{
  constructor(props){
    super(props);
    this.state = {
        lasCards:[<Card/>,<Card/>,<Card/>,<Card/>,<Card/>,<Card/>,<Card/>,<Card/>,<Card/>,<Card/>,<Card/>,<Card/>,<Card/>,<Card/>,<Card/>,<Card/>,<Card/>,<Card/>,<Card/>,<Card/>,<Card/>,<Card/>,<Card/>,<Card/>,<Card/>,<Card/>,<Card/>],
        cardAuthors:[]
    }
  }

  componentDidMount(){
    axios.get('https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/')
    .then((result) => {
      this.setState({
          cardAuthors:result.data
      });
    }).catch((err) => {
      alert('Error')
    });
  }

  renderCards =  () => {
    return this.state.cardAuthors.length === 0
      ? <h1>Cargando....</h1>
      : this.state.cardAuthors
          .map(author => <Card id={author.id} name={author.name}
                              apellido={author.last_name}/>)      
  }

  render(){
    console.log(this.state.cardAuthors);
    return(
        <div className="Home row col-12">
            {this.renderCards()}
        </div>
    )
  }
};

  export default Home;
