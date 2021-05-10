import React, { useLayoutEffect } from 'react';
/* import { connect } from 'react-redux'; */
import { Link } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import { ANY_BOARD_YET } from '../../../../common/constans/messages';
import { colorGenerator } from '../../../../functions/cardColorGenerator';
import { useActions } from '../../../../hooks/useActions';
import { useTypeSelector } from '../../../../hooks/useTypeSelector';
// import { fetchBoards } from '../../../../store/actions/boards';
/* import { RootState } from '../../../../store/reducers';
import { BoardsState } from '../../../../store/types/boards'; */
import './boards.css';
/**
 * Get boards list from api
 * @returns Boards List
 */
const Boards: React.FC = () => {
  const { getBoards, error, loading } = useTypeSelector((state) => state.boards);
  const { fetchBoards } = useActions();
  useLayoutEffect(() => {
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
      <h2>{ANY_BOARD_YET}</h2>
    </div>
  );
};

/* const mapStateToProps = (state: RootState): BoardsState => ({ ...state.boards });

export default connect(mapStateToProps, fetchBoards)(Boards); */

export default Boards;
