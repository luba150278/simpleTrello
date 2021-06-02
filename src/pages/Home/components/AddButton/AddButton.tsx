import React, { useState } from 'react';
import { ADD_BOARD } from '../../../../common/constans/messages';
import ModalWrapper from '../../../Modal/ModalWrapper';

const AddButton: React.FC = () => {
  const [isModalVisible, setModalVisible] = useState(false); // the state for control MV visibility
  const toggleModal = (): void => {
    setModalVisible((oldIsVisible) => !oldIsVisible);
  };
  return (
    <div className="container my-4">
      <button className="btn btn-outline-primary" onClick={toggleModal}>
        {ADD_BOARD}
      </button>
      <ModalWrapper
        isModalVisible={isModalVisible}
        onBackDropClick={toggleModal}
        isCard={false}
        card={{
          id: 0,
          position: 0,
          title: '',
          description: '',
          users: [0],
        }}
      />
    </div>
  );
};

export default AddButton;
