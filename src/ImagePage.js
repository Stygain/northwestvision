import React from 'react';
import './ImagePage.css';
import { Redirect, Route, Switch, NavLink } from 'react-router-dom';
import { ContentMargin, Center } from './Utils.js';
import ImagePane from './ImagePane.js';

import images from './data/images.json';


function ImagePage(props) {
  return (
    <Switch>
      <Route exact path='/'>
        <ContentMargin>
          <h1>
            Home
          </h1>
          <Center>
            {images["home"].map(({source, alt, alignment}) => {
              return (
                <ImagePane source={source} alignment={alignment} alt={alt} />
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
            {images["portland"].map(({source, alt, alignment}) => {
              return (
                <ImagePane source={source} alignment={alignment} alt={alt} />
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
            {images["hawaii"].map(({source, alt, alignment}) => {
              return (
                <ImagePane source={source} alignment={alignment} alt={alt} />
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
            {images["columbiarivergorge"].map(({source, alt, alignment}) => {
              return (
                <ImagePane source={source} alignment={alignment} alt={alt} />
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
            {images["utah"].map(({source, alt, alignment}) => {
              return (
                <ImagePane source={source} alignment={alignment} alt={alt} />
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
