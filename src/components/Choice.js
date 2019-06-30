import React, { Component } from 'react';
import { Link/*, Route*/ } from 'react-router-dom';
import '../style/Choice.css';

class Choice extends Component {
  render() {

    return (
      <div className="choice">
        <div className="selectionContainer">
          <Link to="/g6" role="button">
            <div className="appSelection">
              <img aria-hidden="true" width="75" height="75" src="./images/g6.png" alt="G6 App"/>
              <p>G6 Mobile App</p>
            </div>
          </Link>
          <Link to="/g5" role="button">
            <div className="appSelection">
              <img aria-hidden="true" width="75" height="75" src="./images/g5.png" alt="G5 App"/>
              <p>G5 Mobile App</p>
            </div>
          </Link>
          <Link to="/clarity" role="button">
            <div className="appSelection">
              <img aria-hidden="true" width="75" height="75" src="./images/clarity.png" alt="Clarity App"/>
              <p>Clarity App</p>
            </div>
          </Link>
          <Link to="/follow" role="button">
            <div className="appSelection">
              <img aria-hidden="true" width="75" height="75" src="./images/follow.png" alt="Follow App"/>
              <p>Follow App</p>
            </div>
          </Link>
        </div>

      </div>
    );

  }
}

export default Choice;
