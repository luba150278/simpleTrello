/* eslint-disable no-console */
import React, { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DANGER_NAME } from '../../../../../../common/constans/messages';
import InputBlock from '../../../../../../components/InputBlock';
import { isValidTitle } from '../../../../../../functions/validTitles';
import { useActions } from '../../../../../../hooks/useActions';
import { IAlert, ICard, IInput } from '../../../../../../interfaces/inrefaces';
import ModalWrapper from '../../../../../../components/Modal/ModalWrapper';
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
  let ghostEle;
  const { id } = useParams<{ id: string }>();
  const inputEl = useRef<HTMLInputElement>(null);
  const [title, setTitle] = useState<string>(card.title);
  const [isAlert, setAlert] = useState<boolean>(false);
  const { editItem, fetchLists } = useActions();
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = (): void => {
    setModalVisible((wasModalVisible) => !wasModalVisible);
  };

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
      editItem(newData, `${id}/card/${card.id}`);
      if (update) {
        fetchLists(id);
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
      cursorPosition < currentElementCenter ? currentElement : (currentElement.nextElementSibling as HTMLLIElement);

    return nextElement;
  };
  const dragOverHandler = (e: React.DragEvent<HTMLLIElement>): void => {
    e.preventDefault();
  };

  const dragEnterHandler = (e: React.DragEvent<HTMLLIElement>, position: number): void => {
    e.preventDefault();
    const activeElement = document.getElementById(activeCard.toString()) as HTMLLIElement;
    const currentElement = e.currentTarget as HTMLLIElement;
    const nextElement = getNextElement(e.clientY, currentElement) as HTMLLIElement;
    // Проверяем, нужно ли менять элементы местами
    if ((nextElement && activeElement === nextElement.previousElementSibling) || activeElement === nextElement) {
      return;
    }
    console.log(`pos:${position}`);
    try {
      document.getElementById(listID.toString())?.insertBefore(activeElement, nextElement);
      console.log('app-next');
      console.log(card.id); // верх
      console.log('app-active');
      console.log(activeElement); // низ
    } catch (err) {
      document.getElementById(listID.toString())?.append(activeElement, nextElement);
      /*       console.log('aaaaa');
      console.log(`${nextElement.id}:${card.position}`); // нижний
      console.log(activeElement.id); // верхний */
    }
  };
  const dragLeaveHandler = (e: React.DragEvent<HTMLLIElement>): void => {
    // document.getElementById(e.currentTarget.id.toString())?.classList.add('hidden');
    // document.getElementById(activeCard.toString())?.classList.add('hidden');
    console.log(`leave:${e.currentTarget.id}:hhh:${activeCard}`);
    // document.getElementById('emptyList2')?.remove();
  };

  const dragStartHandler = (e: React.DragEvent<HTMLLIElement>, position: number): void => {
    onCurrentCard(card.id);
    onCurrentCardTitle(card.title);
    console.log(`start:${card.id}`);
    console.log(`posSt:${position}`);
    ghostEle = document.createElement('div');
    ghostEle.classList.add('dragging');
    ghostEle.id = 'dragging';
    ghostEle.innerHTML = card.title.toString();

    document.getElementById(card.id.toString())?.appendChild(ghostEle);
    setTimeout(() => {
      const ghostEle2 = document.createElement('p');
      ghostEle2.classList.add('emptyList2');
      ghostEle2.id = 'emptyList2';
      ghostEle2.innerHTML = '';
      document.getElementById(card.id.toString())?.prepend(ghostEle2);
      document.getElementById(card.id.toString())?.classList.add('hidden');
    }, 0);

    // Customize the drag image
    e.dataTransfer.setDragImage(ghostEle, 0, 0);
  };

  return !isModalVisible ? (
    <li
      className="card list-item"
      id={card.id.toString()}
      draggable
      onDragOver={(e): void => dragOverHandler(e)}
      onDragLeave={(e): void => dragLeaveHandler(e)}
      onDragStart={(e): void => dragStartHandler(e, card.position)}
      onDragEnter={(e): void => dragEnterHandler(e, card.position)}
      onDoubleClick={(): void => toggleModal()}
    >
      <DeleteCard id={card.id} />
      <InputBlock alertState={alertState} inputData={inputData} />
      <span>
        {card.id}:{card.position}
      </span>
    </li>
  ) : (
    <ModalWrapper isModalVisible={isModalVisible} onBackDropClick={toggleModal} isCard card={card} />
  );
};

export default Card;
