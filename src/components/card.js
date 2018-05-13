import React from 'react';


const Card = ({title, notes, priority, created_by, assigned_to}) => {
    console.log
    
        return (
            <div>
                <li className="list-group-item">
                    <div className="card bg-light mb-3">
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{notes}</p>
                            <p className="card-text">Priority: {priority}</p>
                            <p className="card-text">Created By: {created_by}</p>
                            <p className="card-text">Assigned To: {assigned_to}</p>
                            <a href="#" className="card-link">Edit</a>
                            <a href="#" className="card-link">Delete</a>
                        </div>

                    </div>

                </li>
           
            </div>
        );
    }

export default Card;