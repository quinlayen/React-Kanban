import React, { Component } from 'react';

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <div class="container">
          <form>
            <div className="form-row">
              <div className="col-lg-8">
                <div className="form-group">
                  <label for="title">Title</label>
                  <input type="text" className="form-control" id="title" required />
                </div>
              </div>
              <div className="col-lg-1" />
              <div className="col-lg-3">
                <div className="form-group">
                  <label for="status">Status</label>
                  <select class="custom-select" id="status">
                    <option selected>Choose...</option>
                    <option value="In Queue">In Queue</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
              </div>

               
            </div>
          </form>
        </div>
      </div>
    );
  }
}
