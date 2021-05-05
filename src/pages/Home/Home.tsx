import React, { useState } from 'react';
import BaseModalWrapper from '../Modal/BaseModalWrapper';
import Boards from './components/boards/Boards';

const Main: React.FC = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = (): void => {
    setModalVisible((wasModalVisible) => !wasModalVisible);
  };
  return (
    <section>
      <div className="container my-4">
        <button className="btn btn-outline-primary" onClick={toggleModal}>
          Add Board
        </button>
      </div>
      <div className="container">
        <h1>Boards</h1>
        <p>This is a training React-project. An analogue of the "Trello" service.</p>
        <Boards />
      </div>
      <BaseModalWrapper isModalVisible={isModalVisible} onBackDropClick={toggleModal} startTitle="" />
    </section>
  );
};
export default Main;
