import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

import dataTypes from './data/dataTypes.json'


function NavBar(props) {
  return (
    <div className='navbar'>
      <ul>
        <NavLink to="/">Northwest Vision</NavLink>
        {dataTypes["dataTypes"].map(({name, url}) => {
          return (<li key={url}>
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
