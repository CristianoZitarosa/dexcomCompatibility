import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
import '../style/Nav.css';

class Nav extends Component {
  render() {

    return (
      <div className="btn-group">
        <Link to="/">
          <button className="button btn-left">
            <i className="fas fa-home"></i> Home
          </button>
        </Link>
        <Link to="/about">
          <button className="button btn-right"><i className="fas fa-info-circle"></i> About this page</button>
        </Link>
      </div>
    );

  }
}

export default Nav;
