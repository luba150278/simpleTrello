/* eslint-disable no-console */
import React, { useState } from 'react';
import { DANGER_NAME } from '../../../../common/constans/messages';
import { Alert } from '../../../../components/Alert';
import { setTime } from '../../../../functions/setTimeOut';
import { isValidTitle } from '../../../../functions/validTitles';
import { useActions } from '../../../../hooks/useActions';
import './addList.css';

type Props = {
  url: string;
  countLists: number;
  boardID: string;
};

const AddList: React.FC<Props> = ({ url, countLists, boardID }) => {
  const [title, setTitle] = useState<string>('');
  const [isAlert, setAlert] = useState<boolean>(false);
  const [isDanger, setDanger] = useState<boolean>(false);
  const [textAlert, setTextAlert] = useState<string>('');
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => setTitle(event.target.value);
  const { addList, fetchLists } = useActions();

  function setUpAlert(alrt: boolean, dang: boolean, text: string): void {
    setAlert(alrt);
    setDanger(dang);
    setTextAlert(text);
    setTimeout(() => {
      setTitle('');
      setAlert(false);
    }, 3000);
  }

  return (
    <div className="list-input-outside">
      <Alert show={isAlert} text={textAlert} danger={isDanger} />
      <div className="list-input mt-2">
        <input type="text" id="addList" placeholder="Enter list name" onChange={changeHandler} value={title} />
        <button
          className="btn btn-primary ml-2"
          onClick={(): void => {
            if (isValidTitle(title)) {
              const newList = { title, position: countLists + 1 };
              addList(`${url}/list`, newList);
              fetchLists(boardID);
              setTime();
            } else {
              setUpAlert(true, true, DANGER_NAME);
            }
          }}
        >
          Add List
        </button>
      </div>
    </div>
  );
};

export default AddList;
