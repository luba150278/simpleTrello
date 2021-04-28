/* eslint-disable no-console */
import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import api from '../../common/constans/api';
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

  return (
    <>
      <BoardHeader url={url} id={match.params.id} />
      <Lists url={url} boardID={match.params.id} />
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
