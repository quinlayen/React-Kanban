import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
//import App from '../App'

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
        dropdownOpen: false,
        status: ''
    };
    this.toggle = this.toggle.bind(this);
    this.newStatus = this.newStatus.bind(this);
    console.log('props in Card', props)
    
  }

  newStatus(event){
      console.log('props',this.props.changeStatus)
        //this.props.changeStatus(event.currentTarget.textContent)
  }

  toggle() {
      this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
      }));
  }


  render() {
    let pStyles = {
      fontSize: 14,
      margin: 0
    };
    const { title, notes, priority, created_by, assigned_to, changeStatus } = this.props;

    return (
      <div>
        <li className="list-group-item">
          <div className="card bg-light mb-3" onClick={this.select}>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-subtitle mb-2 text-muted">{notes}</p>
              <p style={pStyles} className="card-text">
                Priority: {priority}
              </p>
              <p style={pStyles} className="card-text">
                Created By: {created_by}
              </p>
              <p style={pStyles} className="card-text">
                Assigned To: {assigned_to}
              </p>

              <a href="#" className="card-link">
                Edit
              </a>
              <a href="#" className="card-link">
                Delete
              </a>
              <Dropdown isOpen={this.state.dropdownOpen} size="sm" toggle={this.toggle}>
              <DropdownToggle caret>
              {this.state.dropdownValue}
              Change Status
              </DropdownToggle>
              <DropdownMenu>
                  <DropdownItem><div onClick={this.newStatus}>In Queue</div></DropdownItem>
                  <DropdownItem><div onClick={this.newStatus}>In Progress</div></DropdownItem>
                  <DropdownItem><div onClick={this.newStatus}>Completed</div></DropdownItem>  
              </DropdownMenu>
              </Dropdown>
            </div>
          </div>
        </li>
      </div>
    );
  }
}
export default Card;
