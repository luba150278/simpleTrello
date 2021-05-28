import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { useHistory } from 'react-router-dom';
import MyContext from '../../../../common/Context';
import { useActions } from '../../../../hooks/useActions';

const DeleteBoard: React.FC = () => {
  const history = useHistory();
  const { deleteItem } = useActions();
  return (
    <MyContext.Consumer>
      {({ boardID }): JSX.Element => (
        <IconContext.Provider value={{ className: 'trash-list deleteBoard' }}>
          <FaTrashAlt
            onClick={async (): Promise<void> => {
              await deleteItem(boardID);
              history.push('/');
            }}
          />
        </IconContext.Provider>
      )}
    </MyContext.Consumer>
  );
};

export default DeleteBoard;
