import { useState } from 'react';

export const useModal = (initState) => {
  const [modalActivated, setModalActivated] = useState(initState);

  const toggleModal = () => {
    setModalActivated(!modalActivated);
  };

  return [modalActivated, toggleModal];
};
