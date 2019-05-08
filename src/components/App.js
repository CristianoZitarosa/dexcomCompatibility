import React, { Component }  from 'react';
import { Route } from 'react-router-dom';
import '../style/App.css';
import Overlay from './Overlay.js';
import Choice from './Choice.js';
import Nav from './Nav.js';
import About from './About.js';
import Clarity from './Clarity.js';
import Follow from './Follow.js';
import G5app from './G5app.js';
import G6app from './G6app.js';

class App extends Component {

  closeOverlay = () => {
    document.querySelector('.overlay').style.display = 'none';
  };

  render() {
    return (
      <div>
        <Overlay closeOverlay={ this.closeOverlay }/>
        <Nav />
        <p id="selectionText">
          Select an App:
        </p>
        <Choice />
        <Route path="/g6" component={ G6app } />
        <Route path="/g5" component={ G5app } />
        <Route path="/clarity" component={ Clarity } />
        <Route path="/follow" component={ Follow } />
        <Route path="/about" component={ About } />
      </div>
    );
  }
}

export default App;
