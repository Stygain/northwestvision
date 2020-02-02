import React from 'react';
import './App.css';
import NavBar from './NavBar.js';
import { Route } from 'react-router-dom';
import { ContentMargin } from './Utils.js';
import ImagePage from './ImagePage.js';

function App() {
  return (
    <div>
      <NavBar />
      <Route path='/'>
        <ImagePage />
      </Route>
      <Route exact path='/404'>
        <ContentMargin>
          <h1>
            404 page
          </h1>
        </ContentMargin>
      </Route>
    </div>
  );
}

export default App;
