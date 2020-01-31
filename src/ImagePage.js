import React from 'react';
// import './ImagePage.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import ContentMargin from './Utils.js'

// import images from './data/images.json'


function ImagePage(props) {
  return (
    <Switch>
      <Route exact path='/'>
        <ContentMargin>
          <h1>
            Home
          </h1>
        </ContentMargin>
      </Route>
      <Route path='/portland'>
        <ContentMargin>
          <h1>
            Portland
          </h1>
        </ContentMargin>
      </Route>
      <Route path='/hawaii'>
        <ContentMargin>
          <h1>
            Hawaii
          </h1>
        </ContentMargin>
      </Route>
      <Route path='/columbiarivergorge'>
        <ContentMargin>
          <h1>
            The Columbia River Gorge
          </h1>
        </ContentMargin>
      </Route>
      <Route path='/utah'>
        <ContentMargin>
          <h1>
            The National Parks of Utah
          </h1>
        </ContentMargin>
      </Route>
      <Route path='/'>
        <Redirect to="/404" />
      </Route>
    </Switch>
  );
}


export default ImagePage;
