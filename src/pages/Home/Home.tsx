import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BaseModalWrapper from '../Modal/BaseModalWrapper';
import Boards from './components/boards/Boards';

const Main: React.FC = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = (): void => {
    setModalVisible((wasModalVisible) => !wasModalVisible);
  };
  return (
    <section>
      <div className="container mb-4">
        <Link className="board-title mr-4" to="/boardCreate">
          Add Board
        </Link>
        <button onClick={toggleModal}>Modal</button>
      </div>
      <div className="container">
        <h1>My Boards</h1>
        <p>This is a training React-project. An analogue of the "Trello" service.</p>
        <Boards />
      </div>
      <BaseModalWrapper isModalVisible={isModalVisible} onBackDropClick={toggleModal} />
    </section>
  );
};
export default Main;
