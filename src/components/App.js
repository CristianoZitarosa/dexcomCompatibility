import React from 'react';
import { Route } from 'react-router-dom';
import '../style/App.css';
import Choice from './Choice.js';
import Nav from './Nav.js';
// import Overlay from './Overlay.js';

function App() {
  return (
    <div>
      {/* <Overlay /> */}
      <Nav />
      <Route exact path="/" component={Choice} />
      <Route path="/test" render={() => (
          <div id="helpPage">
            <p>TEST</p>
          </div>)
        } />
      {/* <Choice/> */}
    </div>
  );
}

export default App;
