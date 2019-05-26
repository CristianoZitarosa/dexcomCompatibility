import React, { Component }  from 'react';
import { Route, Switch } from 'react-router-dom';
import '../style/App.css';
import Overlay from './Overlay.js';
import Nav from './Nav.js';
import Choice from './Choice.js';
import About from './About.js';
import NoMatch from './NoMatch.js';
import languages from '../languages/languages.json';

class App extends Component {

// Se non già impostato diversamente, la lingua di base è inglese
  state = { id: 0 }

/**
* Funzione chiamata dall'overlay. Quando cambia l'elemento del menu lingua
* il value del target selezionato è passato come stato e viene memorizzato nello
* storage per futuro utilizzo
**/
  selectLang = (e) => {
    console.log(`detected click on id "${e.target.value}"`);
    this.setState({ id: e.target.value })
    localStorage.setItem("language", e.target.value);
    console.log(`new app state is set on "${e.target.value}"`);
  }

/**
* Funzione chiamata dall'overlay. Se c'è stata una visita aggiorno lo stato dell'app
* con la lingua nello storage e aggiorno il value del menu di scelta che altrimenti
* rimarrebbe invariato.
**/
  setLang = () => {
    this.setState({ id: localStorage.language });
    document.querySelector('#select').value = localStorage.language;
  }

  render() {

    const currentLang = languages[this.state.id];
    const { select, aboutBar } = currentLang;

    return (

      <Switch>
        {/* Switch principale che restituisce sempre il component NoMatch, a meno che non venga linkata esattamente una delle pagine seguenti, quindi tutte quelle esistenti nell'app */}
        <Route exact path={['/','/g6', '/g5', '/clarity', '/follow', '/about']} render={()=>
          <div>

            {/* Componente Overlay */}
            <Overlay id={ this.state.id } setLang={ this.setLang } selectLang={ this.selectLang }/>

            {/* Componente Nav ovvero i bottoni */}
            <Nav id={ this.state.id } selectLang={ this.selectLang } fillLanguages={this.fillLanguages}/>

            {/* barra dei messaggi */}
            <p id="barMessage">
              <span className="homeMessage">{ select }</span>
              <span className="aboutMessage hide">{ aboutBar }</span>
            </p>

            {/* Switch secondario, restituisce sempre Choice a meno che non sia linkato About, lo uso per far sparire Choice senza usare funzioni */}
            <Switch>
              {/* Componente About */}
              <Route path="/about" component={ About } />
              {/* Componente Choice, sempre visibile, tranne in About */}
              <Route component={ Choice } />
            </Switch>

          </div>
        }/>
        {/* Componente NoMatch, visibile se linkata una pagina inesistente */}
        <Route component={ NoMatch } />
      </Switch>

    );
  }
}

export default App;
