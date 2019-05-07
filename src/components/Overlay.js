import React from 'react';
import '../style/Overlay.css';

function Overlay() {
  return (
    <div className="overlay">
      <div id="landingMessage">
        <p>Please read carefully:</p>
        <p>This is NOT an official page mantained from Dexcom!</p>
        <button type="button" name="getInformed" id="getInformed"><i className="fas fa-info-circle pulse"></i> Get Informed </button>
        <button type="button" name="agreeButton" id="agreeButton"><i className="fas fa-thumbs-up pulse"></i> I Agree </button>
      </div>
      <div className="emptyOverlay"></div>
    </div>
  );
}

export default Overlay;
