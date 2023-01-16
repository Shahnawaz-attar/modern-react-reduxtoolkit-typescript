import React, { useState } from "react";
import Buttons from "../../components/uiComponents/Buttons";
import Modal from "../../components/uiComponents/Modal";

const ModalPage: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleClick = () => {
    setShowModal(!showModal);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div className='relative flex justify-center'>
      <Buttons color='warning' type='outline' onClick={handleClick}>
        {showModal ? "close" : "open"}
      </Buttons>
      {showModal && <Modal onClose={handleModalClose} />}
    </div>
  );
};

export default ModalPage;
