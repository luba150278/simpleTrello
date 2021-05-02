/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import { FaPlus, FaTrashAlt } from 'react-icons/fa';
import { Spinner } from 'reactstrap';
import { useActions } from '../../../../hooks/useActions';
import { useTypeSelector } from '../../../../hooks/useTypeSelector';
import AddCard from '../AddCard/AddCard';
import AddList from '../AddList/AddList';
import './lists.css';

type Props = {
  url: string;
  boardID: string;
};

const Lists: React.FC<Props> = ({ url, boardID }) => {
  const [isCardAddVisible, setCardAddVisible] = useState(false);
  const toggleCardAdd = (): void => {
    setCardAddVisible((wasVisible) => !wasVisible);
  };
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => console.log(event.target.value);
  const { getLists, error, loading } = useTypeSelector((state) => state.lists);
  const { deleteList, fetchLists } = useActions();
  useEffect(() => {
    fetchLists(boardID);
  }, []);

  if (loading) {
    return <Spinner color="success" />;
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
          const card = list.cards[Number(idCard)];

          return (
            <li key={card.id} className="card list-item">
              <h4>{card.title}</h4>
              {card.description !== '' ? <p>{card.description}</p> : null}
            </li>
          );
        });

        return (
          <div className="card list mx-2" key={list.id}>
            <div className="icon__inner">
              <IconContext.Provider value={{ className: 'trash-list' }}>
                <FaTrashAlt
                  onClick={(): void => {
                    deleteList(`${url}/list/${id}`);
                    // fetchLists(boardID);
                  }}
                />
              </IconContext.Provider>
            </div>
            <p>{list.position}</p>
            <input
              type="text"
              className="listTitle"
              placeholder={list.title}
              value={list.title}
              onChange={changeHandler}
            />
            <ul className="list-items">{cards}</ul>
            <div className="iconPlus__inner">
              <IconContext.Provider value={{ className: 'trash-list' }}>
                <FaPlus onClick={toggleCardAdd} />
              </IconContext.Provider>
            </div>
            {isCardAddVisible ? (
              <AddCard url={url} position={list.position} list_id={list.id} boardID={boardID} />
            ) : null}
          </div>
        );
      })
    ) : (
      <h2>Any lists yet. Create your first list!</h2>
    );

  return (
    <div className="lists-main">
      <div className="input-row mb-4">
        <AddList url={url} countLists={arrLenght} boardID={boardID} />
        <div className="count-lists">Всего списков: {arrLenght}</div>
      </div>
      <div className="cards">{lists}</div>
    </div>
  );
};

export default Lists;
