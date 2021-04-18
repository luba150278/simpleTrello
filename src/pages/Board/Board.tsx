import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { IBoardPage } from '../../interfaces/board-page-interface';
import './board.css';

type TParams = { id: string };

function Board({ match }: RouteComponentProps<TParams>): JSX.Element {
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

  return (
    <>
      <div className="board-header container my-4">
        <Link to="/">Home</Link>
        <h1>Boards Number: {match.params.id}</h1>
        <button className="btn btn-add-board mt-2">Add List</button>
      </div>
      <div className="cards">{items}</div>
    </>
  );
}

export default Board;
