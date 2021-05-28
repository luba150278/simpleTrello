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

        const getNextElement = (cursorPosition: number, currentElement: HTMLLIElement): HTMLLIElement | null => {
          // Получаем объект с размерами и координатами
          const currentElementCoord = currentElement.getBoundingClientRect();
          // Находим вертикальную координату центра текущего элемента
          const currentElementCenter = currentElementCoord.y + currentElementCoord.height / 2;

          // Если курсор выше центра элемента, возвращаем текущий элемент
          // В ином случае — следующий DOM-элемент
          const nextElement =
            cursorPosition < currentElementCenter
              ? currentElement
              : (currentElement.nextElementSibling as HTMLLIElement);

          return nextElement;
        };

        const dragOverHandler = (e: React.DragEvent<HTMLLIElement>): void => {
          e.preventDefault();
          const activeElement = document
            ?.querySelector(`.list`)
            ?.querySelector(`.list-items`)
            ?.querySelector(`.selected`);

          if (!activeElement) return;
          const currentElement = e.target as HTMLLIElement;

          // const isMoveable = activeElement !== currentElement && currentElement.classList.contains(`.card`);
          const isMoveable = activeElement.id !== e.currentTarget.id;

          if (!isMoveable) {
            return;
          }
          const nextElement = getNextElement(e.clientY, currentElement);
          console.log(`:${activeElement?.id}`);
          if (!nextElement) return;
          // Проверяем, нужно ли менять элементы местами
          if (activeElement === nextElement.previousElementSibling || activeElement.id === nextElement.id) {
            // Если нет, выходим из функции, чтобы избежать лишних изменений в DOM
            return;
          }

          // console.log(nextElement);

          document?.querySelector(`.list`)?.appendChild(activeElement);
        };

        const dropHandler = (e: React.DragEvent<HTMLLIElement>): void => {
          e.preventDefault();
        };
        let a: string;
        const dragLeaveHandler = (e: React.DragEvent<HTMLLIElement>): void => {
          if (a === e.currentTarget.id) e.currentTarget.style.background = '#EAFCAB';
        };

        const dragStartHandler = (e: React.DragEvent<HTMLLIElement>): void => {
          const target = e.target as HTMLLIElement;
          target.style.background = 'gray';
          target.classList.add(`selected`);
          a = target.id;
          console.log(a);
        };

        const dragEndHandler = (e: React.DragEvent<HTMLLIElement>): void => {
          const target = e.target as HTMLLIElement;
          target.classList.remove(`selected`);
          target.style.background = '#EAFCAB';
        };

        return (
          <li
            className="card list-item"
            id={card.id.toString()}
            draggable
            onDragOver={(e): void => dragOverHandler(e)}
            onDragLeave={dragLeaveHandler}
            onDragStart={(e): void => dragStartHandler(e)}
            onDragEnd={dragEndHandler}
            onDrop={(e): void => dropHandler(e)}
          >
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
              <span>{card.id}</span>
              {card.description !== '' ? <p>{card.description}</p> : null}
            </div>
          </li>
        );
      }}
    </MyContext.Consumer>
  );
};

export default Card;
