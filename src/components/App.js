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
    this.setState({ id: e.target.value })
    localStorage.setItem("language", e.target.value);
    console.log(this.state);
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

    let currentLang = languages[this.state.id];
    const{ select, about } = currentLang;

    return (

      <Switch>
        <Route exact path={['/','/g6', '/g5', '/clarity', '/follow', '/about']} render={()=>
          <div>
            <Overlay id={ this.state.id } setLang={ this.setLang } selectLang={ this.selectLang }/>
            <Nav />
            <p id="barMessage">
              <span className="homeMessage">{ select }</span>
              <span className="aboutMessage hide">{ about }</span>
            </p>
            <Switch>
              <Route path="/about" component={ About } />
              <Route component={ Choice } />
            </Switch>
          </div>
        }/>
        <Route component={ NoMatch } />
      </Switch>

    );
  }
}

export default App;
