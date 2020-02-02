import React from 'react';
import './ImagePane.css';
import { NavLink } from 'react-router-dom';
import LazyLoad from 'react-lazyload';

import { ImageImp, Placeholder } from './Utils.js';


function ImagePane(props) {
  return (
    <div className="pane">
      {props.imagePaneInfo.map(paneItem => {
        return (
          <LazyLoad
            offset={-100}
            placeholder={<Placeholder />}
            debounce={300}
            once='true'
          >
            <div className={paneItem.alignment}>
              <NavLink to={paneItem.source}>
                <img src={ImageImp(paneItem.source)} alt={paneItem.alt} />
              </NavLink>
            </div>
          </LazyLoad>
        );
      })}
    </div>
  );
}


export default ImagePane;
