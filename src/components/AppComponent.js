import React from 'react';
import { Route } from 'react-router-dom';
import Clarity from './Apps/Clarity.js';
import Follow from './Apps/Follow.js';
import G5app from './Apps/G5app.js';
import G6app from './Apps/G6app.js';

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
