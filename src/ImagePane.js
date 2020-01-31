import React, { useState, useEffect } from 'react';
import './ImagePane.css';
import { NavLink } from 'react-router-dom';

import images from './data/images.json';


function ImagePane(props) {
  return (
    <NavLink to={props.source}>
      <img className={props.alignment} src={props.source} alt={props.alt} />
    </NavLink>
  );
}


export default ImagePane;
