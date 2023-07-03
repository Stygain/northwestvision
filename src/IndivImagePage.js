import React, { useState, useEffect } from 'react';
import { Redirect, Route, Switch, useParams } from 'react-router-dom';

import { Log } from './Utils.js';
import ImagePane from './ImagePane.js';

import images from './data/images.json';


function parseImages(page, props, imageId) {
  var imagePanes = [];
  var swapToggle = false;
  for (var i = 0; i < images[page].length; i++) {
    imagePanes.push(
      <ImagePane
        imagePaneInfo={images[page][i]}
        swap={swapToggle}
        page={page}
        index={i} />
    );
    swapToggle = !swapToggle;
  }
  return imagePanes;
}

function returnImageBasedOnIndex(page, index) {
  const panelIndex = Math.floor(index / 3);
  Log("panelIndex: " + panelIndex);

  const subIndex = index % 3;
  Log("subIndex: " + subIndex);

  if (subIndex === 0) {
    return images[page][panelIndex].vertical;
  } else if (images[page][panelIndex].stack) {
    return subIndex === 1 ? images[page][panelIndex].stack[0] : images[page][panelIndex].stack[1];
  } else {
    return images[page][panelIndex].vertical2;
  }
}

const useKeyPress = function (targetKey) {
  const [keyPressed, setKeyPressed] = useState(false);

  React.useEffect(() => {
    function downHandler({ key }) {
      if (key === targetKey) {
        setKeyPressed(true);
      }
    }

    const upHandler = ({ key }) => {
      if (key === targetKey) {
        setKeyPressed(false);
      }
    };

    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, [targetKey]);

  return keyPressed;
};

function ImagePageWithIndex(props) {
  var { id } = useParams();

  const [index, setIndex] = useState(parseInt(id)-1);
  const rightPress = useKeyPress("ArrowRight");
  const leftPress = useKeyPress("ArrowLeft");

  useEffect(() => {
    if (rightPress) {
      if (index < (3 * images[props.page].length) - 1)
      {
        setIndex(index + 1);
      }
    }
  }, [index, rightPress, props.page]);

  useEffect(() => {
    if (leftPress) {
      if (index > 0)
      {
        setIndex(index - 1);
      }
    }
  }, [index, leftPress]);

  if (index >= 0 && index < (3 * images[props.page].length)) {
    Log("index is fine: " + index);
    const imageSource = returnImageBasedOnIndex(props.page, index);
    Log("Going to set source to: " + imageSource)
    props.parentProps.setModalShow(true);
    props.parentProps.setModalSource(imageSource);

    return (
      <div>
        {parseImages(props.page, props.parentProps, index)}
      </div>
    );
  } else {
    return (
      <Redirect to="/404" />
    );
  }
}

function IndivImagePage(props) {
  return (
    <Switch>
      {Log("Setting return page to: " + props.url)}
      {props.parentProps.setReturnPage(props.url)}
      <Route exact path={props.url}>
        {Log("No index detected")}
        {parseImages(props.page, props.parentProps)}
      </Route>
      <Route path={props.url + "imageId/:id"}>
        {Log("Index detected")}
        <ImagePageWithIndex page={props.page} parentProps={props.parentProps} />
      </Route>
    </Switch>
  );
}


export default IndivImagePage;
