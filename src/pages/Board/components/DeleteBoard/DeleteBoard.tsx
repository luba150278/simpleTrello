import React from 'react';
import { useHistory } from 'react-router-dom';
import { useActions } from '../../../../hooks/useActions';

type Props = {
  id: string;
};
const DeleteBoard: React.FC<Props> = ({ id }) => {
  const history = useHistory();
  const { deleteItem } = useActions();
  return (
    <button
      className="btn btn-danger deleteBoard ml-4"
      onClick={(): void => {
        deleteItem(id);
        history.push('/');
      }}
    >
      Delete
    </button>
  );
};

export default DeleteBoard;
