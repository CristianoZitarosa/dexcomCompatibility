import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/Overlay.css';

class Overlay extends Component {
  render() {

    return (
      <div className="overlay">
        <div id="landingMessage">
          <p>Please read carefully:</p>
          <p>This is NOT an official page maintained by Dexcom!</p>
          <Link to="/test">
          <button type="button" name="getInformed" id="getInformed" onClick={ this.props.closeOverlay }>
            <i className="fas fa-info-circle pulse"></i> Get Informed
          </button>
        </Link>
        <button type="button" name="agreeButton" id="agreeButton" onClick={ this.props.closeOverlay }>
          <i className="fas fa-thumbs-up pulse"></i> I Agree
        </button>
      </div>
      <div className="emptyOverlay"></div>
    </div>
    );

  }
}

export default Overlay;
