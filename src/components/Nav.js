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
    const selectLang = this.props.selectLang;
    const currentLang = languages[this.props.id];
    const { aboutBtn } = currentLang;
    const currentAria = ARIA[this.props.id];
    const { homeLabel, infoLabel, selectLabel } = currentAria;

    /**
    * Processo usato per ciclizzare la creazione delle lingue
    *   nel tasto Languages.
    * Creo un "array" ed un "el" vuoti
    * Li passo alla funzione fillLanguages(dettagli scritti lì).
    * Ora ho un array che produrrà tanti elementi quante lingue presenti.
    **/
    const langList = [];
    let langElem = '';
    this.props.fillLanguages(langList, langElem);

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

          <select aria-label={ selectLabel } className="list" onChange={ selectLang }>
            { langList }
          </select>

        </nav>

      </header>
    );

  }
}

export default Nav;
