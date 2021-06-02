/* eslint-disable no-console */
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { ADD_BOARD } from '../../../../common/constans/messages';
import ModalWrapper from '../../../../components/Modal/ModalWrapper';
import 'react-toastify/dist/ReactToastify.css';

const AddButton: React.FC = () => {
  const notify = (message: string): React.ReactText =>
    toast.success(message, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const [isModalVisible, setModalVisible] = useState(false); // the state for control MV visibility
  const toggleModal = (message: string): void => {
    setModalVisible((oldIsVisible) => !oldIsVisible);
    if (message !== '' && isModalVisible) notify(message);
  };
  return (
    <div className="container my-4">
      <button className="btn btn-outline-primary" onClick={(): void => toggleModal('')}>
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
      <ToastContainer />
    </div>
  );
};

export default AddButton;
