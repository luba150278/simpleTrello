/* eslint-disable no-console */
import React, { useState } from 'react';
import { ADD_BOARD, DANGER_NAME, SUCCESS_BOARD_NAME } from '../../../../common/constans/messages';
import InputBlock from '../../../../components/InputBlock';
import { callAlert } from '../../../../functions/callAlert';
import { isValidTitle } from '../../../../functions/validTitles';
import { useActions } from '../../../../hooks/useActions';
import { IAlert, IInput } from '../../../../interfaces/inrefaces';
import './boardCreate.css';

type ITitle = {
  title: string;
};

const BoardCreate: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const startAlert: IAlert = { isShow: false, isDanger: false, text: '' };
  const [alertState, setAlertState] = useState<IAlert>(startAlert);
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => setTitle(event.target.value);
  const { addItem, fetchBoards } = useActions();
  /*   const clearInput = (): void => {
    setTimeout(() => {
      setTitle('');
      setAlertState(callAlert(false, false, ''));
    }, 5000);
  }; */
  const addFunction = async (): Promise<void> => {
    if (isValidTitle(title)) {
      const newBoard: ITitle = { title };
      const res = await addItem('', newBoard);
      if (res.toString() === 'Created') {
        setAlertState(callAlert(true, false, `${SUCCESS_BOARD_NAME} Your board name is "${title}"`));
        await fetchBoards();
      } else {
        setAlertState(callAlert(true, true, res.toString()));
      }
    } else {
      setAlertState(callAlert(true, true, DANGER_NAME));
    }
    setTitle('');
  };
  const onClckHandler = async (): Promise<void> => {
    addFunction();
  };

  const keyPressHandler = (event: React.KeyboardEvent): void => {
    if (event.key === 'Enter') {
      addFunction();
    }
  };

  const keyUpHandler = (): void => {
    ('');
  };

  const blurHandler = (): void => {
    ('');
  };

  const inputData: IInput = {
    title,
    ph: 'Enter board name',
    changeHandler,
    onKeyPress: keyPressHandler,
    onKeyUp: keyUpHandler,
    onBlur: blurHandler,
    cln: 'fields mb-4',
    clni: 'inputName',
    ref: null,
  };
  return (
    <div className="main-container">
      <InputBlock alertState={alertState} inputData={inputData} />

      <button className="btn btn-success mr-2 btn-new-board" onClick={onClckHandler}>
        {ADD_BOARD}
      </button>
    </div>
  );
};

export default BoardCreate;
