/* eslint-disable no-console */
import React from 'react';
import { TASKS_NUMBER } from '../../../../../../common/constans/messages';
import { IList } from '../../../../../../interfaces/inrefaces';
import DeleteList from '../../../DeleteList/DeleteList';
import AddCardInput from '../AddCardInput/AddCardInput';
import ListTitle from '../ListTitle/ListTitle';

type Props = {
  list: IList;
  id: string;
  cards: JSX.Element[];
  maxCardPos: number;
  dragStartHandler(e: React.MouseEvent<HTMLDivElement>): void;
};

const ListInner: React.FC<Props> = ({ list, id, cards, maxCardPos, dragStartHandler }) => {
  const focusHandler = (e: React.FocusEvent<HTMLDivElement>): void => {
    // e.stopPropagation();
    const target = e.currentTarget as HTMLDivElement;

    console.log(`list2:${target.id}`);
  };
  return (
    <div
      className="card list mx-2"
      id={id}
      onClick={(e): void => dragStartHandler(e)}
      onBlur={(e): void => focusHandler(e)}
    >
      <DeleteList id={id} />
      <p>
        {TASKS_NUMBER} {cards.length}
      </p>
      <ListTitle startTitle={list.title} position={list.position} id={id} />

      <ul className="list-items">{cards}</ul>
      <AddCardInput list={list} maxCardPos={maxCardPos} />
    </div>
  );
};
export default ListInner;
