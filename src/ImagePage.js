import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import LazyLoad from 'react-lazyload';

import { ContentMargin, Center, Placeholder } from './Utils.js';
import ImagePane from './ImagePane.js';

import './ImagePage.css';

import images from './data/images.json';


// add offset component to lazyload
function ImagePage(props) {
  return (
    <Switch>
      <Route exact path='/'>
        <ContentMargin>
          <h1>
            Home
          </h1>
          <Center>
            {images["home"].map(imagePane => {
              return (
                <LazyLoad
                  offset={-100}
                  placeholder={<Placeholder />}
                  debounce={300}
                  once='true'
                >
                  <ImagePane imagePaneInfo={imagePane} />
                </LazyLoad>
              );
            })}
          </Center>
        </ContentMargin>
      </Route>
      <Route path='/portland'>
        <ContentMargin>
          <h1>
            Portland
          </h1>
          <Center>
            {images["portland"].map(imagePane => {
              return (
                <LazyLoad
                  offset={-100}
                  placeholder={<Placeholder />}
                  debounce={300}
                  once='true'
                >
                  <ImagePane imagePaneInfo={imagePane} />
                </LazyLoad>
              );
            })}
          </Center>
        </ContentMargin>
      </Route>
      <Route path='/hawaii'>
        <ContentMargin>
          <h1>
            Hawaii
          </h1>
          <Center>
            {images["hawaii"].map(imagePane => {
              return (
                <LazyLoad
                  offset={-100}
                  placeholder={<Placeholder />}
                  debounce={300}
                  once='true'
                >
                  <ImagePane imagePaneInfo={imagePane} />
                </LazyLoad>
              );
            })}
          </Center>
        </ContentMargin>
      </Route>
      <Route path='/columbiarivergorge'>
        <ContentMargin>
          <h1>
            The Columbia River Gorge
          </h1>
          <Center>
            {images["columbiarivergorge"].map(imagePane => {
              return (
                <LazyLoad
                  offset={-100}
                  placeholder={<Placeholder />}
                  debounce={300}
                  once='true'
                >
                  <ImagePane imagePaneInfo={imagePane} />
                </LazyLoad>
              );
            })}
          </Center>
        </ContentMargin>
      </Route>
      <Route path='/utah'>
        <ContentMargin>
          <h1>
            The National Parks of Utah
          </h1>
          <Center>
            {images["utah"].map(imagePane => {
              return (
                <LazyLoad
                  offset={-100}
                  placeholder={<Placeholder />}
                  debounce={300}
                  once='true'
                >
                  <ImagePane imagePaneInfo={imagePane} />
                </LazyLoad>
              );
            })}
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
