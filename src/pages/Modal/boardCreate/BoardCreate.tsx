/* eslint-disable no-console */
import React, { useState } from 'react';
import { DANGER_NAME, SUCCESS_BOARD_NAME, SUCCESS_BOARD_NAME_EDIT } from '../../../common/constans/messages';
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
const BoardCreate: React.FC<IProps> = ({ startTitle, isCreate, urlEdit }) => {
  const [title, setTitle] = useState<string>(startTitle);
  const [isAlert, setAlert] = useState<boolean>(false);
  const [isDanger, setDanger] = useState<boolean>(false);
  const [textAlert, setTextAlert] = useState<string>('');
  const newBoard: ITitle = { title };
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => setTitle(event.target.value);
  const { addBoard } = useActions();
  const { editBoard } = useActions();
  const { fetchBoards } = useActions();

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
          if (isValidTitle(title)) {
            if (isCreate) {
              addBoard(newBoard);
              fetchBoards();
            } else {
              editBoard(newBoard, urlEdit);
              fetchBoards();
            }
            // fetchBoards();
            setUpAlert(true, false, isCreate ? SUCCESS_BOARD_NAME : SUCCESS_BOARD_NAME_EDIT);
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
