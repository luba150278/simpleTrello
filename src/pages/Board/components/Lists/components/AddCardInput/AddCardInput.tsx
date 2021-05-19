import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { IList } from '../../../../../../interfaces/inrefaces';
import AddCard from '../../../AddCard/AddCard';

import './addCardInput.css';

type Props = {
  list: IList;
  maxCardPos: number;
};

const AddCardInput: React.FC<Props> = ({ list, maxCardPos }) => {
  const [isCardAddVisible, setCardAddVisible] = useState(false);
  const toggleCardAdd = (): void => {
    setCardAddVisible((wasVisible) => !wasVisible);
  };
  return (
    <div className="addCardInput">
      <div className="iconPlus__inner">
        <IconContext.Provider value={{ className: 'trash-list' }}>
          <FaPlus onClick={toggleCardAdd} />
        </IconContext.Provider>
      </div>
      {isCardAddVisible ? <AddCard position={maxCardPos + 1} list_id={list.id} /> : null}
    </div>
  );
};

export default AddCardInput;
