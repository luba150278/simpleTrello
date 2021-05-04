/* eslint-disable no-console */
import React, { useState } from 'react';
import { DANGER_NAME, SUCCESS_BOARD_NAME } from '../../../common/constans/messages';
import { Alert } from '../../../components/Alert';
import { isValidTitle } from '../../../functions/validTitles';
import { useActions } from '../../../hooks/useActions';
import './boardCreate.css';

type ITitle = {
  title: string;
};

type IProps = {
  startTitle: string;
  isCreate: boolean;
  urlEdit: string;
};
const BoardCreate: React.FC<IProps> = ({ startTitle, isCreate }) => {
  const [title, setTitle] = useState<string>(startTitle);
  const [isAlert, setAlert] = useState<boolean>(false);
  const [isDanger, setDanger] = useState<boolean>(false);
  const [textAlert, setTextAlert] = useState<string>('');
  const newBoard: ITitle = { title };
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => setTitle(event.target.value);
  const { addBoard, fetchBoards } = useActions();

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
    <div className="main-container">
      <Alert show={isAlert} text={textAlert} danger={isDanger} />
      <div className="fields mb-4">
        <div className="field mr-4">
          <input
            onChange={changeHandler}
            value={title}
            type="text"
            id="title"
            placeholder="Enter board name"
            className="inputName"
          />
        </div>
      </div>
      <button
        className="btn btn-success mr-2 btn-new-board"
        onClick={(): void => {
          if (isValidTitle(title)) {
            addBoard(newBoard);
            fetchBoards();
            setUpAlert(true, false, SUCCESS_BOARD_NAME);
          } else {
            setUpAlert(true, true, DANGER_NAME);
          }
        }}
      >
        {isCreate ? 'Add board' : 'Edit board'}
      </button>
    </div>
  );
};

export default BoardCreate;
