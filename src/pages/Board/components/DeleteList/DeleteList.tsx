import React from 'react';
import { IconContext } from 'react-icons';
import { FaTrashAlt } from 'react-icons/fa';
import { useActions } from '../../../../hooks/useActions';

type Props = {
  url: string;
  id: string;
  boardID: string;
};

const DeleteList: React.FC<Props> = ({ url, id, boardID }) => {
  const { fetchLists, deleteList } = useActions();
  return (
    <div className="icon__inner">
      <IconContext.Provider value={{ className: 'trash-list' }}>
        <FaTrashAlt
          onClick={(): void => {
            deleteList(`${url}/list/${id}`);
            fetchLists(boardID);
          }}
        />
      </IconContext.Provider>
    </div>
  );
};

export default DeleteList;
