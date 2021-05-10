/* eslint-disable no-console */
import React from 'react';
import { IconContext } from 'react-icons';
import { FaTrashAlt } from 'react-icons/fa';
import MyContext from '../../../../common/Context';
import { useActions } from '../../../../hooks/useActions';

type Props = {
  id: string;
};

const DeleteList: React.FC<Props> = ({ id }) => {
  const { fetchLists, deleteItem } = useActions();
  return (
    <MyContext.Consumer>
      {({ boardID }): JSX.Element => (
        <div className="icon__inner">
          <IconContext.Provider value={{ className: 'trash-list' }}>
            <FaTrashAlt
              onClick={async (): Promise<void> => {
                await deleteItem(`${boardID}/list/${id}`);
                await fetchLists(boardID);
              }}
            />
          </IconContext.Provider>
        </div>
      )}
    </MyContext.Consumer>
  );
};

export default DeleteList;
