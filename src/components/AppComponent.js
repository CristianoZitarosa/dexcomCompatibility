import React from 'react';
import { Route } from 'react-router-dom';
import '../style/appsStyle.css';
import Clarity from './Clarity.js';
import Follow from './Follow.js';
import G5app from './G5app.js';
import G6app from './G6app.js';

function AppComponent() {

    return (
      <div>

        <Route path="/g6" component={ G6app } />
        <Route path="/g5" component={ G5app } />
        <Route path="/clarity" component={ Clarity } />
        <Route path="/follow" component={ Follow } />

      </div>

    );

}

export default AppComponent;
