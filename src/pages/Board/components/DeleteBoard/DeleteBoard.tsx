import React from 'react';
import { useHistory } from 'react-router-dom';
import { setTime } from '../../../../functions/setTimeOut';
import { useActions } from '../../../../hooks/useActions';

type IUrl = {
  url: string;
};

const DeleteBoard: React.FC<IUrl> = ({ url }) => {
  const history = useHistory();
  const { deleteItem } = useActions();
  return (
    <button
      className="btn btn-danger deleteBoard ml-4"
      onClick={(): void => {
        deleteItem(url);
        setTime(3);
        history.push('/');
      }}
    >
      Delete
    </button>
  );
};

export default DeleteBoard;
