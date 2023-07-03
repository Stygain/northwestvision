import React, { useState } from 'react';

import NavBar from './NavBar.js';
import ImagePage from './ImagePage.js';
import Modal from './Modal.js';
import Footer from './Footer.js';

import images from './data/images.json'

function App(props) {
  const [modalShow, setModalShow] = useState(false);
  const [modalSource, setModalSource] = useState(images["home"][0]["vertical"]);
  const [returnPage, setReturnPage] = useState("/");

  return (
    <div>
      <NavBar />
      <Modal
        show={modalShow}
        setShow={setModalShow}
        source={modalSource}
        returnPage={returnPage} />
      <ImagePage
        setModalShow={setModalShow}
        setModalSource={setModalSource}
        setReturnPage={setReturnPage} />
      <Footer />
    </div>
  );
}

export default App;
