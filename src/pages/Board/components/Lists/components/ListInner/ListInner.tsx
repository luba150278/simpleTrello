import React from 'react';
import { IList } from '../../../../../../interfaces/inrefaces';
import DeleteList from '../../../DeleteList/DeleteList';
import AddCardInput from '../AddCardInput/AddCardInput';
import ListTitle from '../ListTitle/ListTitle';

type Props = {
  list: IList;
  url: string;
  id: string;
  boardID: string;
  cards: JSX.Element[];
};

const ListInner: React.FC<Props> = ({ list, url, id, boardID, cards }) => (
  <div className="card list mx-2">
    <DeleteList url={url} id={id} boardID={boardID} />
    <p>The tasks number on the list: {cards.length}</p>
    <ListTitle startTitle={list.title} position={list.position} url={`${url}/list/${id}`} boardID={boardID} />
    <ul className="list-items">{cards}</ul>
    <AddCardInput url={url} list={list} boardID={boardID} />
  </div>
);

export default ListInner;
