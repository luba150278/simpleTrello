import React from 'react';
import { ADD_BOARD_TITLE } from '../../common/constans/messages';
import BoardCreate from '../Home/components/boards/boardCreate/BoardCreate';
import Modal from './Modal';
import { Close, DesktopModalContainer, Header } from './ModalPopup.styles';

interface BaseModalWrapperProps {
  isModalVisible: boolean;
  onBackDropClick: () => void;
  startTitle: string;
}

const BaseModalWrapper: React.FC<BaseModalWrapperProps> = ({ isModalVisible, onBackDropClick, startTitle }) => {
  if (!isModalVisible) {
    return null;
  }
  return (
    <Modal onBackDropClick={onBackDropClick}>
      <DesktopModalContainer>
        <Close onClick={(): void => onBackDropClick()}>x</Close>
        <Header>{ADD_BOARD_TITLE}</Header>
        <BoardCreate startTitle={startTitle} />
      </DesktopModalContainer>
    </Modal>
  );
};

export default BaseModalWrapper;
