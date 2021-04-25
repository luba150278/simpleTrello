/* eslint-disable no-console */
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps, useHistory } from 'react-router-dom';
import api from '../../common/constans/api';
import { IBoardPage } from '../../interfaces/board-page-interface';
import BaseModalWrapper from '../Modal/BaseModalWrapper';
import './board.css';

type TParams = { id: string };

function Board({ match }: RouteComponentProps<TParams>): JSX.Element {
  const history = useHistory();
  const [list, setTodos] = useState<IBoardPage>();
  useEffect(() => {
    const saved = {
      title: 'My test board',
      lists: [
        {
          id: 1,
          title: 'Планы',
          cards: [
            { id: 1, title: 'помыть кота' },
            { id: 2, title: 'приготовить суп' },
            { id: 3, title: 'сходить в магазин' },
          ],
        },
        {
          id: 2,
          title: 'В процессе',
          cards: [{ id: 4, title: 'посмотреть сериал' }],
        },
        {
          id: 3,
          title: 'Сделано',
          cards: [
            { id: 5, title: 'сделать домашку' },
            { id: 6, title: 'погулять с собакой' },
          ],
        },
      ],
    };
    setTodos(saved);
  }, []);

  const items = list?.lists.map((item) => {
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
        <button className="btn btn-add-board mt-2">Add List</button>
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
