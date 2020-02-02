import React from 'react';
import './ImagePane.css';
import { NavLink } from 'react-router-dom';
import LazyLoad from 'react-lazyload';

import { ImageImp, Placeholder } from './Utils.js';


function generateImagePane(imagePaneInfo, swap) {
  if (swap) {
    return (
      <div className="pane">
        <ImageStack stackInfo={imagePaneInfo.stack} />
        <div className="pane-vert">
          <LazyLoad
            offset={-100}
            placeholder={<Placeholder />}
            debounce={300}
            once='true'
          >
            <NavLink to={imagePaneInfo.vertical.source}>
              <img className={imagePaneInfo.vertical.alignment} src={ImageImp(imagePaneInfo.vertical.source)} alt={imagePaneInfo.vertical.alt} />
            </NavLink>
          </LazyLoad>
        </div>
      </div>
    );
  } else {
    return (
      <div className="pane">
        <div className="pane-vert">
          <LazyLoad
            offset={-100}
            placeholder={<Placeholder />}
            debounce={300}
            once='true'
          >
            <NavLink to={imagePaneInfo.vertical.source}>
              <img className={imagePaneInfo.vertical.alignment} src={ImageImp(imagePaneInfo.vertical.source)} alt={imagePaneInfo.vertical.alt} />
            </NavLink>
          </LazyLoad>
        </div>
        <ImageStack stackInfo={imagePaneInfo.stack} />
      </div>
    );
  }
}

function ImageStack(props) {
  return (
    <div className="pane-stack-outer">
      <div className="pane-stack">
        {props.stackInfo.map(stackItem => {
          return (
            <LazyLoad
              offset={-100}
              placeholder={<Placeholder />}
              debounce={300}
              once='true'
            >
              <NavLink to={stackItem.source}>
                <img className={stackItem.alignment} src={ImageImp(stackItem.source)} alt={stackItem.alt} />
              </NavLink>
            </LazyLoad>
          );
        })}
      </div>
    </div>
  );
}

// todo refactor lazyload implementation to a component
// todo make placeholder match size of image

function ImagePane(props) {
  return (
    <div>
      {generateImagePane(props.imagePaneInfo, props.swap)}
    </div>
  );
}


export default ImagePane;
