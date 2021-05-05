/* eslint-disable no-console */
import React from 'react';
import { IconContext } from 'react-icons';
import { FaTrashAlt } from 'react-icons/fa';
import { setTime } from '../../../../../../../functions/setTimeOut';
import { useActions } from '../../../../../../../hooks/useActions';

type Props = {
  url: string;
  id: number;
  boardID: string;
};

const DeleteCard: React.FC<Props> = ({ url, id, boardID }) => {
  const { fetchLists, deleteItem } = useActions();
  return (
    <div className="icon__inner mr-2 my-2">
      <IconContext.Provider value={{ className: 'trash-list' }}>
        <FaTrashAlt
          onClick={(): void => {
            deleteItem(`${url}/card/${id}`);
            setTime(3);
            fetchLists(boardID);
          }}
        />
      </IconContext.Provider>
    </div>
  );
};

export default DeleteCard;
