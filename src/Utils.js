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
    ${'' /* margin-top: 74vw; */}
    margin-top: calc(64vw + 90px);


    @media (min-width: 1300px) {
      ${'' /* margin-top: 44.5vw; */}
      margin-top: calc(39vw + 90px);
    }

    @media (max-width: 768px) {
      ${'' /* margin-top: 76vw; */}
      margin-top: calc(61vw + 90px);
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
      offset={0}
      placeholder={<Placeholder type={"image-" + props.alignment} />}
      once={true}
    >
      {props.children}
    </LazyLoad>
  );
}

function LazyLoadImagePane(props) {
  return (
    <LazyLoad
      offset={0}
      placeholder={<Placeholder type="pane" />}
      once={true}
    >
      {props.children}
    </LazyLoad>
  );
}

function Log(logMessage) {
  if (process.env.NODE_ENV === 'development') {
    console.log(logMessage);
  }
}

export {
    ContentMargin,
    CarouselMargin,
    Center,
    ImageImp,
    LazyLoadImage,
    LazyLoadImagePane,
    Log
}
