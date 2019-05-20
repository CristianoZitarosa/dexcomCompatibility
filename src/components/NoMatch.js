import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
import '../style/NoMatch.css';

class NoMatch extends Component {
  render() {

    return (

      <div id='nomatch'>
        <img width="150" height="150" src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/facebook/65/loudly-crying-face_1f62d.png' alt="emoji"/>
        <h1>Page not found!</h1>
        <Link to="/">
          <button id='nomatchBtn' onClick={ this.props.storage }><i className="fas fa-backward pulse"></i> <strong>Back to Home</strong></button>
        </Link>
      </div>

    );

  }
}

export default NoMatch;
