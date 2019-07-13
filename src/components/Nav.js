import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/Nav.css';
import languages from '../languages/languages.json';
import ARIA from '../languages/ARIA.json';

class Nav extends Component {

  render() {
    /**
    * Semplificazioni codice
    **/
    const currentLang = languages[this.props.id];
    const { aboutBtn } = currentLang;
    const currentAria = ARIA[this.props.id];
    const { homeLabel, infoLabel, selectLabel } = currentAria;

    return (
      <header>

        <nav className="nav-group">

          <Link id="home" to="/" aria-label= { homeLabel }> {/* bottone home */}
            <button aria-hidden="true" tabIndex="-1" className="button btn-left">
              <i className="fas fa-home"></i> Home
            </button>
          </Link>

          <Link id="about" to="/about" aria-label= { infoLabel }>{/* bottone about */}
            <button aria-hidden="true" tabIndex="-1" className="button infoButton"><i className="fas fa-info-circle"></i> { aboutBtn }</button>
          </Link>

          <button aria-label={ selectLabel } className="button btn-right" onClick={ () => {this.props.modalDisplay(1)} }><i className="fas fa-globe"></i> { languages[this.props.id].lang } <i className="fas fa-chevron-down"></i></button>

        </nav>

      </header>
    );

  }
}

export default Nav;
