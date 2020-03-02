/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import LazyLoad from 'react-lazyload';

import './Utils.css';

function ContentMargin(props) {
  return (
    <div className='content'>
      {props.children}
    </div>
  );
}

function Center(props) {
  return (
    <div className='center'>
      {props.children}
    </div>
  );
}

function CarouselMargin(props) {
  const styling = css`
    margin-top: 73.2vw;


    @media (min-width: 1300px) {
      margin-top: 43vw;
    }

    @media (max-width: 768px) {
      margin-top: 76vw;
    }
  `;

  return (
    <div css={styling}>
      {props.children}
    </div>
  );
}

const ImageImp = require.context('./assets', true)


function Placeholder(props) {
  return (
    <div className={"loader-" + props.type}>
      <div className="spinner-box">
        <div className="pulse-container">
          <div className="pulse-bubble pulse-bubble-1"></div>
          <div className="pulse-bubble pulse-bubble-2"></div>
          <div className="pulse-bubble pulse-bubble-3"></div>
          <div className="pulse-bubble pulse-bubble-4"></div>
        </div>
      </div>
    </div>
  );
}

function LazyLoadImage(props) {
  return (
    <LazyLoad
      offset={-100}
      placeholder={<Placeholder type={"image-" + props.alignment} />}
      debounce={300}
      once={true}
    >
      {props.children}
    </LazyLoad>
  );
}

function LazyLoadImagePane(props) {
  return (
    <LazyLoad
      offset={-100}
      placeholder={<Placeholder type="pane" />}
      debounce={300}
      once={true}
    >
      {props.children}
    </LazyLoad>
  );
}

export {
    ContentMargin,
    CarouselMargin,
    Center,
    ImageImp,
    LazyLoadImage,
    LazyLoadImagePane
}
