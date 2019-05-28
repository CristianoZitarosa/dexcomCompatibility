import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/Overlay.css';
import languages from '../languages/languages.json';

class Overlay extends Component {

/**
* Quando il componente è caricato controlla se c'è stata una visita precedente e
* se è stata settata una lingua per aggiornare lo stato.
**/
  componentDidMount() {
    this.checkStorage();
    this.checkLang();
  }

/**
* Verifico che un elemento non sia undefined o null riutilizzando questa funzione.
* Deve essere contemporaneamente not undefined e not null,
* dato che non posso prevedere l'elemento quale condizione verificherà
**/
  existsElem = (el) => {
    if (el !== undefined && el !== null) {
      return true;
    }
  }

/**
* Se è stata impostata una lingua, cambia lo stato dell'app su quella lingua
* Attiva la funzione situata in App.js
**/
  checkLang = () => {
    if ( this.existsElem(localStorage.language) ) {
      this.props.setLang();
    }
    // if (localStorage.language !== undefined) {
    //   this.props.setLang();
    // }
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
    document.body.classList.add("scroll");
    // if (document.querySelector('.overlay') !== null) {
    //   document.querySelector('.overlay').classList.add('close');
    //   document.body.classList.add("scroll");
    // }
  }

/**
* Se non c'è stata visita, setta lo storage in modo che ci sia traccia dell'utente
* che ha già visitato
**/
  setStorage = () => {
    localStorage.setItem("isNewUser", false);
    console.log(`There was no localStorage before, I have set "${localStorage.isNewUser}" right now.` );
  }

/**
* Controlla se l'utente ha già visitato. Se lo ha fatto chiude l'overlay
**/
  checkStorage = () => {
    if ( this.existsElem(localStorage.isNewUser) ) {
      console.log(`The localStorage "${localStorage.isNewUser}" is already set, no action is needed.`);
      this.closeOverlay();
    }
    // if (localStorage.isNewUser !== undefined) {
    //   console.log(`The localStorage "${localStorage.isNewUser}" is already set, no action is needed.`);
    //   this.closeOverlay();
    // }
  }

/**
* Chiamata dai tasti dell'overlay.
* Chiude l'overlay e setta lo storage per ricordare la visita.
**/
  setValues = () => {
    this.closeOverlay();
    this.setStorage();
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
    const selectLang = this.props.selectLang;
    const setValues = this.setValues;
    const currentLang = languages[this.props.id];
    const { flag, getInfo, agree, txtFrstLn, txtScdLn } = currentLang;

    return (
      <div className="emptyOverlay"> {/* Overlay secondario, per bloccare/sfumare contenuto pagina sottostante prima di aver letto info o accettato di continuare*/}

      <div className="overlay"> {/* Overlay primario */}
        <div id="landingMessage"> {/* Testo e immagini dell'overlay */}
          <div className="langSwitch"> {/* Select lingua e bandiara */}

            {/* Selezione della lingua */}
            <select id='select' onChange={ selectLang }> {/* menu selezione lingue */}
              { options }
            </select>

            {/* Bandiera */}
            <img id='flag' width="35" height="35" src={ flag } alt="flag"/> {/* bandiera */}

          </div>

          <p>{ txtFrstLn }</p> {/* messaggio overlay, riga 1 */}
          <p>{ txtScdLn }</p> {/* messaggio overlay, riga 2 */}

        <Link to="/about"> {/* bottone informazioni */}
          <button type="button" name="getInformed" id="getInformed" onClick={ setValues }>
            <i className="fas fa-info-circle pulse"></i>{ getInfo }
          </button>
        </Link>

        <button type="button" name="agreeButton" id="agreeButton" onClick={ setValues }> {/* bottone accetta */}
          <i className="fas fa-thumbs-up pulse"></i>{ agree }
        </button>

      </div>
    </div>
  </div>

    );

  }
}

export default Overlay;
