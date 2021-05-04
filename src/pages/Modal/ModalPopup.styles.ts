import styled from 'styled-components';

const ModalContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
export const DesktopModalContainer = styled(ModalContainer)`
  border-radius: 7px;
  box-shadow: 0 0 32px rgba(0, 0, 0, 0.5);
  padding: 40px;
  width: 450px;
  font-size: 26px;
  @media screen and (max-width: 480px) {
    width: 100%;
  } ;
`;
export const Header = styled.h3`
  color: #25306c;
  font-size: 35px;
  line-height: 1em;
  font-weight: bold;
  margin: 5px 0 10px;
  text-align: center;
`;

export const Close = styled.div`
  position: absolute;
  top: 0;
  left: 80%;
  &:hover {
    cursor: pointer;
  }
`;
