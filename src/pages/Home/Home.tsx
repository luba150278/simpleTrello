import React, { useState } from 'react';
import { ADD_BOARD, BOARDS, HOME_PAGE_DESC } from '../../common/constans/messages';
import ModalWrapper from '../Modal/ModalWrapper';
import Boards from './components/boards/Boards';
/**
 * The page has 3 components: the "Add Board" button, the board's list, and modal window (MW) for add a new board.
 * MW is hidden by default and stays visible by clicking the button.
 * @returns Main page
 */
const Main: React.FC = () => {
  const [isModalVisible, setModalVisible] = useState(false); // the state for control MV visibility
  const toggleModal = (): void => {
    setModalVisible((wasModalVisible) => !wasModalVisible);
  };
  return (
    <section>
      <div className="container my-4">
        <button className="btn btn-outline-primary" onClick={toggleModal}>
          {ADD_BOARD}
        </button>
      </div>
      <div className="container">
        <h1>{BOARDS}</h1>
        <p>{HOME_PAGE_DESC}</p>
        <Boards />
      </div>
      <ModalWrapper isModalVisible={isModalVisible} onBackDropClick={toggleModal} startTitle="" />
    </section>
  );
};
export default Main;
