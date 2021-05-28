/* eslint-disable no-console */
import React, { useRef, useState } from 'react';
import { DANGER_NAME } from '../../../../../../../common/constans/messages';
import MyContext from '../../../../../../../common/Context';
import InputBlock from '../../../../../../../components/InputBlock';
import { isValidTitle } from '../../../../../../../functions/validTitles';
import { useActions } from '../../../../../../../hooks/useActions';
import { IAlert, IInput } from '../../../../../../../interfaces/inrefaces';

type Props = {
  startTitle: string;
  position: number;
  id: string;
};

type Data = {
  position: number;
  title: string;
};

const ListTitle: React.FC<Props> = ({ startTitle, position, id }) => {
  const [title, setTitle] = useState<string>(startTitle);
  const [isAlert, setAlert] = useState<boolean>(false);
  const inputEl = useRef<HTMLInputElement>(null);
  const { editItem, fetchLists } = useActions();
  return (
    <MyContext.Consumer>
      {({ boardID }): JSX.Element => {
        const newPos: Data = { position, title };
        const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => setTitle(event.target.value);
        function callAlert(): void {
          setAlert(true);
          setTimeout(() => {
            setTitle(startTitle);
            setAlert(false);
          }, 3000);
        }

        function editTitle(update: boolean): void {
          if (isValidTitle(title)) {
            editItem(newPos, `${boardID}/list/${id}`); // /list/<id>

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
        const alertState: IAlert = { isShow: isAlert, isDanger: true, text: DANGER_NAME };
        const inputData: IInput = {
          title,
          ph: title,
          changeHandler,
          onKeyPress: keyPressHandler,
          onKeyUp: keyUpHandler,
          onBlur: blurHandler,
          cln: 'listTitleMain',
          clni: 'listTitle',
          ref: inputEl,
        };
        return (
          <div className="listTitleMain">
            <InputBlock alertState={alertState} inputData={inputData} />
          </div>
        );
      }}
    </MyContext.Consumer>
  );
};

export default ListTitle;
