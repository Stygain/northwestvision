import React from 'react';
import './ImagePane.css';
import { NavLink } from 'react-router-dom';
import LazyLoad from 'react-lazyload';

//import homeAssets from './assets/home/IMG_3057.jpg';


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
                <img src={imageImp(paneItem.source)} alt={paneItem.alt} />
              </NavLink>
            </div>
          </LazyLoad>
        );
      })}
    </div>
  );
}


export default ImagePane;
