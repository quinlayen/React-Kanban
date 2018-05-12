import React from 'react';
import Card from './card';

const Column = (props) =>{
    const individualCards = props.cards.map((card) => {
        return <Card key={card.id} {...card}/>
    })


return (
    <ul className="col-md-4 list-group">
    {individualCards}
    </ul>

)

}

export default Column;