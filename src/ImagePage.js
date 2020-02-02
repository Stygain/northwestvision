import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import LazyLoad from 'react-lazyload';

import { ContentMargin, Center, Placeholder } from './Utils.js';
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
      <LazyLoad
        offset={-100}
        placeholder={<Placeholder />}
        debounce={300}
        once='true'
      >
        <ImagePane imagePaneInfo={images[page][i]} swap={swapToggle} />
      </LazyLoad>
    );
    swapToggle = !swapToggle;
  }
  return imagePanes;
}

// add offset component to lazyload
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
