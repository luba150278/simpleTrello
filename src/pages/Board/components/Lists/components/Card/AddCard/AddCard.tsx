/* eslint-disable no-console */
import React, { useState } from 'react';
import { ADD_CARD, DANGER_NAME } from '../../../../../../../common/constans/messages';
import MyContext from '../../../../../../../common/Context';
import { Alert } from '../../../../../../../components/Alert';
import { isValidTitle } from '../../../../../../../functions/validTitles';
import { useActions } from '../../../../../../../hooks/useActions';
import { IAlert } from '../../../../../../../interfaces/inrefaces';
import './addCard.css';

type Props = {
  position: number;
  list_id: number;
};

const AddCard: React.FC<Props> = ({ position, list_id }) => {
  const [title, setTitle] = useState<string>('');
  const [isAlert, setAlert] = useState(false);
  const { addItem, fetchLists } = useActions();
  return (
    <MyContext.Consumer>
      {({ boardID }): JSX.Element => {
        const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => setTitle(event.target.value);
        function callAlert(): void {
          setAlert(true);
          setTimeout(() => {
            setTitle('');
            setAlert(false);
          }, 3000);
        }
        async function clickHandler(): Promise<void> {
          if (isValidTitle(title)) {
            const newCard = { title, list_id, position };
            console.log(newCard);
            await addItem(`${boardID}/card`, newCard);
            await fetchLists(boardID);
          } else {
            callAlert();
          }
        }
        const alertState: IAlert = { isShow: isAlert, isDanger: true, text: DANGER_NAME };
        return (
          <div className="card-input-outside">
            <Alert alertState={alertState} />
            <div className="card-input mt-2">
              <input
                className="card-title"
                type="text"
                placeholder="Enter card title"
                onChange={changeHandler}
                value={title}
              />
              <button className="btn btn-primary ml-2" onClick={clickHandler}>
                {ADD_CARD}
              </button>
            </div>
          </div>
        );
      }}
    </MyContext.Consumer>
  );
};

export default AddCard;
