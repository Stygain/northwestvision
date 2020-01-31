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

export {
    ContentMargin,
    Center,
}
