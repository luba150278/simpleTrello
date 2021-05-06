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
  const newPos: Data = { position, title };
  const inputEl = useRef<HTMLInputElement>(null);
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => setTitle(event.target.value);
  const { editItem, fetchLists } = useActions();

  function callAlert(): void {
    setAlert(true);
    setTimeout(() => {
      setTitle(startTitle);
      setAlert(false);
    }, 3000);
  }

  function editTitle(update: boolean): void {
    if (isValidTitle(title)) {
      editItem(newPos, url);
      if (update) {
        fetchLists(boardID);
      }
    } else {
      callAlert();
    }
  }
  const keyPressHandler = (event: React.KeyboardEvent): void => {
    if (event.key === 'Enter') {
      editTitle(true);
    }
  };

  const keyUpHandler = (): void => {
    editTitle(false);
  };

  const blurHandler = (): void => {
    if (startTitle !== title) {
      editTitle(true);
    }
  };
  return (
    <div className="listTitleMain">
      <Alert show={isAlert} text={DANGER_NAME} danger />
      <input
        ref={inputEl}
        type="text"
        placeholder={title}
        value={title}
        onChange={changeHandler}
        onKeyPress={keyPressHandler}
        onKeyUp={keyUpHandler}
        onBlur={blurHandler}
        className="listTitle"
      />
    </div>
  );
};

export default ListTitle;
