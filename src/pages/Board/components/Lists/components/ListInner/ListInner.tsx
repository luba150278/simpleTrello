import React from 'react';
import { TASKS_NUMBER } from '../../../../../../common/constans/messages';
import { IList } from '../../../../../../interfaces/inrefaces';
import DeleteList from '../../../DeleteList/DeleteList';
import AddCardInput from '../AddCardInput/AddCardInput';
import ListTitle from '../ListTitle/ListTitle';

type Props = {
  list: IList;
  id: string;
  boardID: string;
  cards: JSX.Element[];
};

const ListInner: React.FC<Props> = ({ list, id, boardID, cards }) => (
  <div className="card list mx-2">
    <DeleteList id={id} boardID={boardID} />
    <p>
      {TASKS_NUMBER} {cards.length}
    </p>
    <ListTitle startTitle={list.title} position={list.position} id={id} boardID={boardID} />
    <ul className="list-items">{cards}</ul>
    <AddCardInput list={list} boardID={boardID} />
  </div>
);

export default ListInner;
