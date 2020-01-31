import React, { useState, useEffect } from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

import dataTypes from './data/dataTypes.json'


function NavBarContent() {
  let width = window.innerWidth;

  if (width > 1300) {
    return (
      <div className='navbar'>
        <NavLink className="title" to="/">Northwest Vision</NavLink>
        <ul>
          {dataTypes["dataTypes"].map(({name, url}) => {
            return (<li className="navlink" key={url}>
              <NavLink to={url}>
                {name}
              </NavLink>
            </li>);
          })}
        </ul>
      </div>
    );
  } else {
    return (
      <div className='navbar'>
        <NavLink className="title" to="/">Northwest Vision</NavLink>
        <div className="dropdown">
          <div className="button">
            <p>&#9776;</p>
          </div>
          <div className="dropdown-content">
            {dataTypes["dataTypes"].map(({name, url}) => {
              return (
                <NavLink to={url}>
                  {name}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

function NavBar(props) {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  })
  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }

    window.addEventListener('resize', handleResize);

    return (() => {
      window.removeEventListener('resize', handleResize)});
  });

  return (
    <div>
      {NavBarContent()}
    </div>
  );
}


export default NavBar;
