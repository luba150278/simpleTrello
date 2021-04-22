/* eslint-disable no-console */
import axios from 'axios';
import React, { useState } from 'react';
import api from '../../../common/constans/api';
import { DANGER_BOARD_NAME, SUCCESS_BOARD_NAME } from '../../../common/constans/messages';
import { Alert } from '../../../components/Alert';
import './boardCreate.css';

const url = `${api.baseURL}/board`;
type ITitle = {
  title: string;
};

async function postBoard(newBoard: ITitle): Promise<Response> {
  return axios.post(url, newBoard, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer 123',
    },
  });
}

const BoardCreate: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [isAlert, setAlert] = useState<boolean>(false);
  const [isDanger, setDanger] = useState<boolean>(false);
  const [textAlert, setTextAlert] = useState<string>('');
  const newBoard: ITitle = { title };
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => setTitle(event.target.value);

  function isValidBoardTitle(titleBoard: string): boolean {
    const newStr = titleBoard.trim().replaceAll(/[а-яА-ЯёЁ]|[a-zA-z]|[0-9]|\s|,|-|_|\.+/gm, '');
    console.log(`:${newStr}:${newStr.length}`);
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
            postBoard(newBoard);
            setUpAlert(true, false, SUCCESS_BOARD_NAME);
          } else {
            setUpAlert(true, true, DANGER_BOARD_NAME);
          }
        }}
      >
        Add board
      </button>
    </div>
  );
};

export default BoardCreate;
