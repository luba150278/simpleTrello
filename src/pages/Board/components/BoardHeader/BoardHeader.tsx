import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { DANGER_NAME } from '../../../../common/constans/messages';
import MyContext from '../../../../common/Context';
import { Alert } from '../../../../components/Alert';
import { isValidTitle } from '../../../../functions/validTitles';
import { useActions } from '../../../../hooks/useActions';
import DeleteBoard from '../DeleteBoard/DeleteBoard';

type IData = {
  startTitle: string;
};

type ITitle = {
  title: string;
};

const BoardHeader: React.FC<IData> = ({ startTitle }) => {
  const [title, setTitle] = useState<string>(startTitle);
  const [isAlert, setAlert] = useState<boolean>(false);
  const [isDanger, setDanger] = useState<boolean>(false);
  const [textAlert, setTextAlert] = useState<string>('');
  const { editItem, fetchLists } = useActions();
  const inputEl = useRef<HTMLInputElement>(null);

  return (
    <MyContext.Consumer>
      {({ boardID }): JSX.Element => {
        function setUpAlert(alrt: boolean, dang: boolean, text: string): void {
          setAlert(alrt);
          setDanger(dang);
          setTextAlert(text);
          setTimeout(() => {
            setTitle(startTitle);
            setAlert(false);
          }, 3000);
        }

        const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => setTitle(event.target.value);
        const newData: ITitle = { title };
        function editTitle(): void {
          if (isValidTitle(title)) {
            editItem(newData, boardID);
          } else {
            setUpAlert(true, true, DANGER_NAME);
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
                  onKeyUp={keyUpHandler}
                  onBlur={blurHandler}
                />

                <DeleteBoard />
              </div>
            </div>
          </div>
        );
      }}
    </MyContext.Consumer>
  );
};

export default BoardHeader;
