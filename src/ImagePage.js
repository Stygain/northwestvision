import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { ContentMargin, CarouselMargin, Center } from './Utils.js';
import Carousel from './Carousel/Carousel.js';
import IndivImagePage from './IndivImagePage.js';


function ImagePage(props) {
  return (
    <Switch>
      <Route exact path='/'>
        <ContentMargin>
          <Carousel />
          <CarouselMargin>
            <Center>
              <IndivImagePage parentProps={props} page="home" url="/" />
            </Center>
          </CarouselMargin>
        </ContentMargin>
      </Route>
      <Route path='/imageId'>
        <ContentMargin>
          <Carousel />
          <CarouselMargin>
            <Center>
              <IndivImagePage parentProps={props} page="home" url="/" />
            </Center>
          </CarouselMargin>
        </ContentMargin>
      </Route>
      <Route path='/portland'>
        <ContentMargin>
          <Center>
            <IndivImagePage parentProps={props} page="portland" url="/portland/" />
          </Center>
        </ContentMargin>
      </Route>
      <Route path='/hawaii'>
        <ContentMargin>
          <Center>
            <IndivImagePage parentProps={props} page="hawaii" url="/hawaii/" />
          </Center>
        </ContentMargin>
      </Route>
      <Route path='/columbiarivergorge'>
        <ContentMargin>
          <Center>
            <IndivImagePage parentProps={props} page="columbiarivergorge" url="/columbiarivergorge/" />
          </Center>
        </ContentMargin>
      </Route>
      <Route path='/utah'>
        <ContentMargin>
          <Center>
            <IndivImagePage parentProps={props} page="utah" url="/utah/" />
          </Center>
        </ContentMargin>
      </Route>
      <Route path='/palmsprings'>
        <ContentMargin>
          <Center>
            <IndivImagePage parentProps={props} page="palmsprings" url="/palmsprings/" />
          </Center>
        </ContentMargin>
      </Route>
      <Route path='/northcarolina'>
        <ContentMargin>
          <Center>
            <IndivImagePage parentProps={props} page="northcarolina" url="/northcarolina/" />
          </Center>
        </ContentMargin>
      </Route>
      <Route path='/texas'>
        <ContentMargin>
          <Center>
            <IndivImagePage parentProps={props} page="texas" url="/texas/" />
          </Center>
        </ContentMargin>
      </Route>
      <Route path='/portlandjapanesegarden'>
        <ContentMargin>
          <Center>
            <IndivImagePage parentProps={props} page="portlandjapanesegarden" url="/portlandjapanesegarden/" />
          </Center>
        </ContentMargin>
      </Route>
      <Route path='/roadtrip'>
        <ContentMargin>
          <Center>
            <IndivImagePage parentProps={props} page="roadtrip" url="/roadtrip/" />
          </Center>
        </ContentMargin>
      </Route>
      <Route path='/'>
        <ContentMargin>
          <h1>
            404 page
          </h1>
        </ContentMargin>
      </Route>
    </Switch>
  );
}


export default ImagePage;
