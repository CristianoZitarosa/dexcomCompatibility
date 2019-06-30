import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
import '../style/NoMatch.css';

class NoMatch extends Component {
  render() {

    return (

      <div id='nomatch'>
        <img id="emoji" width="150" height="150" src="./images/loudly-crying-face.png" alt="emoji"/>
        <h1>Page not found!</h1>
        <Link to="/">
          <button id='nomatchBtn' onClick={ this.props.storage }><i className="fas fa-backward pulse"></i> <strong>Back to Home</strong></button>
        </Link>
      </div>

    );

  }
}

export default NoMatch;
