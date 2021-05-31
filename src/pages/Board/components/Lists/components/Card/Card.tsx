/* eslint-disable no-console */
import React, { useRef, useState } from 'react';
import { DANGER_NAME } from '../../../../../../common/constans/messages';
import MyContext from '../../../../../../common/Context';
import InputBlock from '../../../../../../components/InputBlock';
import { isValidTitle } from '../../../../../../functions/validTitles';
import { useActions } from '../../../../../../hooks/useActions';
import { IAlert, ICard, IInput } from '../../../../../../interfaces/inrefaces';
import ModalWrapper from '../../../../../Modal/ModalWrapper';
import DeleteCard from './DeleteCard/DeleteCard';

type Props = {
  card: ICard;
  listID: number;
  onCurrentCard: (cardID: number) => void;
  onCurrentCardTitle: (cardTitle: string) => void;
  activeCard: number;
};
type Data = {
  title: string;
  list_id: number;
};

const Card: React.FC<Props> = ({ card, listID, onCurrentCard, onCurrentCardTitle, activeCard }) => {
  const inputEl = useRef<HTMLInputElement>(null);
  const [title, setTitle] = useState<string>(card.title);
  const [isAlert, setAlert] = useState<boolean>(false);
  const { editItem, fetchLists } = useActions();
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = (): void => {
    setModalVisible((wasModalVisible) => !wasModalVisible);
  };
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
          event.stopPropagation();
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
        const getNextElement = (cursorPosition: number, currentElement: HTMLLIElement): HTMLLIElement => {
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
        };

        const dragEnterHandler = (e: React.DragEvent<HTMLLIElement>): void => {
          e.preventDefault();
          const activeElement = document.getElementById(activeCard.toString()) as HTMLLIElement;
          const currentElement = e.currentTarget as HTMLLIElement;
          const nextElement = getNextElement(e.clientY, currentElement) as HTMLLIElement;
          console.log(nextElement.id);
          // Проверяем, нужно ли менять элементы местами
          if ((nextElement && activeElement === nextElement.previousElementSibling) || activeElement === nextElement) {
            return;
          }

          try {
            document.getElementById(listID.toString())?.insertBefore(activeElement, nextElement);
          } catch (err) {
            document.getElementById(listID.toString())?.append(activeElement, nextElement);
          }
        };
        const dragLeaveHandler = (): void => {
          console.log('e');
        };
        const dragStartHandler = (): void => {
          onCurrentCard(card.id);
          onCurrentCardTitle(card.title);
        };

        return !isModalVisible ? (
          <li
            className="card list-item"
            id={card.id.toString()}
            draggable
            onDragOver={(e): void => dragOverHandler(e)}
            onDragLeave={(): void => dragLeaveHandler()}
            onDragStart={(): void => dragStartHandler()}
            onDragEnter={(e): void => dragEnterHandler(e)}
            onDoubleClick={toggleModal}
          >
            <DeleteCard id={card.id} />
            <InputBlock alertState={alertState} inputData={inputData} />
            <span>{card.id}</span>
          </li>
        ) : (
          <ModalWrapper isModalVisible={isModalVisible} onBackDropClick={toggleModal} isCard card={card} />
        );
      }}
    </MyContext.Consumer>
  );
};

export default Card;
