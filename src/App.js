import React from 'react';
import './App.css';
import NavBar from './NavBar.js';
import { Route, Switch } from 'react-router-dom';
import ContentMargin from './Utils.js'

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <ContentMargin>
            <h1>
              Home
            </h1>
          </ContentMargin>
        </Route>
        <Route path='/test'>
          <ContentMargin>
            <h1>
              Test
            </h1>
          </ContentMargin>
        </Route>
        <Route path='/'>
          <ContentMargin>
            <h1>
              404
            </h1>
          </ContentMargin>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
