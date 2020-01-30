import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar.js';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <h1>
            Home
          </h1>
        </Route>
        <Route path='/test'>
          <h1>
            Test
          </h1>
        </Route>
        <Route path='/'>
          <h1>
            404
          </h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
