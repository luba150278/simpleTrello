import React, { useEffect } from 'react';
import { useActions } from '../../../../hooks/useActions';
import { useTypeSelector } from '../../../../hooks/useTypeSelector';

type ID = {
  boardID: string;
};

const Lists: React.FC<ID> = ({ boardID }) => {
  const { getLists, error, loading } = useTypeSelector((state) => state.lists);
  const { fetchLists } = useActions();
  useEffect(() => {
    fetchLists(boardID);
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }
  const arr = Object.keys(getLists.lists);
  const arrLenght = arr.length;
  const lists =
    arrLenght !== 0 ? (
      Object.keys(getLists.lists).map((id) => {
        const list = getLists.lists[Number(id)];
        const cards = Object.keys(list.cards).map((idCard) => {
          const card = getLists.lists[Number(idCard)];
          return (
            <li key={card.id} className="card board-list-item">
              {card.title}
            </li>
          );
        });
        return (
          <div className="card board" key={list.id}>
            <h4>{list.title}</h4>
            <ul className="board-list">{cards}</ul>
          </div>
        );
      })
    ) : (
      <h2>Any lists yet. Create your first list!</h2>
    );

  return <div className="cards">{lists}</div>;
};

export default Lists;
