import React from 'react';
import '../style/Choice.css';
import Overlay from './Overlay.js';

function Choice() {
  return (
    <div className="choice">
      <Overlay />
      <p className="selectionText">
        Select an App:
      </p>
      <div className="selectionContainer">
        <div className="appSelection">
          <img width="75" height="75" src="https://s3-us-west-2.amazonaws.com/dexcommisc/App+images/g6-app.png" alt="G6 App"/>
          <p>G6 Mobile App</p>
        </div>
        <div className="appSelection">
          <img width="75" height="75" src="https://s3-us-west-2.amazonaws.com/dexcommisc/App+images/Mobile_Icon.png" alt="G5 App"/>
          <p>G5 Mobile App</p>
        </div>
        <div className="appSelection">
          <img width="75" height="75" src="https://s3-us-west-2.amazonaws.com/dexcommisc/App+images/clarity.jpg" alt="Clarity App"/>
          <p>Clarity App</p>
        </div>
        <div className="appSelection">
          <img width="75" height="75" src="https://s3-us-west-2.amazonaws.com/dexcommisc/App+images/follow-app.png" alt="Follow App"/>
          <p>Follow App</p>
        </div>
      </div>
    </div>
  );
}

export default Choice;
