import React, { useRef, useState } from 'react';
import { DANGER_NAME } from '../common/constans/messages';
import { callAlert } from '../functions/callAlert';
import { editTitle } from '../functions/editTitle';
import { setTime } from '../functions/setTimeOut';
import { Alert } from './Alert';

type Data = {
  title: string;
  listID: number;
};

type Title = {
  title: string;
};

type Pos = {
  position: number;
  title: string;
};

type Props = {
  startTitle: string;
  url: string;
  boardID: string;
  listID: number;
  classEx: string;
  classIn: string;
  chooser: number;
};

const TitleWithEdition: React.FC<Props> = ({ startTitle, url, boardID, listID, classEx, classIn, chooser }) => {
  const [isAlert, setAlert] = useState<boolean>(false);
  const inputEl = useRef<HTMLInputElement>(null);
  const [title, setTitle] = useState<string>(startTitle);
  let newData: Data | Pos | Title;
  if (chooser === 1) newData = { listID, title };
  if (chooser === 2) newData = { title };
  if (chooser === 3) newData = { position: 1, title };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => setTitle(event.target.value);

  function alertVisibility(update: boolean): void {
    if (!editTitle({ update, newData, url, boardID })) {
      setAlert(callAlert(true));
      setTime(3000);
      setTitle(startTitle);
      setAlert(callAlert(false));
    }
  }
  const keyPressHandler = (event: React.KeyboardEvent): void => {
    if (event.key === 'Enter' || event.key === 'enter') {
      alertVisibility(true);
    }
  };

  const keyUpHandler = (): void => {
    alertVisibility(false);
  };

  const blurHandler = (): void => {
    if (startTitle !== title) {
      alertVisibility(true);
    }
  };

  return (
    <>
      <Alert show={isAlert} text={DANGER_NAME} danger />
      <div className={classEx}>
        <input
          ref={inputEl}
          type="text"
          placeholder={startTitle}
          value={title}
          onChange={changeHandler}
          onKeyPress={keyPressHandler}
          onKeyUp={keyUpHandler}
          onBlur={blurHandler}
          className={classIn}
        />
      </div>
    </>
  );
};

export default TitleWithEdition;
