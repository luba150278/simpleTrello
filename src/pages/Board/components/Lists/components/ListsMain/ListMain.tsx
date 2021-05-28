import React from 'react';
import { LIST_NUMBER } from '../../../../../../common/constans/messages';
import AddList from '../../../AddList/AddList';

type Props = {
  arrLenght: number;
  maxListPos: number;
  lists: JSX.Element | JSX.Element[];
};
const ListMain: React.FC<Props> = ({ arrLenght, maxListPos, lists }) => (
  <div className="lists-main container">
    <div className="input-row mb-4">
      <AddList maxListPos={maxListPos} />
      <div className="count-lists">
        {LIST_NUMBER} {arrLenght}
      </div>
    </div>
    <div className="cards">{lists}</div>
  </div>
);

export default ListMain;
