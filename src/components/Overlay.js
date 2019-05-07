import React from 'react';
import '../style/Overlay.css';

function Overlay() {
  return (
    <div className="overlay">
      <div id="landingMessage">
        <p>Please read carefully:</p>
        <p>This is NOT an official page mantained from Dexcom!</p>
        <button type="button" name="getInformed" id="getInformed"> Get Informed </button>
        <button type="button" name="agreeButton" id="agreeButton"> I Agree </button>
      </div>
      <div className="emptyOverlay"></div>
    </div>
  );
}

export default Overlay;
