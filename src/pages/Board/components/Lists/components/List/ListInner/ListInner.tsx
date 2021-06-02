/* eslint-disable no-console */
import React from 'react';
import { TASKS_NUMBER } from '../../../../../../../common/constans/messages';
import { IList } from '../../../../../../../interfaces/inrefaces';
import DeleteList from '../DeleteList/DeleteList';
import AddCardField from '../../AddCardField/AddCardField';
import ListTitle from '../ListTitle/ListTitle';
import MyContext from '../../../../../../../common/Context';
import { useActions } from '../../../../../../../hooks/useActions';

type Props = {
  list: IList;
  id: string;
  cards: JSX.Element[];
  maxCardPos: number;
  currentCard: string;
  currentCardTitle: string;
};

const ListInner: React.FC<Props> = ({ list, id, cards, maxCardPos, currentCard, currentCardTitle }) => {
  const { deleteItem, addItem, fetchLists } = useActions();
  const position = maxCardPos + 1;
  return (
    <MyContext.Consumer>
      {({ boardID }): JSX.Element => {
        const dropHandler = async (e: React.DragEvent<HTMLDivElement>): Promise<void> => {
          e.preventDefault();
          const target = Number(e.currentTarget.id);
          await deleteItem(`${boardID}/card/${currentCard}`);
          const newCard = { title: currentCardTitle, list_id: target, position };
          await addItem(`${boardID}/card`, newCard);
          await fetchLists(boardID);
        };
        const dragOverHandler = (e: React.DragEvent<HTMLDivElement>): void => {
          e.preventDefault();
        };
        return (
          <div
            className="card list"
            id={id}
            onDrop={(e): Promise<void> => dropHandler(e)}
            onDragOver={(e): void => dragOverHandler(e)}
          >
            <DeleteList id={id} />
            <p>
              {TASKS_NUMBER} {cards.length}
            </p>
            <ListTitle startTitle={list.title} position={list.position} id={id} />
            <span>{id}</span>
            <ul className="list-items">{cards}</ul>
            <AddCardField list={list} maxCardPos={maxCardPos} />
          </div>
        );
      }}
    </MyContext.Consumer>
  );
};
export default ListInner;
