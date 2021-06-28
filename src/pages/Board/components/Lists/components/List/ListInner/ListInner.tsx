/* eslint-disable no-console */
import React from 'react';
import { useParams } from 'react-router-dom';
import { TASKS_NUMBER } from '../../../../../../../common/constans/messages';
import { IList } from '../../../../../../../interfaces/inrefaces';
import DeleteList from '../DeleteList/DeleteList';
import AddCardField from '../../AddCardField/AddCardField';
import ListTitle from '../ListTitle/ListTitle';
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
  const { addItem, fetchLists, deleteItem } = useActions();
  const boardParam = useParams<{ id: string }>();
  const boardID = boardParam.id;
  const dropHandler = async (e: React.DragEvent<HTMLDivElement>): Promise<void> => {
    e.preventDefault();
    const ppp = Object.keys(list.cards).map((idCard) => list.cards[Number(idCard)]);
    console.log(ppp);
    const ttt = Object.keys(list.cards).filter((idCard) => list.cards[Number(idCard)].id.toString() === currentCard);

    const position = ttt.length === 0 ? maxCardPos + 1 : maxCardPos;
    const currentListID = e.currentTarget.id;
    const target = Number(currentListID);
    await deleteItem(`${boardID}/card/${currentCard}`);
    const newCard = { title: currentCardTitle, list_id: target, position };
    await addItem(`${boardID}/card`, newCard);
    await fetchLists(boardID);
  };
  const dragOverHandler = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    const ttt = Object.keys(list.cards).filter((idCard) => list.cards[Number(idCard)].id.toString() === currentCard);
    if (
      (cards.length === 0 && !document.getElementById('emptyList')) ||
      (cards.length === 0 && ttt.length === 1 && !document.getElementById('emptyList'))
    ) {
      const ghostEle = document.createElement('div');
      ghostEle.classList.add('emptyList');
      ghostEle.id = 'emptyList';
      ghostEle.innerHTML = currentCardTitle;
      document.getElementById(id.toString())?.appendChild(ghostEle);
    }
  };

  const dragLeaveHandler = (): void => {
    document.getElementById('emptyList')?.remove();
  };
  return (
    <div
      className="card list"
      id={id}
      onDrop={(e): Promise<void> => dropHandler(e)}
      onDragOver={(e): void => dragOverHandler(e)}
      onDragLeave={(): void => dragLeaveHandler()}
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
};
export default ListInner;
