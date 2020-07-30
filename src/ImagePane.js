import React from 'react';
import { Link } from 'react-router-dom';
import './ImagePane.css';

import { ImageImp, LazyLoadImage } from './Utils.js';


function returnIndexBasedOnPageAndIndex(page, index, subIndex) {
  var retval = (index * 3) + subIndex + 1;
  if (page === "home") {
    return "/imageId/" + retval;
  } else {
    return "/" + page + "/imageId/" + retval;
  }
}

function generateImagePane(props) {
  if (props.swap) {
    return (
      <div className="pane">
        <ImageStack
          page={props.page}
          index={props.index}
          stackInfo={props.imagePaneInfo.stack} />
        <div className="pane-vert">
          <LazyLoadImage alignment="vert">
            <Link to={returnIndexBasedOnPageAndIndex(props.page, props.index, 0)}>
              <img
                className={props.imagePaneInfo.vertical.alignment}
                src={ImageImp(props.imagePaneInfo.vertical.source)}
                alt={props.imagePaneInfo.vertical.alt} />
            </Link>
          </LazyLoadImage>
        </div>
      </div>
    );
  } else {
    return (
      <div className="pane">
        <div className="pane-vert">
          <LazyLoadImage alignment="vert">
            <Link to={returnIndexBasedOnPageAndIndex(props.page, props.index, 0)}>
              <img
                className={props.imagePaneInfo.vertical.alignment}
                src={ImageImp(props.imagePaneInfo.vertical.source)}
                alt={props.imagePaneInfo.vertical.alt} />
            </Link>
          </LazyLoadImage>
        </div>
        <ImageStack
          page={props.page}
          index={props.index}
          stackInfo={props.imagePaneInfo.stack} />
      </div>
    );
  }
}

function ImageStack(props) {
  return (
    <div className="pane-stack-outer">
      <div className="pane-stack">
        <LazyLoadImage alignment="horiz">
          <Link to={returnIndexBasedOnPageAndIndex(props.page, props.index, 1)}>
            <img
              className={props.stackInfo[0].alignment}
              src={ImageImp(props.stackInfo[0].source)}
              alt={props.stackInfo[0].alt} />
          </Link>
        </LazyLoadImage>
        <LazyLoadImage alignment="horiz">
          <Link to={returnIndexBasedOnPageAndIndex(props.page, props.index, 2)}>
            <img
              className={props.stackInfo[1].alignment}
              src={ImageImp(props.stackInfo[1].source)}
              alt={props.stackInfo[1].alt} />
          </Link>
        </LazyLoadImage>
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
