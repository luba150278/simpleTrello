/* eslint-disable no-console */
import axios from 'axios';
import React, { useState } from 'react';
import { Link, RouteComponentProps, useHistory } from 'react-router-dom';
import api from '../../common/constans/api';
/* import { useActions } from '../../hooks/useActions'; */
import { useTypeSelector } from '../../hooks/useTypeSelector';
import BaseModalWrapper from '../Modal/BaseModalWrapper';
import './board.css';

type TParams = { id: string };

function Board({ match }: RouteComponentProps<TParams>): JSX.Element {
  const history = useHistory();
  const { getLists, error, loading } = useTypeSelector((state) => state.lists);
  /*   const { fetchLists } = useActions();
  useEffect(() => {
    fetchLists(match.params.id);
  }, [getLists]); */
  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }
  const items = getLists?.lists.map((item) => {
    const elements = item.cards.map((cItem) => (
      <li key={cItem.id} className="card board-list-item">
        {cItem.title}
      </li>
    ));
    return (
      <div className="card board" key={item.id}>
        <h4>{item.title}</h4>
        <ul className="board-list">{elements}</ul>
      </div>
    );
  });
  const url = `${api.baseURL}/board/${match.params.id}`;
  async function deleteBoard(): Promise<Response> {
    return axios.delete(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 123',
      },
    });
  }

  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = (): void => {
    setModalVisible((wasModalVisible) => !wasModalVisible);
  };

  type IList = {
    title: string;
    position: number;
  };

  async function addList(newList: IList): Promise<Response> {
    return axios.post(`${url}/list`, newList, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 123',
      },
    });
  }
  return (
    <>
      <div className="board-header container my-4">
        <Link to="/">Home</Link>
        <div className="board-header-title">
          <h1>Boards Number: {match.params.id}</h1>
          <button className="btn btn-success editBoard ml-4" onClick={toggleModal}>
            Edit
          </button>
          <button
            className="btn btn-danger deleteBoard ml-4"
            onClick={(): void => {
              deleteBoard();
              history.push('/');
            }}
          >
            Delete
          </button>
        </div>
        <button
          className="btn btn-add-board mt-2"
          onClick={(): void => {
            const newList = { title: 'aaaa', position: 2 };
            addList(newList);
          }}
        >
          Add List
        </button>
      </div>
      <div className="cards">{items}</div>
      <BaseModalWrapper
        isModalVisible={isModalVisible}
        onBackDropClick={toggleModal}
        startTitle=""
        isCreate={false}
        urlEdit={url}
      />
      ;
    </>
  );
}

export default Board;
