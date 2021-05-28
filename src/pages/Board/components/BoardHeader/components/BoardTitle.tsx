import React, { useRef, useState } from 'react';
import { DANGER_NAME } from '../../../../../common/constans/messages';
import MyContext from '../../../../../common/Context';
import InputBlock from '../../../../../components/InputBlock';
import { callAlert } from '../../../../../functions/callAlert';
import { isValidTitle } from '../../../../../functions/validTitles';
import { useActions } from '../../../../../hooks/useActions';
import { IAlert, IInput } from '../../../../../interfaces/inrefaces';
import DeleteBoard from '../../DeleteBoard/DeleteBoard';

type IData = {
  startTitle: string;
};

type ITitle = {
  title: string;
};

const InputTitle: React.FC<IData> = ({ startTitle }) => {
  const inputEl = useRef<HTMLInputElement>(null);
  const [title, setTitle] = useState<string>(startTitle);
  const startAlert: IAlert = { isShow: false, isDanger: false, text: '' };
  const [alertState, setAlertState] = useState<IAlert>(startAlert);
  const { editItem, fetchLists } = useActions();

  return (
    <MyContext.Consumer>
      {({ boardID }): JSX.Element => {
        const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => setTitle(event.target.value);
        const newData: ITitle = { title };

        function editTitle(): void {
          if (isValidTitle(title)) {
            editItem(newData, boardID);
          } else {
            setAlertState(callAlert(true, true, DANGER_NAME));
            setTimeout(() => {
              setTitle(startTitle);
              setAlertState(callAlert(false, false, ''));
            }, 3000);
          }
        }
        const keyPressHandler = (event: React.KeyboardEvent): void => {
          if (event.key === 'Enter') {
            editTitle();
            fetchLists(boardID);
          }
        };

        const keyUpHandler = (): void => {
          editTitle();
        };

        const blurHandler = (): void => {
          if (startTitle !== title) {
            editTitle();
            fetchLists(boardID);
          }
        };
        const inputData: IInput = {
          title,
          ph: title,
          changeHandler,
          onKeyPress: keyPressHandler,
          onKeyUp: keyUpHandler,
          onBlur: blurHandler,
          cln: 'input-row',
          clni: 'h1',
          ref: inputEl,
        };
        return (
          <div className="card board-header-title mt-4 py-2">
            <InputBlock alertState={alertState} inputData={inputData} />
            <DeleteBoard />
          </div>
        );
      }}
    </MyContext.Consumer>
  );
};
export default InputTitle;
