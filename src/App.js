import React, { Component } from 'react';
import './App.css';
import { getCardsFromFakeXHR, addCardToFakeXHR } from './initialDatabase';
import Column from './components/column';
import NavBar from './components/task_bar';
//import Card from './components/card';

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
  }

  //Mounts card data from the database at initialization
  componentDidMount() {
    getCardsFromFakeXHR().then(cards => {
      const sortedColumns = this.sortColumns(cards);
      this.setState(sortedColumns);
    });
  }
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
      return data
    });
    const sortedColumns = this.sortColumns(filteredArray)
    this.setState(sortedColumns)
    //console.log(filteredArray);
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          <div className="row">
            <div className="card col-md">
              <div className="card-header">In Queue</div>
              <Column cards={this.state.in_queue_cards} onStatusChange={this.onStatusChange} />
            </div>
            <div className="card col-md">
              <div className="card-header">In Progress</div>
              <Column cards={this.state.in_progress_cards} onStatusChange={this.onStatusChange} />
            </div>
            <div className="card col-md">
              <div className="card-header">Completed</div>
              <Column cards={this.state.completed_cards} onStatusChange={this.onStatusChange} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  //Helper function to sort cards based on status.
  //This function is called in the componentDidMount getCards function
 

  sortColumns(cards) {
    const in_queue_cards = [];
    const in_progress_cards = [];
    const completed_cards = [];

   
    
      cards.forEach(cards =>{
      if (cards.status === 'In Queue') {
        in_queue_cards.push(cards);
      } else if (cards.status === 'In Progress') {
        in_progress_cards.push(cards);
      } else {
        completed_cards.push(cards);
      }
    })
  
    return {
      in_queue_cards,
      in_progress_cards,
      completed_cards
    };
  }
}

export default App;


