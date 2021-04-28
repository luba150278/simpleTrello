import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AddList from '../AddList/AddList';
import DeleteBoard from '../DeleteBoard/DeleteBoard';

type IData = {
  url: string;
  id: string;
};

const BoardHeader: React.FC<IData> = ({ url, id }) => {
  const [, setModalVisible] = useState(false);
  const toggleModal = (): void => {
    setModalVisible((wasModalVisible) => !wasModalVisible);
  };

  return (
    <div className="board-header container my-4">
      <Link to="/">Home</Link>
      <div className="board-header-title">
        <h1>Boards Number: {id}</h1>
        <button className="btn btn-success editBoard ml-4" onClick={toggleModal}>
          Edit
        </button>
        <DeleteBoard url={url} />
      </div>
      <AddList url={url} />
    </div>
  );
};

export default BoardHeader;
