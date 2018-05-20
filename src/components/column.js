import React from 'react';
import Card from './card';


const Column = props => {
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
