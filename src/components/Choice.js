import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/Choice.css';

class Choice extends Component {
  render() {

    return (
      <div className="choice">
        <div className="selectionContainer">
          <div className="appSelection">
            <img width="75" height="75" src="https://s3-us-west-2.amazonaws.com/dexcommisc/App+images/g6-app.png" alt="G6 App"/>
            <p>G6 Mobile App</p>
          </div>
        <Link to="/g5">
          <div className="appSelection">
            <img width="75" height="75" src="https://s3-us-west-2.amazonaws.com/dexcommisc/App+images/Mobile_Icon.png" alt="G5 App"/>
            <p>G5 Mobile App</p>
          </div>
        </Link>
        <Link to="/clarity">
          <div className="appSelection">
            <img width="75" height="75" src="https://s3-us-west-2.amazonaws.com/dexcommisc/App+images/clarity.jpg" alt="Clarity App"/>
            <p>Clarity App</p>
          </div>
        </Link>
        <Link to="/follow">
        <div className="appSelection">
          <img width="75" height="75" src="https://s3-us-west-2.amazonaws.com/dexcommisc/App+images/follow-app.png" alt="Follow App"/>
          <p>Follow App</p>
        </div>
      </Link>
        </div>
      </div>
    );

  }
}

export default Choice;
