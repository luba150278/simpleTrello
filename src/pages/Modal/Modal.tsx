import React from 'react';
import './modal.css';

interface ModalProps {
  onBackDropClick: () => void;
}

const Modal: React.FC<ModalProps> = ({ onBackDropClick, children }) => (
  <div className="overlay" onClick={onBackDropClick}>
    <div onClick={(e): void => e.stopPropagation()}>{children}</div>
  </div>
);

export default Modal;
