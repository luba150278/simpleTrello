/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Spinner from 'reactstrap/es/Spinner';
import MyContext from '../../common/Context';
import { useActions } from '../../hooks/useActions';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import './board.css';
import BoardHeader from './components/BoardHeader/BoardHeader';
import Lists from './components/Lists/Lists';

type TParams = { id: string };

const Board: React.FC<RouteComponentProps<TParams>> = ({ match }) => {
  const boardID = match.params.id;
  const { getLists, error, loading } = useTypeSelector((state) => state.lists);
  const { fetchLists } = useActions();

  useEffect(() => {
    const abortController = new AbortController();
    fetchLists(boardID);
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

  const { title } = getLists;
  return (
    <>
      <MyContext.Provider
        value={{
          boardID,
        }}
      >
        <BoardHeader startTitle={title} />
        <Lists getLists={getLists} />
      </MyContext.Provider>
    </>
  );
};

export default Board;
