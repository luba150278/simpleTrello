/* eslint-disable no-console */
import React, { useRef, useState } from 'react';
import { DANGER_NAME } from '../../../../../../common/constans/messages';
import MyContext from '../../../../../../common/Context';
import InputBlock from '../../../../../../components/InputBlock';
import { isValidTitle } from '../../../../../../functions/validTitles';
import { useActions } from '../../../../../../hooks/useActions';
import { IAlert, ICard, IInput } from '../../../../../../interfaces/inrefaces';
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
          if (event.key === 'Enter') {
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
        const alertState: IAlert = { isShow: isAlert, isDanger: true, text: DANGER_NAME };
        const inputData: IInput = {
          title,
          ph: card.title,
          changeHandler,
          onKeyPress: keyPressHandler,
          onKeyUp: keyUpHandler,
          onBlur: blurHandler,
          cln: 'card__inner',
          clni: 'listTitle',
          ref: inputEl,
        };
        return (
          <li className="card list-item" id={card.id.toString()}>
            <DeleteCard id={card.id} />
            <InputBlock alertState={alertState} inputData={inputData} />
          </li>
        );
      }}
    </MyContext.Consumer>
  );
};

export default Card;
