import React from 'react';
import { Link } from 'react-router-dom';
import InputTitle from './components/BoardTitle';

type IData = {
  startTitle: string;
};

const BoardHeader: React.FC<IData> = ({ startTitle }) => (
  <div className="board-header container my-4">
    <Link to="/">Home</Link>
    <InputTitle startTitle={startTitle} />
  </div>
);

export default BoardHeader;
