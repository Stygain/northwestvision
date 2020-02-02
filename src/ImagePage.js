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
