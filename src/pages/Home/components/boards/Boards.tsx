/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import { colorGenerator } from '../../../../functions/cardColorGenerator';
import { useActions } from '../../../../hooks/useActions';
import { useTypeSelector } from '../../../../hooks/useTypeSelector';
// import { store } from '../../../../store';
import './boards.css';

const Boards: React.FC = () => {
  const { getBoards, error, loading } = useTypeSelector((state) => state.boards);
  const { fetchBoards } = useActions();
  useEffect(() => {
    const abortController = new AbortController();
    fetchBoards();
    return (): void => {
      abortController.abort();
    };
  }, []);

  if (loading) {
    return <Spinner color="success" />;
  }

  if (error) {
    return <h2>{error}</h2>;
  }
  // console.log(store.getState().boardAdd.added);
  if (getBoards.boards.length > 0) {
    return (
      <div>
        <div className="row boards-row">
          {getBoards.boards.map((board) => (
            <Link
              to={`/board/${board.id}`}
              key={board.id}
              className="card col-md-3 mx-2"
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
      <h2>Boards wasn't create</h2>
    </div>
  );
};

export default Boards;
