import React from 'react';
import './ImagePane.css';

import { ImageImp, LazyLoadImage } from './Utils.js';


function onClickHandler(setModalShow, setModalSource, source) {
  console.log("Clicked")
  // console.log(setModalShow)
  setModalShow(true)
  setModalSource(source)
}

function generateImagePane(props) {
  if (props.swap) {
    return (
      <div className="pane">
        <ImageStack
          stackInfo={props.imagePaneInfo.stack}
          setModalShow={props.setModalShow}
          setModalSource={props.setModalSource} />
        <div className="pane-vert">
          <LazyLoadImage alignment="vert">
            <img onClick={() => onClickHandler(props.setModalShow, props.setModalSource, props.imagePaneInfo.vertical)}
              className={props.imagePaneInfo.vertical.alignment}
              src={ImageImp(props.imagePaneInfo.vertical.source)}
              alt={props.imagePaneInfo.vertical.alt} />
          </LazyLoadImage>
        </div>
      </div>
    );
  } else {
    return (
      <div className="pane">
        <div className="pane-vert">
          <LazyLoadImage alignment="vert">
            <img onClick={() => onClickHandler(props.setModalShow, props.setModalSource, props.imagePaneInfo.vertical)}
              className={props.imagePaneInfo.vertical.alignment}
              src={ImageImp(props.imagePaneInfo.vertical.source)}
              alt={props.imagePaneInfo.vertical.alt} />
          </LazyLoadImage>
        </div>
        <ImageStack stackInfo={props.imagePaneInfo.stack}
          setModalShow={props.setModalShow}
          setModalSource={props.setModalSource} />
      </div>
    );
  }
}

function ImageStack(props) {
  return (
    <div className="pane-stack-outer">
      <div className="pane-stack">
        {props.stackInfo.map(stackItem => {
          return (
            <LazyLoadImage alignment="horiz">
              <img onClick={() => onClickHandler(props.setModalShow, props.setModalSource, stackItem)}
                className={stackItem.alignment}
                src={ImageImp(stackItem.source)}
                alt={stackItem.alt} />
            </LazyLoadImage>
          );
        })}
      </div>
    </div>
  );
}

function ImagePane(props) {
  return (
    <div>
      {generateImagePane(props)}
    </div>
  );
}


export default ImagePane;
