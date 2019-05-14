import React, { Component }  from 'react';
import { Route } from 'react-router-dom';
import '../style/App.css';
import Overlay from './Overlay.js';
import Choice from './Choice.js';
import Nav from './Nav.js';
import About from './About.js';
import AppComponent from './AppComponent.js';

class App extends Component {

  componentDidMount() {
    this.checkStorage();
  }

  closeOverlay = () => {
    document.querySelector('.overlay').classList.add('close');
    document.body.classList.add("scroll");
  };

  setStorage = () => {
    localStorage.setItem("isNewUser", false);
    console.log(`There was no localStorage before, I have set "${localStorage.isNewUser}" right now.` );
  };

  checkStorage = () => {
    if (localStorage.isNewUser !== undefined) {
      console.log(`The localStorage "${localStorage.isNewUser}" is already set, no action is needed.`);
      this.closeOverlay();
    }

  };

  render() {
    return (
      <div>
        <Overlay
          closeOverlay={ this.closeOverlay }
          setStorage={ this.setStorage }
        />
        <Nav />
        <p id="barMessage">
          <span className="homeMessage">Select an App:</span>
          <span className="aboutMessage hide">About this page:</span>
        </p>
        <Choice />
        <AppComponent />
        <Route path="/about" component={ About } />
      </div>
    );
  }
}

export default App;
