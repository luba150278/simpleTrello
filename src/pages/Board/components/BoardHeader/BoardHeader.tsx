import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { DANGER_NAME, SUCCESS_BOARD_NAME_EDIT } from '../../../../common/constans/messages';
import { Alert } from '../../../../components/Alert';
import { isValidTitle } from '../../../../functions/validTitles';
import { useActions } from '../../../../hooks/useActions';
import DeleteBoard from '../DeleteBoard/DeleteBoard';

type IData = {
  url: string;
  startTitle: string;
};

type ITitle = {
  title: string;
};

const BoardHeader: React.FC<IData> = ({ url, startTitle }) => {
  const [title, setTitle] = useState<string>(startTitle);
  const [isAlert, setAlert] = useState<boolean>(false);
  const [isDanger, setDanger] = useState<boolean>(false);
  const [textAlert, setTextAlert] = useState<string>('');
  function setUpAlert(alrt: boolean, dang: boolean, text: string): void {
    setAlert(alrt);
    setDanger(dang);
    setTextAlert(text);
    setTimeout(() => {
      setTitle(startTitle);
      setAlert(false);
    }, 3000);
  }
  const { editBoard } = useActions();
  const inputEl = useRef<HTMLInputElement>(null);
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => setTitle(event.target.value);
  const newBoard: ITitle = { title };
  function editTile(): void {
    if (isValidTitle(title)) {
      setUpAlert(true, false, SUCCESS_BOARD_NAME_EDIT);
      editBoard(newBoard, url);
    } else {
      setUpAlert(true, true, DANGER_NAME);
    }
  }
  const keyPressHandler = (event: React.KeyboardEvent): void => {
    if (event.key === 'Enter') {
      editTile();
    }
  };

  const blurHandler = (): void => {
    if (startTitle !== title) {
      editTile();
    }
  };
  return (
    <div className="board-header container my-4">
      <Link to="/">Home</Link>
      <div className="board-header-title mt-4">
        <Alert show={isAlert} text={textAlert} danger={isDanger} />
        <div className="input-row">
          <input
            className="h1"
            ref={inputEl}
            type="text"
            placeholder={title}
            value={title}
            onChange={changeHandler}
            onKeyPress={keyPressHandler}
            onBlur={blurHandler}
          />

          <DeleteBoard url={url} />
        </div>
      </div>
    </div>
  );
};

export default BoardHeader;
