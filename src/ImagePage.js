import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { ContentMargin, Center, LazyLoadImagePane } from './Utils.js';
import ImagePane from './ImagePane.js';

import './ImagePage.css';

import images from './data/images.json';


function parseImages(page) {
  var imagePanes = [];
  var swapToggle = false;
  console.log(images[page].length)
  for (var i = 0; i < images[page].length; i++) {
    console.log(images[page][i])
    imagePanes.push(
      <LazyLoadImagePane>
        <ImagePane imagePaneInfo={images[page][i]} swap={swapToggle} />
      </LazyLoadImagePane>
    );
    swapToggle = !swapToggle;
  }
  return imagePanes;
}

function ImagePage(props) {
  return (
    <Switch>
      <Route exact path='/'>
        <ContentMargin>
          <Center>
            {parseImages("home")}
          </Center>
        </ContentMargin>
      </Route>
      <Route path='/portland'>
        <ContentMargin>
          <Center>
            {parseImages("portland")}
          </Center>
        </ContentMargin>
      </Route>
      <Route path='/hawaii'>
        <ContentMargin>
          <Center>
            {parseImages("hawaii")}
          </Center>
        </ContentMargin>
      </Route>
      <Route path='/columbiarivergorge'>
        <ContentMargin>
          <Center>
            {parseImages("columbiarivergorge")}
          </Center>
        </ContentMargin>
      </Route>
      <Route path='/utah'>
        <ContentMargin>
          <Center>
            {parseImages("utah")}
          </Center>
        </ContentMargin>
      </Route>
      <Route path='/'>
        <Redirect to="/404" />
      </Route>
    </Switch>
  );
}


export default ImagePage;
