import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import { ANY_BOARD_YET } from '../../../../common/constans/messages';
import { colorGenerator } from '../../../../functions/cardColorGenerator';
import { useActions } from '../../../../hooks/useActions';
import { useTypeSelector } from '../../../../hooks/useTypeSelector';
import './boards.css';
/**
 * Get boards list from api
 * @returns Boards List
 */
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

  if (getBoards.boards.length > 0) {
    return (
      <div className="boards-row">
        {getBoards.boards.map((board) => (
          <Link
            to={`/board/${board.id}`}
            key={board.id}
            className="card card-boards"
            style={{ background: `${colorGenerator()}` }}
          >
            {board.title}
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div>
      <h2>{ANY_BOARD_YET}</h2>
    </div>
  );
};

export default Boards;
