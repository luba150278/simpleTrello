/* eslint-disable no-console */
import React, { useRef, useState } from 'react';
import { DANGER_NAME } from '../../../../../../common/constans/messages';
import MyContext from '../../../../../../common/Context';
import { Alert } from '../../../../../../components/Alert';
// import TitleWithEdition from '../../../../../../components/TitleWithEdition';
import { isValidTitle } from '../../../../../../functions/validTitles';
import { useActions } from '../../../../../../hooks/useActions';
import { ICard } from '../../../../../../interfaces/inrefaces';
import DeleteCard from './DeleteCard/DeleteCard';

type Props = {
  card: ICard;
  listID: number;
};
type Data = {
  title: string;
  list_id: number;
};

const Card: React.FC<Props> = ({ card, listID }) => {
  const inputEl = useRef<HTMLInputElement>(null);
  const [title, setTitle] = useState<string>(card.title);
  const [isAlert, setAlert] = useState<boolean>(false);
  const { editItem, fetchLists } = useActions();

  return (
    <MyContext.Consumer>
      {({ boardID }): JSX.Element => {
        const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => setTitle(event.target.value);
        const newData: Data = { list_id: listID, title };

        function callAlert(): void {
          setAlert(true);
          setTimeout(() => {
            setTitle(card.title);
            setAlert(false);
          }, 3000);
        }

        function editTitle(update: boolean): void {
          if (isValidTitle(title)) {
            editItem(newData, `${boardID}/card/${card.id}`);
            if (update) {
              fetchLists(boardID);
            }
          } else {
            callAlert();
          }
        }
        const keyPressHandler = (event: React.KeyboardEvent): void => {
          if (event.key === 'Enter' || event.key === 'enter') {
            editTitle(true);
          }
        };

        const keyUpHandler = (): void => {
          editTitle(false);
        };

        const blurHandler = (): void => {
          if (card.title !== title) {
            editTitle(true);
          }
        };

        return (
          <li className="card list-item" draggable>
            <DeleteCard id={card.id} />
            <Alert show={isAlert} text={DANGER_NAME} danger />
            <div className="card__inner">
              <input
                ref={inputEl}
                type="text"
                placeholder={card.title}
                value={title}
                onChange={changeHandler}
                onKeyPress={keyPressHandler}
                onKeyUp={keyUpHandler}
                onBlur={blurHandler}
                className="listTitle"
              />
              {card.description !== '' ? <p>{card.description}</p> : null}
            </div>
          </li>
        );
      }}
    </MyContext.Consumer>
  );
};

export default Card;
