import React from 'react';
// import { IList } from '../../../../../interfaces/inrefaces';
import AddList from '../../../AddList/AddList';

type Props = {
  url: string;
  arrLenght: number;
  boardID: string;
  lists: JSX.Element | JSX.Element[];
};
const ListMain: React.FC<Props> = ({ url, arrLenght, boardID, lists }) => (
  <div className="lists-main">
    <div className="input-row mb-4">
      <AddList url={url} countLists={arrLenght} boardID={boardID} />
      <div className="count-lists">Всего списков: {arrLenght}</div>
    </div>
    <div className="cards">{lists}</div>
  </div>
);

export default ListMain;
