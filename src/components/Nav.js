import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/Nav.css';
import languages from '../languages/languages.json';
import ARIA from '../languages/ARIA.json';

class Nav extends Component {
/**
* Correlato alla visibilità del menu.
* Uso lo stato per switchare il focus nella seconda parte della
*   funzione openMenu.
**/
  state = { menuVisible: false }

/**
* Mostra nasconde il Nav.
* A seconda dello stato setta il focus su home o sul tastino menu.
**/
  openMenu = () => {
    document.querySelector('.nav-group').classList.toggle('displayFlex');
    if (this.state.menuVisible === true) {
      document.getElementById('menu').focus();
      this.setState({ menuVisible: false });
    } else if (this.state.menuVisible === false) {
      document.getElementById('home').focus();
      this.setState({ menuVisible: true });
    }
  }

  render() {
    /**
    * Semplificazioni codice
    **/
    const currentLang = languages[this.props.id];
    const { aboutBtn } = currentLang;
    const currentAria = ARIA[this.props.id];
    const { homeLabel, infoLabel, selectLabel, hamburgerLabel } = currentAria;

    return (
      <header>

        <div id="hamburgerContainer" role="button" tabIndex="0" aria-label={ hamburgerLabel } onClick={ this.openMenu }>
          <i tabIndex="-1" className="fas fa-bars" id="menu" ></i>
        </div>

        <nav className="nav-group">

          <Link id="home" to="/" aria-label= { homeLabel }> {/* bottone home */}
            <button aria-hidden="true" tabIndex="-1" className="button btn-left">
              <i className="fas fa-home"></i> Home
            </button>
          </Link>

          <Link id="about" to="/about" aria-label= { infoLabel }>{/* bottone about */}
            <button aria-hidden="true" tabIndex="-1" className="button infoButton"><i className="fas fa-info-circle"></i> { aboutBtn }</button>
          </Link>

          <button aria-label={ selectLabel } className="button btn-right" onClick={ () => {this.props.modalDisplay(1, 'modal')} }><i className="fas fa-globe"></i> { languages[this.props.id].lang } <i className="fas fa-chevron-down"></i></button>

        </nav>

      </header>
    );

  }
}

export default Nav;
