import React, { useRef } from "react";
import ReactDOM from "react-dom";

interface Props {
  onClose: () => void;
}

const Modal: React.FC<Props> = ({ onClose }) => {
  const modalContainer = useRef<HTMLDivElement>(null);
  const container =
    modalContainer.current || document.querySelector(".modal-container");
  if (!container) {
    return null;
  }
  return ReactDOM.createPortal(
    <div>
      <div onClick={onClose} className='fixed inset-0 bg-gray-300 opacity-80'>
        X
      </div>
      <div className='fixed inset-40 bg-white p-10 '>Iam Modal</div>
    </div>,
    container
  );
};

export default Modal;
