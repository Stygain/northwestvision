import React from 'react';
import './ImagePane.css';
import { NavLink } from 'react-router-dom';
import LazyLoad from 'react-lazyload';

import { ImageImp, Placeholder } from './Utils.js';


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

function ImagePane(props) {
  return (
    <div className="pane">
      <div className="pane-vert">
        <LazyLoad
          offset={-100}
          placeholder={<Placeholder />}
          debounce={300}
          once='true'
        >
          <NavLink to={props.imagePaneInfo.vertical.source}>
            <img className={props.imagePaneInfo.vertical.alignment} src={ImageImp(props.imagePaneInfo.vertical.source)} alt={props.imagePaneInfo.vertical.alt} />
          </NavLink>
        </LazyLoad>
      </div>
      <ImageStack stackInfo={props.imagePaneInfo.stack} />
    </div>
  );
}


export default ImagePane;
