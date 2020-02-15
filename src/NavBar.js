import React, { useState, useEffect } from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

import dataTypes from './data/dataTypes.json'


function NavBar(props) {
  const [ open, setOpen ] = useState(false);
  return (
    <div className='navbar'>
      <NavLink className="title" to="/">Northwest Vision</NavLink>
      <div className={open ? "button-container open" : "button-container"} onClick={() => {
        setOpen(!open);
      }}>
        <div className="hamburger-button">
          <div className={open ? "bar1 open" : "bar1"}></div>
          <div className={open ? "bar2 open" : "bar2"}></div>
          <div className={open ? "bar3 open" : "bar3"}></div>
        </div>
      </div>
      <div className={open ? "navlist open" : "navlist"}>
        <ul>
          <li className="navlink home" key="/">
            <NavLink to="/" onClick={() => {
              setOpen(!open);
            }}>
              Home
            </NavLink>
          </li>
          {dataTypes["dataTypes"].map(({name, url}) => {
            return (<li className="navlink" key={url}>
              <NavLink to={url} onClick={() => {
                setOpen(!open);
              }}>
                {name}
              </NavLink>
            </li>);
          })}
        </ul>
      </div>
    </div>
  );
}


export default NavBar;
