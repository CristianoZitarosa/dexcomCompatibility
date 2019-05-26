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
    document.querySelector('.overlay').classList.add('hide');
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
    const array = [];
    let el= '';
    for (let i=0; i < languages.length; i++) {
      el = <option key={ i } value={ i }>{ languages[i].lang }</option>;
      array.push(el);
    }

    const iteration = array.map( (el) => (el) );

    const selectLang = this.props.selectLang;
    const setValues = this.setValues;
    const currentLang = languages[this.props.id];
    const { flag, getInfo, agree, txtFrstLn, txtScdLn } = currentLang;

    return (
      <div className="overlay">
        <div id="landingMessage">
          <div className="langSwitch">

            <select id='select' onChange={ selectLang }> {/* menu selezione lingue */}
              { iteration }
            </select>

            <img id='flag' width="35" height="35" src={ flag } alt="flag"/> {/* bandiera */}

          </div>

          <p>{ txtFrstLn }</p> {/* messaggi overlay */}
          <p>{ txtScdLn }</p>

        <Link to="/about"> {/* bottone informazioni */}
          <button type="button" name="getInformed" id="getInformed" onClick={ setValues }>
            <i className="fas fa-info-circle pulse"></i>{ getInfo }
          </button>
        </Link>

        <button type="button" name="agreeButton" id="agreeButton" onClick={ setValues }> {/* bottone accetta */}
          <i className="fas fa-thumbs-up pulse"></i>{ agree }
        </button>

      </div>

      <div className="emptyOverlay"></div>
    </div>
    );

  }
}

export default Overlay;
