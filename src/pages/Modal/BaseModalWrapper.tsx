import React from 'react';
import BoardCreate from './boardCreate/BoardCreate';
import Modal from './Modal';
import { Close, DesktopModalContainer, Header } from './ModalPopup.styles';

interface BaseModalWrapperProps {
  isModalVisible: boolean;
  onBackDropClick: () => void;
}

const BaseModalWrapper: React.FC<BaseModalWrapperProps> = ({ isModalVisible, onBackDropClick }) => {
  if (!isModalVisible) {
    return null;
  }
  return (
    <Modal onBackDropClick={onBackDropClick}>
      <DesktopModalContainer>
        <Close onClick={(): void => onBackDropClick()}>x</Close>
        <Header>Add new board</Header>
        <BoardCreate />
      </DesktopModalContainer>
    </Modal>
  );
};

export default BaseModalWrapper;
