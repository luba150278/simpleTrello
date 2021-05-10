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
};

const ListInner: React.FC<Props> = ({ list, id, cards }) => (
  <div className="card list mx-2">
    <DeleteList id={id} />
    <p>
      {TASKS_NUMBER} {cards.length}
    </p>
    <ListTitle startTitle={list.title} position={list.position} id={id} />
    <ul className="list-items">{cards}</ul>
    <AddCardInput list={list} />
  </div>
);

export default ListInner;
