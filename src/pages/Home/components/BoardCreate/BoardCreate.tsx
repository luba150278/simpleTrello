/* eslint-disable no-console */
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { ADD_BOARD, DANGER_NAME, SUCCESS_BOARD_NAME } from '../../../../common/constans/messages';
import InputBlock from '../../../../components/InputBlock';
import { isValidTitle } from '../../../../functions/validTitles';
import { useActions } from '../../../../hooks/useActions';
import { IAlert, IInput } from '../../../../interfaces/inrefaces';
import './boardCreate.css';
import 'react-toastify/dist/ReactToastify.css';

type ITitle = {
  title: string;
};

type Props = {
  onBackDropClick: (message: string) => void;
};

const BoardCreate: React.FC<Props> = ({ onBackDropClick }) => {
  const notify = (message: string): React.ReactText =>
    toast.error(message, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const [title, setTitle] = useState<string>('');
  const startAlert: IAlert = { isShow: false, isDanger: false, text: '' };
  const [alertState] = useState<IAlert>(startAlert);
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => setTitle(event.target.value);
  const { addItem, fetchBoards } = useActions();

  const addFunction = async (): Promise<void> => {
    if (isValidTitle(title)) {
      const newBoard: ITitle = { title };
      const res = await addItem('', newBoard);
      if (res.toString() === 'Created') {
        await fetchBoards();
        onBackDropClick(`${SUCCESS_BOARD_NAME} Your board name is "${title}"`);
      } else {
        notify(res.toString());
      }
    } else {
      notify(DANGER_NAME);
    }
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

      <button className="btn btn-success mr-2 btn-new-board" onClick={addFunction}>
        {ADD_BOARD}
      </button>
    </div>
  );
};

export default BoardCreate;
