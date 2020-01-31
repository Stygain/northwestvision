import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

import dataTypes from './data/dataTypes.json'


function NavBar(props) {
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
}


export default NavBar;
