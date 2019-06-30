import React, { Component } from 'react';
import { Link/*, Route*/ } from 'react-router-dom';
import '../style/Choice.css';
// import G6app from './Apps/G6app.js';
// import G5app from './Apps/G5app.js';
// import Clarity from './Apps/Clarity.js';
// import Follow from './Apps/Follow.js';

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

        {/* <Route path="/g6" component={ G6app } />
        <Route path="/g5" component={ G5app } />
        <Route path="/clarity" component={ Clarity } />
        <Route path="/follow" component={ Follow } /> */}

      </div>
    );

  }
}

export default Choice;
