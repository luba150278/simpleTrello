/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import api from '../../common/constans/api';
import { useActions } from '../../hooks/useActions';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import BaseModalWrapper from '../Modal/BaseModalWrapper';
import './board.css';
import BoardHeader from './components/BoardHeader/BoardHeader';
import Lists from './components/Lists/Lists';

type TParams = { id: string };

const Board: React.FC<RouteComponentProps<TParams>> = ({ match }) => {
  const url = `${api.baseURL}/board/${match.params.id}`;
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = (): void => {
    setModalVisible((wasModalVisible) => !wasModalVisible);
  };

  const { getLists, error, loading } = useTypeSelector((state) => state.lists);
  const { fetchLists } = useActions();

  useEffect(() => {
    const abortController = new AbortController();
    fetchLists(match.params.id);
    return (): void => {
      abortController.abort();
    };
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  const { title } = getLists;
  return (
    <>
      <BoardHeader url={url} startTitle={title} />
      <Lists url={url} boardID={match.params.id} getLists={getLists} />
      <BaseModalWrapper
        isModalVisible={isModalVisible}
        onBackDropClick={toggleModal}
        startTitle=""
        isCreate={false}
        urlEdit={url}
      />
    </>
  );
};

export default Board;
