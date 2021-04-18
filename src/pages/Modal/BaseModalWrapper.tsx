import React from 'react';
import Modal from './Modal';
import { DesktopModalContainer, Header } from './ModalPopup.styles';

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
        <Header>Modal Info</Header>
      </DesktopModalContainer>
    </Modal>
  );
};

export default BaseModalWrapper;
