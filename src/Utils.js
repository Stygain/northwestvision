import React from 'react';
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

const ImageImp = require.context('./assets', true)

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

export {
    ContentMargin,
    Center,
    ImageImp,
    Placeholder
}
