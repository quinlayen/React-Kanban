import React, { Component } from 'react';
import './App.css';
import { getCardsFromFakeXHR, addCardToFakeXHR } from './initialDatabase';
import Column from './components/column';
import NavBar from './components/task_bar'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
      in_queue_cards: [],
      in_progress_cards: [],
      completed_cards: []
    };
  }

  //Mounts card data from the database at initialization
  componentDidMount() {
    getCardsFromFakeXHR().then(cards => {
      const sortedColumns = this.sortColumns(cards);
      console.log(sortedColumns)
      this.setState( sortedColumns );
    });
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          <div className="row">
            <div className="card col-md">
              <div className="card-header">In Queue</div>
              <Column cards={this.state.in_queue_cards} />
            </div>
            <div className="card col-md">
              <div className="card-header">In Progress</div>
              <Column cards={this.state.in_progress_cards} />
            </div>
            <div className="card col-md">
              <div className="card-header">Completed</div>
              <Column cards={this.state.completed_cards} />
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
    const in_progress_cards =[];
    const completed_cards =[]
    let cardStatus = cards.map(cards => {
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
    }
  }
}

export default App;

//<Column cards={this.state.cards.filter( (item) =>item.status === 'In Queue')} />
