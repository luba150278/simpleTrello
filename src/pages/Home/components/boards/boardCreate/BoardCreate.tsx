/* eslint-disable no-console */
import React, { useState } from 'react';
import { DANGER_NAME, SUCCESS_BOARD_NAME } from '../../../../../common/constans/messages';
import { Alert } from '../../../../../components/Alert';
import { callAlert } from '../../../../../functions/callAlert';
import { isValidTitle } from '../../../../../functions/validTitles';
import { useActions } from '../../../../../hooks/useActions';
import { IAlert } from '../../../../../interfaces/inrefaces';
import './boardCreate.css';

type ITitle = {
  title: string;
};

type IProps = {
  startTitle: string;
};

const BoardCreate: React.FC<IProps> = ({ startTitle }) => {
  const [title, setTitle] = useState<string>(startTitle);
  const startAlert: IAlert = { isShow: false, isDanger: false, text: '' };
  const [alertState, setAlertState] = useState<IAlert>(startAlert);
  const newBoard: ITitle = { title };
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => setTitle(event.target.value);
  const { addItem, fetchBoards } = useActions();

  const onClckHandler = async (): Promise<void> => {
    if (isValidTitle(title)) {
      const res = await addItem('', newBoard);
      if (res.toString() === 'Created') {
        setAlertState(callAlert(true, false, SUCCESS_BOARD_NAME));
        await fetchBoards();
      } else {
        setAlertState(callAlert(true, true, res.toString()));
      }
    } else {
      setAlertState(callAlert(true, true, DANGER_NAME));
    }
    setTimeout(() => {
      setTitle('');
      setAlertState(callAlert(false, false, ''));
    }, 5000);
  };

  return (
    <div className="main-container">
      <Alert isShow={alertState.isShow} isDanger={alertState.isDanger} text={alertState.text} />
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
      <button className="btn btn-success mr-2 btn-new-board" onClick={onClckHandler}>
        Add board
      </button>
    </div>
  );
};

export default BoardCreate;
