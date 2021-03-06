import React, { Component }  from 'react';
import { Route, Switch } from 'react-router-dom';
import '../style/App.css';
import Overlay from './Overlay.js';
import Nav from './Nav.js';
import Dialog from './Dialog.js';
import Choice from './Choice.js';
import About from './About.js';
import NoMatch from './NoMatch.js';
import languages from '../languages/languages.json';

import G6app from './Apps/G6app.js';
import G5app from './Apps/G5app.js';
import Clarity from './Apps/Clarity.js';
import Follow from './Apps/Follow.js';

class App extends Component {

// Se non già impostato diversamente, la lingua di base è inglese
  state = { id: 0, dialog:'' }

/**
* Funzione chiamata dai tag <select> in <Overlay> e <Nav>.
* Al cambio lingua nei <select>esegue le seguenti attività:
*   - setta l'attributo "value" della lingua come stato corrente;
*   - setta la lingua nel localStorage;
*   - scrive l'About page in base alla lingua corrente;
*   - aggiorna attributi ARIA;
*   - aggiorna lingua corrente in <Nav>
**/
  selectLang = (e) => {
    console.log(`detected click on id "${e.target.value}"`);

    /* aggiorna lo stato */
    this.setState({ id: e.target.value });
    /* setta la lingua nel localStorage */
    localStorage.setItem('language', e.target.value);
    /* scrive l'About page in base alla lingua corrente */
    this.fillAboutPage(e.target.value);
    /* aggiorna attributi ARIA al cambio lingua */
    this.fillAria(e.target.value);
    /* aggiorna lingua corrente in <Nav> */
    document.querySelector('.list').value = localStorage.language;
    /* aggiorna il <title> alla lingua corrente */
    document.querySelector('title').innerText = languages[e.target.value].title;

    console.log(`new app state is set on "${e.target.value}"`);
    console.log(`il nuovo stato è quindi "${this.state.id}"`);
  }

/**
* Funzione di check chiamata dall'overlay.
* Se c'è già stata una visita aggiorna lo stato dell'app con la lingua nello
*   storage e mostra la lingua corrente nei <select> di <Overlay> e <Nav>
*   che altrimenti rimarrebbero invariati.
**/
  setLang = () => {
    /* aggiorna lo stato */
    this.setState({ id: localStorage.language });
    /* mostra lingua corrente nel <select> lingua */
    document.querySelector('.list').value = localStorage.language;
    /* aggiorna il <title> alla lingua corrente */
    document.querySelector('title').innerText = languages[localStorage.language].title;
  }

/**
* Con un for, ciclo fino alla lunghezza dell'array lingue assegnando ad element
*   i valori Html che saranno aggiunti con push() all'array,
*   aggiornati con gli indici usati da react per creare gli elementi.
**/
  fillLanguages = (array, element) => {
    for (let i=0; i < languages.length; i++) {
      element = <option key={ i } value={ i }>{ languages[i].lang }</option>;
      array.push(element);
    }
  }

/**
* Viene chiamata direttamente da <About> quando si monta il componente ma
*   anche chiamata da <Nav> o <Overlay> quando si seleziona una lingua, inserita
*   nello stack di selectLang() in questa pagina.
* La sua funzione è controllare l'esistenza di #aboutmessage, dato che se
*   chiamata senza che <About> sia montato manderebbe in crash l'app.
**/
  fillAboutPage = (e) => {
    if ( this.existsElem(document.getElementById('aboutMessage')) ) {
      document.getElementById('aboutMessage').innerHTML = languages[e].aboutPage;
    }
  }

/**
* Funzione che aggiorna attributi ARIA al cambio lingua
**/
  fillAria = (e) => {
    // document.getElementById('select').setAttribute('aria-label', languages[e].ariaLabel);
    document.querySelector('.list').setAttribute('aria-label', languages[e].ariaLabel);
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
* Mostra il modale di scelta lingua aggiungendo la classe show.
* Mette in focus il <select>.
* Setta lo state dell'APP in base alla provenienza della richiesta:
* - 0 se richiesto dall'Overlay
* - 1 se richiesto dal Nav
* Blocca lo scroll sul <body>
**/
  modalDisplay = (code, target) => {
    document.querySelector('.emptyDialog').classList.add('show');
    document.querySelector('.list').focus();
    this.setState({ dialog: code});
    this.trap(target);
    document.body.classList.remove('scroll');
  }

/**
* Nasconde il modale di scelta lingua rimuovendo la classe show.
* Riporta il focus sull'elemento da cui proviene la richiesta:
* - 0 se richiesto dall'Overlay
* - 1 se richiesto dal Nav
* Sblocca lo scroll sul <body>
**/
  modalHide = () => {
    document.querySelector('.emptyDialog').classList.remove('show');
    document.body.classList.add('scroll');
    if (this.state.dialog === 0) {
      document.querySelector('.langButton').focus();
    } else if (this.state.dialog === 1) {
      document.querySelector('.btn-right').focus();
    }
  }

/**
* Intrappola focus nel dialog. Quando dialog è invisible si sblocca da solo.
* E' chiamata dal Overlay e dal Nav, il target è l'ID del contenitore degli
*   elementi focusableElements
**/
  trap = (target) => {
    document.getElementById(target).addEventListener('keydown', trapTabKey);
    let focusableElementsString = 'select, button';
    let focusableElements = document.getElementById(target).querySelectorAll(focusableElementsString);
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

  render() {

    const currentLang = languages[this.state.id];
    const { select, aboutBar } = currentLang;

    return (

      <Switch>
        {/* Switch principale che restituisce sempre il component NoMatch, a meno che non venga linkata esattamente una delle pagine seguenti, quindi tutte quelle esistenti nell'app */}
        <Route exact path={['/','/g6', '/g5', '/clarity', '/follow', '/about', '/language']} render={()=>
          <div>
            {/* Componente Dialog ovvero cambio lingua */}
            <Dialog id={ this.state.id } selectLang={ this.selectLang } fillLanguages={ this.fillLanguages } modalHide={ this.modalHide }/>

            {/* Componente Overlay */}
            <Overlay id={ this.state.id } setLang={ this.setLang } selectLang={ this.selectLang }  fillLanguages={ this.fillLanguages } existsElem={ this.existsElem } modalDisplay={ this.modalDisplay } trap={ this.trap }/>

            {/* Componente Nav ovvero i bottoni */}
            <Nav id={ this.state.id } modalDisplay={ this.modalDisplay } />

            <main aria-live="assertive">
            {/* barra dei messaggi */}
            <h1 id="barMessage">
              <span className="homeMessage">{ select }</span>
              <span className="aboutMessage hide">{ aboutBar }</span>
            </h1>

            {/* Switch secondario, restituisce sempre Choice a meno che non sia linkato About, lo uso per far sparire Choice senza usare funzioni */}
            <Switch>
              {/* Componente About */}
              {/* <Route path="/about" component={ About } /> */}
              <Route path="/about" render={()=> <About id={ this.state.id } fillAboutPage={ this.fillAboutPage } existsElem={ this.existsElem }/>}/>
              {/* Componente Choice, sempre visibile, tranne in About */}
              <Route component={ Choice } />
            </Switch>

            <Route path="/g6" render={()=> <G6app id={ this.state.id }/>} />
            <Route path="/g5" render={()=> <G5app id={ this.state.id }/>} />
            <Route path="/clarity" render={()=> <Clarity id={ this.state.id }/>} />
            <Route path="/follow" render={()=> <Follow id={ this.state.id }/>} />
          </main>

          </div>
        }/>
        {/* Componente NoMatch, visibile se linkata una pagina inesistente */}
        <Route component={ NoMatch } />
      </Switch>

    );
  }
}

export default App;
