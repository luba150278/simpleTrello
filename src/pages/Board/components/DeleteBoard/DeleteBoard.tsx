import React from 'react';
import { useHistory } from 'react-router-dom';
import MyContext from '../../../../common/Context';
import { useActions } from '../../../../hooks/useActions';

const DeleteBoard: React.FC = () => {
  const history = useHistory();
  const { deleteItem } = useActions();
  return (
    <MyContext.Consumer>
      {({ boardID }): JSX.Element => (
        <button
          className="btn btn-danger deleteBoard ml-4"
          onClick={(): void => {
            deleteItem(boardID);
            history.push('/');
          }}
        >
          Delete
        </button>
      )}
    </MyContext.Consumer>
  );
};

export default DeleteBoard;
