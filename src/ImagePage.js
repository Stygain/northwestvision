import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import LazyLoad from 'react-lazyload';

import { ContentMargin, Center } from './Utils.js';
import ImagePane from './ImagePane.js';

import './ImagePage.css';

import images from './data/images.json';

const imageImp = require.context('./assets', true)

// function Placeholder() {
//   return (
//     <div className="placeholder">
//       <div className="spinner">
//         <p> THIS IS MY PLACEHOLDER </p>
//       </div>
//     </div>
//   );
// }

const Placeholder = () => (
  <div>
    <h3>Loading...</h3>
  </div>
)

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
            {images["home"].map(({source, alt, alignment}) => {
              return (
                <LazyLoad height={900} once={true} debounce={600} placeholder={<Placeholder />}>
                  <ImagePane source={imageImp(source)} alignment={alignment} alt={alt} />
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
            {images["portland"].map(({source, alt, alignment}) => {
              return (
                <LazyLoad height={900} once={true} debounce={600} placeholder={<Placeholder />}>
                  <ImagePane source={imageImp(source)} alignment={alignment} alt={alt} />
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
            {images["hawaii"].map(({source, alt, alignment}) => {
              return (
                <LazyLoad height={900} once={true} debounce={600} placeholder={<Placeholder />}>
                  <ImagePane source={imageImp(source)} alignment={alignment} alt={alt} />
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
            {images["columbiarivergorge"].map(({source, alt, alignment}) => {
              return (
                <LazyLoad height={900} once={true} debounce={600} placeholder={<Placeholder />}>
                  <ImagePane source={imageImp(source)} alignment={alignment} alt={alt} />
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
            {images["utah"].map(({source, alt, alignment}) => {
              return (
                <LazyLoad height={900} once={true} debounce={600} placeholder={<Placeholder />}>
                  <ImagePane source={imageImp(source)} alignment={alignment} alt={alt} />
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
