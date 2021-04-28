import React from 'react';
import { Link } from 'react-router-dom';
import DeleteBoard from '../DeleteBoard/DeleteBoard';
import EditBoard from '../EditBoard/EditBoard';

type IData = {
  url: string;
  id: string;
};

const BoardHeader: React.FC<IData> = ({ url, id }) => (
  <div className="board-header container my-4">
    <Link to="/">Home</Link>
    <div className="board-header-title">
      <h1>Boards Number: {id}</h1>
      <EditBoard />
      <DeleteBoard url={url} />
    </div>
  </div>
);

export default BoardHeader;
