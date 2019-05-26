import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
import '../style/Nav.css';
import languages from '../languages/languages.json';

class Nav extends Component {

  render() {
    /**
    * Semplificazioni codice
    **/
    const selectLang = this.props.selectLang;
    const currentLang = languages[this.props.id];
    const { aboutBtn } = currentLang;

    /**
    * Processo usato per ciclizzare la creazione delle lingue
    *   nel tasto Languages.
    * Creo un "array" ed un "el" vuoti
    * Li passo alla funzione fillLanguages(dettagli scritti lì).
    * Ora ho un array che produrrà tanti elementi quante lingue presenti.
    *
    * Qui applico il callback sul click, differenzio l'array per sicurezza
    *   ma ha funzionato anche con gli stessi nomi.
    **/
    const langList = [];
    let langElem= '';
    this.props.fillLanguages(langList, langElem, selectLang);

    return (
      <div className="btn-group">

        <Link to="/"> {/* bottone home */}
          <button className="button btn-left">
            <i className="fas fa-home"></i> Home
          </button>
        </Link>

        <Link to="/about">{/* bottone about */}
          <button className="button infoButton"><i className="fas fa-info-circle"></i> { aboutBtn }</button>
        </Link>

        {/* bottone lingua */}
        <button className="button btn-right" ><i className="fas fa-language"></i> Language
          <div className="test">
            {/* NOTA del perchè uso tag <option>!!!
            Devono essere tag <option> per usare attributo <value>
            su altri tag non funzionerebbe restituendo undefined
            nello storage  facendo crashare l'applicazione*/}
            { langList }
          </div>
        </button>

        {/* <button className="button">
          <select id='tete' onChange={this.props.setLan}>
            <option value='0'>English</option>
            <option value='1'>Italiano</option>
          </select></button> */}

      </div>
    );

  }
}

export default Nav;
