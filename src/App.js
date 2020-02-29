import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import NavBar from './NavBar.js';
import { ContentMargin } from './Utils.js';
import ImagePage from './ImagePage.js';
import Modal from './Modal.js';
import Footer from './Footer.js';

import images from './data/images.json'

function App() {
  const [modalShow, setModalShow] = useState(false);
  const [modalSource, setModalSource] = useState(images["home"][0]["vertical"]);
  return (
    <div>
      <NavBar />
      <Modal
        show={modalShow}
        setShow={setModalShow}
        source={modalSource} />
      <Route path='/'>
        <ImagePage
          setModalShow={setModalShow}
          setModalSource={setModalSource} />
      </Route>
      <Route exact path='/404'>
        <ContentMargin>
          <h1>
            404 page
          </h1>
        </ContentMargin>
      </Route>
      <Footer />
    </div>
  );
}

export default App;
