/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { colorGenerator } from '../../../../functions/cardColorGenerator';
import { useActions } from '../../../../hooks/useActions';
import { useTypeSelector } from '../../../../hooks/useTypeSelector';
import './boards.css';

const Boards: React.FC = () => {
  const { getBoards, error, loading } = useTypeSelector((state) => state.boards);
  const { fetchBoards } = useActions();
  useEffect(() => {
    fetchBoards();
  }, []);
  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  if (getBoards.boards.length > 0) {
    return (
      <div>
        <div className="row">
          {getBoards.boards.map((board) => (
            <Link
              to={`/board/${board.id}`}
              key={board.id}
              className="card col-md-3 mx-2 mb-2"
              style={{ background: `${colorGenerator()}` }}
            >
              {board.title}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1>Boards</h1>
      <h2>Boards wasn't create</h2>
    </div>
  );
};

export default Boards;
