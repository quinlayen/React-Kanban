import React from 'react';
import Card from './card';
import './components.css';

const Column = props => {
  //console.log('props in column',props)
  const individualCards = props.cards.map(card => {
    return <Card onStatusChange={props.onStatusChange} key={card.id} {...card} />;
  });

  return (
    <div className="card">
      <ul className="list-group">{individualCards}</ul>
    </div>
  );
};
export default Column;
