/* eslint-disable no-console */
import React, { useState } from 'react';
import { ADD_CARD, DANGER_NAME } from '../../../../common/constans/messages';
import { Alert } from '../../../../components/Alert';
import { isValidTitle } from '../../../../functions/validTitles';
import { useActions } from '../../../../hooks/useActions';
import './addCard.css';

type Props = {
  url: string;
  position: number;
  list_id: number;
  boardID: string;
};

const AddCard: React.FC<Props> = ({ url, position, list_id, boardID }) => {
  const [title, setTitle] = useState<string>('');
  const [isAlert, setAlert] = useState(false);
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => setTitle(event.target.value);
  const { addItem, fetchLists } = useActions();

  function callAlert(): void {
    setAlert(true);
    setTimeout(() => {
      setTitle('');
      setAlert(false);
    }, 3000);
  }
  function clickHandler(): void {
    if (isValidTitle(title)) {
      const newCard = { title, list_id, position };
      addItem(`${url}/card`, newCard);
      fetchLists(boardID);
    } else {
      callAlert();
    }
  }
  return (
    <div className="card-input-outside">
      <Alert show={isAlert} text={DANGER_NAME} danger />
      <div className="card-input mt-2">
        <input
          className="card-title"
          type="text"
          placeholder="Enter card title"
          onChange={changeHandler}
          value={title}
        />
        <button className="btn btn-primary ml-2" onClick={clickHandler}>
          {ADD_CARD}
        </button>
      </div>
    </div>
  );
};

export default AddCard;
