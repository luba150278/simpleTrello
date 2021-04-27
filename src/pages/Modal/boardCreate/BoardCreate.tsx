/* eslint-disable no-console */
import axios from 'axios';
import React, { useState } from 'react';
// import api from '../../../common/constans/api';
import { DANGER_BOARD_NAME, SUCCESS_BOARD_NAME, SUCCESS_BOARD_NAME_EDIT } from '../../../common/constans/messages';
import { Alert } from '../../../components/Alert';
import { useActions } from '../../../hooks/useActions';
import './boardCreate.css';

// const url = `${api.baseURL}/board`;
type ITitle = {
  title: string;
};

/* async function postBoard(newBoard: ITitle): Promise<Response> {
  return axios.post(url, newBoard, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer 123',
    },
  });
} */

async function editBoard(newBoard: ITitle, urlEdit: string): Promise<Response> {
  return axios.put(urlEdit, newBoard, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer 123',
    },
  });
}
type IProps = {
  startTitle: string;
  isCreate: boolean;
  urlEdit: string;
};
const BoardCreate: React.FC<IProps> = ({ startTitle, isCreate, urlEdit }) => {
  const [title, setTitle] = useState<string>(startTitle);
  const [isAlert, setAlert] = useState<boolean>(false);
  const [isDanger, setDanger] = useState<boolean>(false);
  const [textAlert, setTextAlert] = useState<string>('');
  const newBoard: ITitle = { title };
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => setTitle(event.target.value);
  const { addBoard } = useActions();
  /*   useEffect(() => {
    addBoard(newBoard);
  }, []); */

  function isValidBoardTitle(titleBoard: string): boolean {
    const newStr = titleBoard.trim().replaceAll(/[а-яА-ЯёЁ]|[a-zA-z]|[0-9]|\s|,|-|_|\.+/gm, '');
    return newStr.length === 0 && titleBoard !== '';
  }

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
    <div className="container">
      <Alert show={isAlert} text={textAlert} danger={isDanger} />
      <div className="fields mb-4">
        <div className="field mr-4">
          <input onChange={changeHandler} value={title} type="text" id="title" placeholder="Enter board name" />
        </div>
      </div>
      <button
        className="btn btn-success mr-2 btn-new-board"
        onClick={(): void => {
          if (isValidBoardTitle(title)) {
            if (isCreate) {
              // postBoard(newBoard);
              addBoard(newBoard);
            } else {
              editBoard(newBoard, urlEdit);
            }
            setUpAlert(true, false, isCreate ? SUCCESS_BOARD_NAME : SUCCESS_BOARD_NAME_EDIT);
          } else {
            setUpAlert(true, true, DANGER_BOARD_NAME);
          }
        }}
      >
        {isCreate ? 'Add board' : 'Edit board'}
      </button>
    </div>
  );
};

export default BoardCreate;
