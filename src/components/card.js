import React, {Component} from 'react';


class Card extends Component{
    constructor(props){
        super(props);

        this.setState = {
          
        }  
        
    }

    render(){
        let pStyles={
            fontSize: 14,
            margin: 0
        }
        const {title, notes, priority, created_by, assigned_to} = this.props;

  
        return (
            <div>
                <li className="list-group-item">
                    <div className="card bg-light mb-3">
                        <div className="card-body" >
                            <h5 className="card-title">{title}</h5>
                            <p className="card-subtitle mb-2 text-muted">{notes}</p>
                            <p style={pStyles} className="card-text">Priority: {priority}</p>
                            <p style={pStyles} className="card-text">Created By: {created_by}</p>
                            <p style={pStyles} className="card-text">Assigned To: {assigned_to}</p>
                            <a href="#" className="card-link">Edit</a>
                            <a href="#" className="card-link">Delete</a>
                        </div>

                    </div>

                </li>
           
            </div>
        );
    
    }
}
export default Card;