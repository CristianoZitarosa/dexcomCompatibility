import React, { Component }  from 'react';
import { Route } from 'react-router-dom';
import '../style/App.css';
import Overlay from './Overlay.js';
import Choice from './Choice.js';
import Nav from './Nav.js';

class App extends Component {

  closeOverlay = () => {
    document.querySelector('.overlay').style.display = 'none';
  };

  render() {
    return (
      <div>
        <Overlay closeOverlay={ this.closeOverlay }/>
        <Nav />
        <Route exact path="/" component={Choice} />
        <Route path="/test" render={() => (
            <div id="helpPage">
              <p>TEST</p>
            </div>)
          } />
      </div>
    );
  }
}

export default App;
