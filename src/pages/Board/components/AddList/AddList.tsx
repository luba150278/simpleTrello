/* eslint-disable no-console */
import React, { useState } from 'react';
import { ADD_LIST, DANGER_NAME } from '../../../../common/constans/messages';
import MyContext from '../../../../common/Context';
import { Alert } from '../../../../components/Alert';
import { isValidTitle } from '../../../../functions/validTitles';
import { useActions } from '../../../../hooks/useActions';
import './addList.css';

type Props = {
  countLists: number;
};

const AddList: React.FC<Props> = ({ countLists }) => {
  const [title, setTitle] = useState<string>('');
  const [isAlert, setAlert] = useState<boolean>(false);
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => setTitle(event.target.value);
  const { addItem, fetchLists } = useActions();
  return (
    <MyContext.Consumer>
      {({ boardID }): JSX.Element => {
        function callAlert(): void {
          setAlert(true);
          setTimeout(() => {
            setTitle('');
            setAlert(false);
          }, 3000);
        }
        function clickHandler(): void {
          if (isValidTitle(title)) {
            const newList = { title, position: countLists + 1 };
            addItem(`${boardID}/list`, newList);
            fetchLists(boardID);
          } else {
            callAlert();
          }
        }
        return (
          <div className="list-input-outside">
            <Alert show={isAlert} text={DANGER_NAME} danger />
            <div className="list-input mt-2">
              <input type="text" id="addList" placeholder="Enter list name" onChange={changeHandler} value={title} />
              <button className="btn btn-primary ml-2" onClick={clickHandler}>
                {ADD_LIST}
              </button>
            </div>
          </div>
        );
      }}
    </MyContext.Consumer>
  );
};

export default AddList;
