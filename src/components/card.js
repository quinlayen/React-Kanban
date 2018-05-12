import React, { Component } from 'react';


class Card extends Component {

    constructor(props) {
        super(props);

        this.state = {

            identifier: '4',
            title: 'Test Title',
            notes: '',
            priority: 'Very Freaking Important',
            status: 'Queue',
            created_by: 'Peter',
            assigned_to: 'Anyone Except Peter'
        }
    }


    render(){
        return (
            <div>
                <li className="list-group-item">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{this.state.title}</h5>
                            <p className="card-text">{this.state.notes}</p>
                            <p className="card-text">Priority: {this.state.priority}</p>
                            <p className="card-text">Created By: {this.state.created_by}</p>
                            <p className="card-text">Assigned To: {this.state.assigned_to}</p>
                            <a href="#" class="card-link">Edit</a>
                            <a href="#" class="card-link">Delete</a>
                        </div>

                    </div>

                </li>
           
            </div>
        );
    }
}
export default Card;