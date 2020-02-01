import React from 'react';
import './ImagePane.css';
import { NavLink } from 'react-router-dom';

//import homeAssets from './assets/home/IMG_3057.jpg';


// function importAll(r) {
//   return r.keys().map(r);
// }
//
// const images = importAll(require.context('./assets/home/', false, /\.(png|jpe?g|svg)$/));
//
// console.log(images);

function ImagePane(props) {
  return (
    <div className="pane">
      <NavLink to={props.source}>
        <img className={props.alignment} src={props.source} alt={props.alt} />
      </NavLink>
    </div>
  );
}


export default ImagePane;
