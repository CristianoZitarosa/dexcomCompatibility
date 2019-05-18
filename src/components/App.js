import React, { Component }  from 'react';
import { Route, Switch } from 'react-router-dom';
import '../style/App.css';
import Overlay from './Overlay.js';
import Nav from './Nav.js';
import Choice from './Choice.js';
import About from './About.js';

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
        <Overlay closeOverlay={ this.closeOverlay } setStorage={ this.setStorage } />
        <Nav />
        <p id="barMessage">
          <span className="homeMessage">Select an App:</span>
          <span className="aboutMessage hide">About this page:</span>
        </p>
        <Switch>
          <Route path="/about" component={ About } />
          <Route component={ Choice } />
        </Switch>
      </div>

    );
  }
}

export default App;
