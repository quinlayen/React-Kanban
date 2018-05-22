import React, { Component } from 'react';
import './App.css';
import { getCardsFromFakeXHR, addCardToFakeXHR } from './initialDatabase';
import Main from './components/main';
import Column from './components/column';
import NavBar from './components/navBar';
import Form from './components/newCardForm.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      in_queue_cards: [],
      in_progress_cards: [],
      completed_cards: [],
      selectedCard: null
    };

    this.onStatusChange = this.onStatusChange.bind(this);
    this.sortColumns = this.sortColumns.bind(this);
  }

  //Mounts card data from the database at initialization
  componentDidMount() {
    axios.get('http://localhost:8080')
    .then(cards=>{
      const sortedColumns=this.sortColumns(cards.data);
      this.setState(sortedColumns);
    })
    .catch(function (error){
      console.log(error);
    })
  }
 
  //These are additional CRUD operations

  addCard(cardInfo){
    //console.log('cardInfo', cardInfo)
    axios.post('http://localhost:8080/card/new', cardInfo)
    .then(card=>{
      console.log('new card', card)
    })
  }

  // addCard(){
  //   addCardToFakeXHR().then(({card}) =>{
  //     console.log('card added', card)
  //     this.setState({card})
  //   })
  // }
  //This function is passed down to the card and receives both the status change and the id.
  //It then reads the change and reasigns the card to the correct column
  onStatusChange(status, id) {
    const concatArray = this.state.in_queue_cards
      .concat(this.state.in_progress_cards)
      .concat(this.state.completed_cards);
    const filteredArray = concatArray.map(data => {
      if (data.id == id) {
        data.status = status;
      }
      return data;
    });
    const sortedColumns = this.sortColumns(filteredArray);
    this.setState(sortedColumns);
  }

  //Helper function to sort cards based on status.
  //This function is called in the componentDidMount getCards function

  sortColumns(cards) {
    const in_queue_cards = [];
    const in_progress_cards = [];
    const completed_cards = [];

    cards.forEach(cards => {
      if (cards.status === 'In Queue') {
        in_queue_cards.push(cards);
      } else if (cards.status === 'In Progress') {
        in_progress_cards.push(cards);
      } else {
        completed_cards.push(cards);
      }
    });

    return {
      in_queue_cards,
      in_progress_cards,
      completed_cards
    };
  }

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path='/' component={() => <Main in_queue_cards={this.state.in_queue_cards} in_progress_cards={this.state.in_progress_cards} completed_cards={this.state.completed_cards} onStatusChange={this.onStatusChange}/>}/>
          <Route path="/card/new" component={()=> <Form addCard = {this.addCard}/>} />
        </div>
      </Router>
    );
  }
}

export default App;
