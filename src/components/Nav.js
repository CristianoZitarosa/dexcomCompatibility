import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Nav.css';

function Nav() {
  return (
    <div className="btn-group">
      <Link to="/">
        <button className="button btn-left"><i className="fas fa-home"></i> Home</button>
      </Link>
      <Link to="/test">
        <button className="button btn-right"><i className="fas fa-exclamation-circle"></i> About this page</button>
      </Link>
    </div>
  );
}

export default Nav;
