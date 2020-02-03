import React from 'react';
import './Modal.css';

import { ImageImp } from './Utils.js';

function closeModal(setShow) {
  setShow(false);
}

function Modal(props) {
  console.log(props)
  return (
    <div onClick={() => closeModal(props.setShow)}
      className={"modal modal-" + props.show}>
      <img className="modal-content"
        src={ImageImp(props.source["source"])}
        alt={props.source["alt"]} />
      <div className="caption">
        {props.source["alt"]}
      </div>
    </div>
  );
}

export default Modal;
