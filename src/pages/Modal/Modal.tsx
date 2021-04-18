import React, { useState } from 'react';
import './modal.css';

const Modal: React.FC = () => {
  const [active, setActive] = useState<boolean>(false);
  return (
    <div className={active ? 'modal active' : 'modal'} onClick={(): void => setActive(false)}>
      <div className="modal__content card" onClick={(e): void => e.stopPropagation()}>
        <h1>Hello board!</h1>
      </div>
    </div>
  );
};

export default Modal;
