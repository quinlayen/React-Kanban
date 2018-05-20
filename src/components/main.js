import React from 'react';
import Column from './column';

const Main = props => {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="card col-md">
          <div className="card-header">In Queue</div>
          <Column cards={props.in_queue_cards} onStatusChange={props.onStatusChange} />
        </div>
        <div className="card col-md">
          <div className="card-header">In Progress</div>
          <Column cards={props.in_progress_cards} onStatusChange={props.onStatusChange} />
        </div>
        <div className="card col-md">
          <div className="card-header">Completed</div>
          <Column cards={props.completed_cards} onStatusChange={props.onStatusChange} />
        </div>
      </div>
    </div>
  );
};




export default Main;