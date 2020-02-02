import React from 'react';
import './ImagePane.css';
import { NavLink } from 'react-router-dom';

import { ImageImp, LazyLoadImage } from './Utils.js';


function generateImagePane(imagePaneInfo, swap) {
  if (swap) {
    return (
      <div className="pane">
        <ImageStack stackInfo={imagePaneInfo.stack} />
        <div className="pane-vert">
          <LazyLoadImage>
            <NavLink to={imagePaneInfo.vertical.source}>
              <img className={imagePaneInfo.vertical.alignment} src={ImageImp(imagePaneInfo.vertical.source)} alt={imagePaneInfo.vertical.alt} />
            </NavLink>
          </LazyLoadImage>
        </div>
      </div>
    );
  } else {
    return (
      <div className="pane">
        <div className="pane-vert">
          <LazyLoadImage>
            <NavLink to={imagePaneInfo.vertical.source}>
              <img className={imagePaneInfo.vertical.alignment} src={ImageImp(imagePaneInfo.vertical.source)} alt={imagePaneInfo.vertical.alt} />
            </NavLink>
          </LazyLoadImage>
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
            <LazyLoadImage>
              <NavLink to={stackItem.source}>
                <img className={stackItem.alignment} src={ImageImp(stackItem.source)} alt={stackItem.alt} />
              </NavLink>
            </LazyLoadImage>
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
