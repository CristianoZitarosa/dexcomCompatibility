import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Overlay.css';

function Overlay() {

  function closeOverlay() {
    document.querySelector('.overlay').style.display = 'none';
  }

  return (
    <div className="overlay">
      <div id="landingMessage">
        <p>Please read carefully:</p>
        <p>This is NOT an official page mantained from Dexcom!</p>
        <Link to="/test">
          <button type="button" name="getInformed" id="getInformed">
            <i className="fas fa-info-circle pulse"></i> Get Informed
          </button>
        </Link>
        <button type="button" name="agreeButton" id="agreeButton" onClick={closeOverlay}>
          <i className="fas fa-thumbs-up pulse"></i> I Agree
        </button>
      </div>
      <div className="emptyOverlay"></div>
    </div>
  );
}

export default Overlay;
