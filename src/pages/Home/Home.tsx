import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Modal/Modal';
import Boards from './components/boards/Boards';

const Main: React.FC = () => {
  const [modalActive, setModalActive] = useState(true);
  return (
    <section>
      <div className="container mb-4">
        <Link className="board-title mr-4" to="/boardCreate">
          Add Board
        </Link>
        <button onClick={(): void => setModalActive(true)}>Modal</button>
      </div>
      <div className="container">
        <h1>My Boards</h1>
        <p>This is a training React-project. An analogue of the "Trello" service.</p>
        <Boards />
      </div>
      <Modal active={modalActive} setActive={setModalActive} />
    </section>
  );
};
export default Main;
