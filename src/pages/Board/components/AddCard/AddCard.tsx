import React, { useState } from 'react';
import { DANGER_NAME, SUCCESS_LIST_NAME } from '../../../../common/constans/messages';
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
  const [isAlert, setAlert] = useState<boolean>(false);
  const [isDanger, setDanger] = useState<boolean>(false);
  const [textAlert, setTextAlert] = useState<string>('');
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => setTitle(event.target.value);
  const { addCard, fetchLists } = useActions();

  function setUpAlert(alrt: boolean, dang: boolean, text: string): void {
    setAlert(alrt);
    setDanger(dang);
    setTextAlert(text);
    setTimeout(() => {
      setTitle('');
      setAlert(false);
    }, 5000);
  }

  return (
    <div className="card-input-outside">
      <Alert show={isAlert} text={textAlert} danger={isDanger} />
      <div className="card-input mt-2">
        <input
          className="card-title"
          type="text"
          placeholder="Enter card title"
          onChange={changeHandler}
          value={title}
        />
        <button
          className="btn btn-primary ml-2"
          onClick={(): void => {
            if (isValidTitle(title)) {
              const newCard = { title, list_id, position };
              addCard(`${url}/card`, newCard);
              fetchLists(boardID);
              setUpAlert(true, false, SUCCESS_LIST_NAME);
            } else {
              setUpAlert(true, true, DANGER_NAME);
            }
          }}
        >
          Add Card
        </button>
      </div>
    </div>
  );
};

export default AddCard;
