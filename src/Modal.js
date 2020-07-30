import React from 'react';
import { Link } from 'react-router-dom';
import './Modal.css';

import { ImageImp } from './Utils.js';

function closeModal(setShow) {
  console.log("Should be turning it off")
  setShow(false);
}

function Modal(props) {
  console.log(props)
  return (
    <Link to={props.returnPage}>
      <div onClick={() => closeModal(props.setShow)}
        className={"modal modal-" + props.show}>
        <img className="modal-content"
          src={ImageImp(props.source["source"])}
          alt={props.source["alt"]} />
        <div className="caption">
          {props.source["alt"]}
        </div>
      </div>
    </Link>
  );
}

export default Modal;
