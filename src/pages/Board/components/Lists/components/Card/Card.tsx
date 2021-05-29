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
  onCurrentCard: (cardID: number) => void;
  onCurrentCardTitle: (cardTitle: string) => void;
};
type Data = {
  title: string;
  list_id: number;
};

const Card: React.FC<Props> = ({ card, listID, onCurrentCard, onCurrentCardTitle }) => {
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

        const dragOverHandler = (e: React.DragEvent<HTMLLIElement>): void => {
          e.preventDefault();
          console.log(e);
        };
        const dragLeaveHandler = (e: React.DragEvent<HTMLLIElement>): void => {
          console.log(e);
        };
        const dragStartHandler = (e: React.DragEvent<HTMLLIElement>): void => {
          console.log(e);
          onCurrentCard(card.id);
          onCurrentCardTitle(card.title);
        };
        const dragEndHandler = (e: React.DragEvent<HTMLLIElement>): void => {
          console.log(e);
        };
        return (
          <li
            className="card list-item"
            id={card.id.toString()}
            draggable
            onDragOver={(e): void => dragOverHandler(e)}
            onDragLeave={(e): void => dragLeaveHandler(e)}
            onDragStart={(e): void => dragStartHandler(e)}
            onDragEnd={(e): void => dragEndHandler(e)}
          >
            <DeleteCard id={card.id} />
            <InputBlock alertState={alertState} inputData={inputData} />
            <span>{card.id}</span>
          </li>
        );
      }}
    </MyContext.Consumer>
  );
};

export default Card;
