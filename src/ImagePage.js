import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { ContentMargin, CarouselMargin, Center, LazyLoadImagePane } from './Utils.js';
import ImagePane from './ImagePane.js';
import Carousel from './Carousel/Carousel.js';

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
      <Route exact path={`${process.env.PUBLIC_URL}/`}>
        <ContentMargin>
          <Carousel />
          <CarouselMargin>
            <Center>
              {parseImages("home", props)}
            </Center>
          </CarouselMargin>
        </ContentMargin>
      </Route>
      <Route path={`${process.env.PUBLIC_URL}/portland`}>
        <ContentMargin>
          <Center>
            {parseImages("portland", props)}
          </Center>
        </ContentMargin>
      </Route>
      <Route path={`${process.env.PUBLIC_URL}/hawaii`}>
        <ContentMargin>
          <Center>
            {parseImages("hawaii", props)}
          </Center>
        </ContentMargin>
      </Route>
      <Route path={`${process.env.PUBLIC_URL}/columbiarivergorge`}>
        <ContentMargin>
          <Center>
            {parseImages("columbiarivergorge", props)}
          </Center>
        </ContentMargin>
      </Route>
      <Route path={`${process.env.PUBLIC_URL}/utah`}>
        <ContentMargin>
          <Center>
            {parseImages("utah", props)}
          </Center>
        </ContentMargin>
      </Route>
      <Route path={`${process.env.PUBLIC_URL}/palmsprings`}>
        <ContentMargin>
          <Center>
            {parseImages("palmsprings", props)}
          </Center>
        </ContentMargin>
      </Route>
      <Route path={`${process.env.PUBLIC_URL}/northcarolina`}>
        <ContentMargin>
          <Center>
            {parseImages("northcarolina", props)}
          </Center>
        </ContentMargin>
      </Route>
      <Route path={`${process.env.PUBLIC_URL}/texas`}>
        <ContentMargin>
          <Center>
            {parseImages("texas", props)}
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
