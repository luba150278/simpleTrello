import React from 'react';
import { IconContext } from 'react-icons';
import { FaTimes } from 'react-icons/fa';
import { ADD_BOARD_TITLE } from '../../common/constans/messages';
import { ICard } from '../../interfaces/inrefaces';
import CardDisplay from '../../pages/Board/components/Lists/components/Card/CardDisplay/CardDisplay';
import BoardCreate from '../../pages/Home/components/BoardCreate/BoardCreate';
import Modal from './Modal';
import { Close, DesktopModalContainer, Header } from './ModalPopup.styles';

interface BaseModalWrapperProps {
  isModalVisible: boolean;
  onBackDropClick: (message: string) => void;
  isCard: boolean;
  card: ICard;
}

const BaseModalWrapper: React.FC<BaseModalWrapperProps> = ({ isModalVisible, onBackDropClick, isCard, card }) => {
  if (!isModalVisible) {
    return null;
  }
  const headerTitle = isCard ? card.title : ADD_BOARD_TITLE;
  const main = (
    <DesktopModalContainer>
      <Close>
        <IconContext.Provider value={{ className: 'close-icon' }}>
          <FaTimes onClick={(): void => onBackDropClick('')} />
        </IconContext.Provider>
      </Close>
      <Header>{headerTitle}</Header>
      {!isCard ? <BoardCreate onBackDropClick={onBackDropClick} /> : <CardDisplay card={card} />}
    </DesktopModalContainer>
  );

  return <Modal onBackDropClick={onBackDropClick}>{main}</Modal>;
};

export default BaseModalWrapper;
