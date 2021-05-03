/* eslint-disable no-console */
import React, { useRef, useState } from 'react';
import { DANGER_NAME } from '../../../../../../common/constans/messages';
import { Alert } from '../../../../../../components/Alert';
import { isValidTitle } from '../../../../../../functions/validTitles';
import { useActions } from '../../../../../../hooks/useActions';

type Props = {
  startTitle: string;
  position: number;
  url: string;
  boardID: string;
};

type Data = {
  position: number;
  title: string;
};

const ListTitle: React.FC<Props> = ({ startTitle, position, url, boardID }) => {
  const [title, setTitle] = useState<string>(startTitle);
  const [isAlert, setAlert] = useState<boolean>(false);
  const [isDanger, setDanger] = useState<boolean>(false);
  const [textAlert, setTextAlert] = useState<string>('');
  const newPos: Data = { position, title };
  const inputEl = useRef<HTMLInputElement>(null);
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => setTitle(event.target.value);

  function setUpAlert(alrt: boolean, dang: boolean, text: string): void {
    setAlert(alrt);
    setDanger(dang);
    setTextAlert(text);
    setTimeout(() => {
      setTitle(startTitle);
      setAlert(false);
    }, 3000);
  }

  const { editList, fetchLists } = useActions();

  function editTile(): void {
    if (isValidTitle(title)) {
      editList(newPos, url);
      fetchLists(boardID);
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
    <div className="listTitleMain">
      <Alert show={isAlert} text={textAlert} danger={isDanger} />
      <input
        ref={inputEl}
        type="text"
        placeholder={startTitle}
        value={title}
        onChange={changeHandler}
        onKeyPress={keyPressHandler}
        onBlur={blurHandler}
        className="listTitle"
      />
    </div>
  );
};

export default ListTitle;
