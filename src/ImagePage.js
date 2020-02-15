import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { ContentMargin, Center, LazyLoadImagePane } from './Utils.js';
import ImagePane from './ImagePane.js';

import images from './data/images.json';


function parseImages(page, props) {
  var imagePanes = [];
  var swapToggle = false;
  for (var i = 0; i < images[page].length; i++) {
    imagePanes.push(
      <LazyLoadImagePane>
        <ImagePane
          imagePaneInfo={images[page][i]}
          swap={swapToggle}
          setModalShow={props.setModalShow}
          setModalSource={props.setModalSource} />
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
            {parseImages("home", props)}
          </Center>
        </ContentMargin>
      </Route>
      <Route exact path='/northwestvision'>
        <ContentMargin>
          <Center>
            {parseImages("home", props)}
          </Center>
        </ContentMargin>
      </Route>
      <Route path='/portland'>
        <ContentMargin>
          <Center>
            {parseImages("portland", props)}
          </Center>
        </ContentMargin>
      </Route>
      <Route path='/northwestvision/portland'>
        <ContentMargin>
          <Center>
            {parseImages("portland", props)}
          </Center>
        </ContentMargin>
      </Route>
      <Route path='/hawaii'>
        <ContentMargin>
          <Center>
            {parseImages("hawaii", props)}
          </Center>
        </ContentMargin>
      </Route>
      <Route path='/northwestvision/hawaii'>
        <ContentMargin>
          <Center>
            {parseImages("hawaii", props)}
          </Center>
        </ContentMargin>
      </Route>
      <Route path='/columbiarivergorge'>
        <ContentMargin>
          <Center>
            {parseImages("columbiarivergorge", props)}
          </Center>
        </ContentMargin>
      </Route>
      <Route path='/northwestvision/columbiarivergorge'>
        <ContentMargin>
          <Center>
            {parseImages("columbiarivergorge", props)}
          </Center>
        </ContentMargin>
      </Route>
      <Route path='/utah'>
        <ContentMargin>
          <Center>
            {parseImages("utah", props)}
          </Center>
        </ContentMargin>
      </Route>
      <Route path='/northwestvision/utah'>
        <ContentMargin>
          <Center>
            {parseImages("utah", props)}
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
