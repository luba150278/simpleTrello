import React from 'react';
import ReactDOM from 'react-dom';
import './modal.css';

interface ModalProps {
  onBackDropClick: () => void;
}

const Modal: React.FC<ModalProps> = ({ onBackDropClick, children }) =>
  ReactDOM.createPortal(
    <div className="overlay" onClick={onBackDropClick}>
      <div onClick={(e): void => e.stopPropagation()}>{children}</div>
    </div>,
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    document.getElementById('modal-root')!
  );

export default Modal;
