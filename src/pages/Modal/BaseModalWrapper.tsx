import React from 'react';
import BoardCreate from '../Home/components/boards/boardCreate/BoardCreate';
import Modal from './Modal';
import { Close, DesktopModalContainer, Header } from './ModalPopup.styles';

interface BaseModalWrapperProps {
  isModalVisible: boolean;
  onBackDropClick: () => void;
  startTitle: string;
  isCreate: boolean;
  urlEdit: string;
}

const BaseModalWrapper: React.FC<BaseModalWrapperProps> = ({
  isModalVisible,
  onBackDropClick,
  startTitle,
  isCreate,
  urlEdit,
}) => {
  if (!isModalVisible) {
    return null;
  }
  return (
    <Modal onBackDropClick={onBackDropClick}>
      <DesktopModalContainer>
        <Close onClick={(): void => onBackDropClick()}>x</Close>
        <Header>{isCreate ? 'Add new board' : 'Edit board title'}</Header>
        <BoardCreate startTitle={startTitle} isCreate={isCreate} urlEdit={urlEdit} />
      </DesktopModalContainer>
    </Modal>
  );
};

export default BaseModalWrapper;
