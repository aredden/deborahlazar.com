import React, { Component } from 'react';
import 'react-bootstrap';

class Events extends Component {
  constructor(props) {
      super(props);
      this.state = {artEvents: [
        "art event number 1",
        "art event numbne2 ",
        "event number # OMETGG"
      ]}
}


  render() {
    return (
      <div>
            <div className="col-md-2">
            </div>
                  <div className="col-md-8">
                        <table className="table">
                          <ul className="list-group">
                          <li className="list-group-item">{this.state.artEvents[0]}</li>
                          <li className="list-group-item">{this.state.artEvents[1]}</li>
                          <li className="list-group-item">{this.state.artEvents[2]}</li>
                          <li className="list-group-item">Porta ac consectetur ac</li>
                          <li className="list-group-item">Vestibulum at eros</li>
                          </ul>
                        </table>
                    </div>
              <div className="col-md-2">
              </div>

    </div>

    )
  }
}

export default Events
