import React, { useState } from "react";
import Home from "./components/Home";
import Modal from "./components/Modal";

function App({ movies, movieDetail, showModal }) {
  const [modalActivated, setModalActivated] = useState(showModal);

  const toggleModal = () => {
    setModalActivated(!modalActivated);
  };

  return (
    <>
      <div id='wrap'>
        <Home movies={movies} toggleModal={toggleModal} />
      </div>
      {modalActivated && (
        <Modal movieDetail={movieDetail} toggleModal={toggleModal} />
      )}
    </>
  );
}

export default App;
