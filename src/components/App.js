import React, { Component }  from 'react';
import { Route } from 'react-router-dom';
import '../style/App.css';
import Overlay from './Overlay.js';
import Choice from './Choice.js';
import Nav from './Nav.js';
import About from './About.js';
import AppComponent from './AppComponent.js';

class App extends Component {

  closeOverlay = () => {
    document.querySelector('.overlay').classList.add('close');
    document.body.classList.add("scroll");
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
        <AppComponent />
        <Route path="/about" component={ About } />
      </div>
    );
  }
}

export default App;
