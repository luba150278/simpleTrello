/* eslint-disable no-console */
import React from 'react';
import { IconContext } from 'react-icons';
import { FaTrashAlt } from 'react-icons/fa';
import { useActions } from '../../../../hooks/useActions';

type Props = {
  id: string;
  boardID: string;
};

const DeleteList: React.FC<Props> = ({ id, boardID }) => {
  const { fetchLists, deleteItem } = useActions();
  return (
    <div className="icon__inner">
      <IconContext.Provider value={{ className: 'trash-list' }}>
        <FaTrashAlt
          onClick={(): void => {
            deleteItem(`${boardID}/list/${id}`);
            fetchLists(boardID);
          }}
        />
      </IconContext.Provider>
    </div>
  );
};

export default DeleteList;
