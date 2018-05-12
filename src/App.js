import React, { Component } from 'react';
// import { Navbar, Button, Form } from 'react-bootstrap';
import './App.css';
import Card from './components/card';
import {getCardsFromFakeXHR, addCardToFakeXHR} from './initialDatabase';
import Column from './components/column';

class App extends Component {

constructor(props){
  super(props);

  this.state = {
    cards: [] // set cards as an array so that they can be mapped at render
  }
};

componentDidMount(){
  getCardsFromFakeXHR()
  .then(cards => {
    this.setState({cards})
    console.log('cards',cards)
  })
}



  render() {
    return (
      <div>
    
        <Column cards={this.state.cards} />
      </div>
    );
  }
}

export default App;
