import React from 'react';
import './App.css';
import NavBar from './NavBar.js';
import { Route, Switch } from 'react-router-dom';
import ContentMargin from './Utils.js'
import ImagePage from './ImagePage.js'

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <ImagePage />
        </Route>
        <Route path='/portland'>
          <ImagePage />
        </Route>
        <Route path='/hawaii'>
          <ImagePage />
        </Route>
        <Route path='/columbiarivergorge'>
          <ImagePage />
        </Route>
        <Route path='/utah'>
          <ImagePage />
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
