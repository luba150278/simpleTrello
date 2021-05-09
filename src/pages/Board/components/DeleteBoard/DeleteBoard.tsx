import React from 'react';
import { useHistory } from 'react-router-dom';
import { useActions } from '../../../../hooks/useActions';

const DeleteBoard: React.FC = () => {
  const history = useHistory();
  const { deleteItem } = useActions();
  return (
    <button
      className="btn btn-danger deleteBoard ml-4"
      onClick={(): void => {
        deleteItem('');
        history.push('/');
      }}
    >
      Delete
    </button>
  );
};

export default DeleteBoard;
