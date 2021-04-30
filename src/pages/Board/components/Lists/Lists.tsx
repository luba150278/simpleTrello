/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { IconContext } from 'react-icons';
import { FaTrashAlt } from 'react-icons/fa';
import { useActions } from '../../../../hooks/useActions';
import { useTypeSelector } from '../../../../hooks/useTypeSelector';
import AddList from '../AddList/AddList';
import './lists.css';

type Props = {
  url: string;
  boardID: string;
};

const Lists: React.FC<Props> = ({ url, boardID }) => {
  // const [title, setTitle] = useState<string>('');
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => console.log(event.target.value);
  const { getLists, error, loading } = useTypeSelector((state) => state.lists);
  const { deleteList } = useActions();
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
        // setTitle(list.title);
        const cards = Object.keys(list.cards).map((idCard) => {
          const card = getLists.lists[Number(idCard)];
          return (
            <li key={card.id} className="card list-item row">
              {card.title}
            </li>
          );
        });

        return (
          <div className="card list col-md-3 mx-2" key={list.id}>
            <div className="icon__inner">
              <IconContext.Provider value={{ className: 'trash-list' }}>
                <FaTrashAlt
                  onClick={(): void => {
                    deleteList(`${url}/list/${id}`);
                    fetchLists(boardID);
                  }}
                />
              </IconContext.Provider>
            </div>
            <input
              type="text"
              className="listTitle"
              placeholder={list.title}
              value={list.title}
              onChange={changeHandler}
            />
            <ul className="list-items">{cards}</ul>
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
      <div className="cards row">{lists}</div>
    </div>
  );
};

export default Lists;
