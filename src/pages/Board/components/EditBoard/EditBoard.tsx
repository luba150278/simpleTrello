import React, { useState } from 'react';

const EditBoard: React.FC = () => {
  const [, setModalVisible] = useState(false);
  const toggleModal = (): void => {
    setModalVisible((wasModalVisible) => !wasModalVisible);
  };
  return (
    <button className="btn btn-success editBoard ml-4" onClick={toggleModal}>
      Edit
    </button>
  );
};

export default EditBoard;
