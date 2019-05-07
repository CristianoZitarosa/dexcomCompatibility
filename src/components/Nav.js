import React from 'react';
import '../style/Nav.css';

function Nav() {
  return (
    <div className="btn-group">
      <button className="button btn-left"><i className="fas fa-home"></i> Home</button>
      <button className="button btn-right"><i className="fas fa-exclamation-circle"></i> About this page</button>
    </div>
  );
}

export default Nav;
