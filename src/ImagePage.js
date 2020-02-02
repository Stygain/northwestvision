import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import LazyLoad from 'react-lazyload';

import { ContentMargin, Center } from './Utils.js';
import ImagePane from './ImagePane.js';

import './ImagePage.css';

import images from './data/images.json';


const imageImp = require.context('./assets', true)

const Placeholder = () => (
  <div className="post loading">
    <svg
      width="80"
      height="80"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle
        cx="50"
        cy="50"
        fill="none"
        stroke="#49d1e0"
        strokeWidth="10"
        r="35"
        strokeDasharray="164.93361431346415 56.97787143782138"
        transform="rotate(275.845 50 50)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          calcMode="linear"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
          dur="1s"
          begin="0s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  </div>
);

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
                <LazyLoad
                  offset={-100}
                  placeholder={<Placeholder />}
                  debounce={300}
                  once='true'
                >
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
