import React, { Component } from 'react';
import '../style/Dialog.css';
import languages from '../languages/languages.json';
import ARIA from '../languages/ARIA.json';

class Dialog extends Component {

  render() {
    /**
    * Semplificazioni codice
    **/
    const currentLang = languages[this.props.id];
    const { modalHeader, closeModal } = currentLang;
    const selectLang = this.props.selectLang;
    const currentAria = ARIA[this.props.id];
    const { selectLabel, closeModalARIA } = currentAria;

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

        <div className="emptyDialog" id="emptyDialog">
          <div className="dialog">

            <section className="modal" id="modal" role="dialog">
              <h2>{ modalHeader }:</h2>
              <select aria-label={ selectLabel } className="list" onChange={ selectLang }>
                { langList }
              </select>
              <button aria-label={ closeModalARIA } className="closeModal" onClick={ this.props.modalHide }>{ closeModal }</button>
            </section>

          </div>
        </div>

    );

  }
}

export default Dialog;
