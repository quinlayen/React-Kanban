import React, { Component } from 'react';

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: null,
      status: null,
      notes: null,
      assigned_to: null,
      importance: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.addCard(this.state)
  }
  
  handleChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    }, ()=>{
      console.log('new card added')
    })
  }


  render() {
    return (
      <div>
        <div className="container mt-3">
          <div className="row">
            <div className="col-lg-12">
              <h5>Add a New Card</h5>
              <hr />
              <form onSubmit={this.handleSubmit}> 
                <div className="row">
                  <div className="col-lg-8">
                    <div className="form-group">
                      <label for="title">Title</label>
                      <input onChange={this.handleChange} type="text" className="form-control" name="title" id="title" required />
                    </div>
                  </div>
                  <div className="col-lg-1" />
                  <div className="col-lg-3">
                    <div className="form-group">
                      <label for="status">Status</label>
                      <select onChange={this.handleChange} className="custom-select" name="status" id="status" required>
                        <option selected>Choose...</option>
                        <option value="In Queue">In Queue</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label for="notes">Notes</label>
                  <input onChange={this.handleChange} type="text" className="form-control" name="notes" id="notes" required />
                </div>
                <div className="row">
                  <div className="col-lg-8">
                    <div className="form-group">
                      <label for="assigned_to">Assigned To</label>
                      <input onChange={this.handleChange} type="text" className="form-control" id="assigned_to" required />
                    </div>
                  </div>
                  <div className="col-lg-1" />
                  <div className="col-lg-3">
                    <div className="form-group">
                      <label for="importance">Importance</label>
                      <select onChange={this.handleChange} className="custom-select" name="importance" id="importance">
                        <option selected>Choose...</option>
                        <option value="In Queue">Not So Important</option>
                        <option value="In Progress">Pretty Important</option>
                        <option value="Completed">Very Freaking Important</option>
                      </select>
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">Create</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
