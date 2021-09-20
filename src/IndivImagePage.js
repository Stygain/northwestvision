import React from 'react';
import { Redirect, Route, Switch, useParams } from 'react-router-dom';

import { LazyLoadImagePane } from './Utils.js';
import ImagePane from './ImagePane.js';

import images from './data/images.json';


function parseImages(page, props, imageId) {
  var imagePanes = [];
  var swapToggle = false;
  for (var i = 0; i < images[page].length; i++) {
    imagePanes.push(
      <LazyLoadImagePane>
        <ImagePane
          imagePaneInfo={images[page][i]}
          swap={swapToggle}
          page={page}
          index={i} />
      </LazyLoadImagePane>
    );
    swapToggle = !swapToggle;
  }
  return imagePanes;
}

function returnImageBasedOnIndex(page, index) {
  const panelIndex = Math.floor(index / 3);
  console.log("panelIndex:", panelIndex);

  const subIndex = index % 3;
  console.log("subIndex:", subIndex);

  if (subIndex === 0) {
    return images[page][panelIndex].vertical;
  } else if (images[page][panelIndex].stack) {
    return subIndex === 1 ? images[page][panelIndex].stack[0] : images[page][panelIndex].stack[1];
  } else {
    return images[page][panelIndex].vertical2;
  }
}

function ImagePageWithIndex(props) {
  var { id } = useParams();
  console.log("ID", id);
  id = id - 1
  if (id >= 0 && id < (3 * images[props.page].length)) {
    console.log("index is fine");
    const imageSource = returnImageBasedOnIndex(props.page, id);
    console.log("Going to set source to:", imageSource)
    props.parentProps.setModalShow(true);
    props.parentProps.setModalSource(imageSource);

    return (
      <div>
        {parseImages(props.page, props.parentProps, id)}
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
      {console.log("Setting return page to:", props.url)}
      {props.parentProps.setReturnPage(props.url)}
      <Route exact path={props.url}>
        {console.log("No index detected")}
        {parseImages(props.page, props.parentProps)}
      </Route>
      <Route path={props.url + "imageId/:id"}>
        {console.log("Index detected")}
        <ImagePageWithIndex page={props.page} parentProps={props.parentProps} />
      </Route>
    </Switch>
  );
}


export default IndivImagePage;
