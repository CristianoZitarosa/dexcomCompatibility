import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/Overlay.css';
import languages from '../languages/languages.json';
import ARIA from '../languages/ARIA.json';

class Overlay extends Component {

/**
* Quando il componente è caricato controlla se c'è stata una visita precedente e
* se è stata settata una lingua per aggiornare lo stato.
**/
  componentDidMount() {
    this.checkStorage();
    this.checkLang();
    this.checkOverlayClass();
  }

/**
* Se Overlay non ha la classe .hide (e quindi è visibile) blocca il focus
* nell'overlay.
**/
  checkOverlayClass = () => {
    if (!document.querySelector('.emptyOverlay').classList.contains('hide'))
      this.trap();
  }

/**
* Se è stata impostata una lingua, cambia lo stato dell'app su quella lingua
* Attiva la funzione situata in App.js
**/
  checkLang = () => {
    if ( this.props.existsElem(localStorage.language) ) {
      this.props.setLang();
    }
  }

/**
* Chiude l'overlay applicando la classe .close e sblocca lo scroll su body
* Il blocco scroll l'avevo messo per il problema dello spaginamento, sembra
* essere sparito ma lo lascio perchè così lo blocca se l'utente accede direttamente
* su una pagina lunga e non voglio che possa scorrerla se c'è l'overlay.
**/
  closeOverlay = () => {
// nota: rimuovo il check di esistenza per l'overlay. xchè lo avevo settato?
    document.querySelector('.emptyOverlay').classList.add('hide');
    document.body.classList.add('scroll');
  }

/**
* Se non c'è stata visita, setta lo storage in modo che ci sia traccia dell'utente
* che ha già visitato
**/
  setStorage = () => {
    localStorage.setItem('isNewUser', false);
    console.log(`There was no localStorage before, I have set "${localStorage.isNewUser}" right now.` );
  }

/**
* Controlla se l'utente ha già visitato. Se lo ha fatto chiude l'overlay
**/
  checkStorage = () => {
    if ( this.props.existsElem(localStorage.isNewUser) ) {
      console.log(`The localStorage "${localStorage.isNewUser}" is already set, no action is needed.`);
      this.closeOverlay();
    }
  }

/**
* Chiamata dai tasti dell'overlay.
* Chiude l'overlay e setta lo storage per ricordare la visita.
**/
  setValues = () => {
    this.closeOverlay();
    this.setStorage();
  }

/**
* Intrappola focus nell'overlay. Quando overlay è invisible si sblocca da solo.
**/
  trap = () => {
    document.getElementById('landingMessage').addEventListener('keydown', trapTabKey);
    let focusableElementsString = 'select, button';
    let focusableElements = document.getElementById('landingMessage').querySelectorAll(focusableElementsString);
    focusableElements = Array.prototype.slice.call(focusableElements);
    let firstTabStop = focusableElements[0];
    let lastTabStop = focusableElements[focusableElements.length - 1];
    firstTabStop.focus();
    function trapTabKey(e) {
      // Check for TAB key press
      if (e.keyCode === 9) {
        // SHIFT + TAB
        if (e.shiftKey) {
          if (document.activeElement === firstTabStop) {
            e.preventDefault();
            lastTabStop.focus();
          }
        // TAB
        } else {
          if (document.activeElement === lastTabStop) {
            e.preventDefault();
            firstTabStop.focus();
          }
        }
      }
    }
  }

/**
* Premendo il tasto agree, switcha il focus sul Nav a seconda del path corrente.
* Agree chiude solo l'overlay quindi la pagina sotto dipende dal link corrente.
**/
  focusAgree = () => {
    switch (window.location.pathname) {
      case '/about':
        document.getElementById('about').focus();
        break;
      default:
        document.getElementById('home').focus();
    }
  }

/**
* Focus su About, ho premuto il tasto per avere +Info.
**/
  focusInfo = () => {
    document.getElementById('about').focus();
  }

/**
* Azioni avviate premendo il tasto +Info
**/
  actionInfo = () => {
    this.setValues();
    this.focusInfo();
  }

/**
* Azioni avviate premendo il tasto Agree
**/
  actionAgree = () => {
    this.setValues();
    this.focusAgree();
  }

  render() {
    /**
    * Processo usato per ciclizzare la creazione delle lingue nel menu select.
    * Creo un "array" ed un "el" vuoti
    * Li passo alla funzione fillLanguages(dettagli scritti lì).
    * Ora ho un array che produrrà tanti elementi quante lingue presenti.
    **/
    const options = [];
    let el = '';
    this.props.fillLanguages(options, el);

    /**
    * Semplificazioni codice
    **/
    const actionInfo = this.actionInfo;
    const actionAgree = this.actionAgree;
    const currentLang = languages[this.props.id];
    const { flag, getInfo, agree, txtFrstLn, txtScdLn } = currentLang;
    const currentAria = ARIA[this.props.id];
    const { selectLabel, agreeOverlayLabel, infOverlayLabel } = currentAria;

    return (
      <div role="dialog" className="emptyOverlay"> {/* Overlay secondario, per bloccare/sfumare contenuto pagina sottostante prima di aver letto info o accettato di continuare*/}

      <div className="overlay"> {/* Overlay primario */}
        <div id="landingMessage"> {/* Testo e immagini dell'overlay */}
          <div className="langSwitch"> {/* Select lingua e bandiara */}

            {/* Selezione della lingua */}
            <button aria-label={ selectLabel } className="langButton" onClick={ () => {this.props.modalDisplay(0)} }><i className="fas fa-globe"></i> { languages[this.props.id].lang } <i className="fas fa-chevron-down"></i></button>

            {/* Bandiera */}
            <img id='flag' aria-hidden="true" width="35" height="35" src={ flag } alt="flag"/> {/* bandiera */}

          </div>

          <h4>{ txtFrstLn }</h4> {/* messaggio overlay, riga 1 */}
          <h4>{ txtScdLn }</h4> {/* messaggio overlay, riga 2 */}

        <Link to="/about" tabIndex="-1"> {/* bottone informazioni */}
          <button aria-label={ infOverlayLabel } type="button" name="getInformed" id="getInformed" onClick={ actionInfo }>
            <i className="fas fa-info-circle pulse"></i>{ getInfo }
          </button>
        </Link>

        <button aria-label={ agreeOverlayLabel } type="button" name="agreeButton" id="agreeButton" onClick={ actionAgree }> {/* bottone accetta */}
          <i className="fas fa-thumbs-up pulse"></i>{ agree }
        </button>

      </div>
    </div>
  </div>

    );

  }
}

export default Overlay;
