import React from 'react';
import { LIST_NUMBER } from '../../../../../../common/constans/messages';
import AddList from '../../../AddList/AddList';

type Props = {
  arrLenght: number;
  boardID: string;
  lists: JSX.Element | JSX.Element[];
};
const ListMain: React.FC<Props> = ({ arrLenght, boardID, lists }) => (
  <div className="lists-main">
    <div className="input-row mb-4">
      <AddList countLists={arrLenght} boardID={boardID} />
      <div className="count-lists">
        {LIST_NUMBER} {arrLenght}
      </div>
    </div>
    <div className="cards">{lists}</div>
  </div>
);

export default ListMain;
