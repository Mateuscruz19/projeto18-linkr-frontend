import styled from 'styled-components';
import Modal from 'react-modal';

export const MainContainerModalStyled = styled(Modal)`
  width: 50%;
  height: 40%;
  background: none;
  position: relative;
`;

export const ContainerModalStyled = styled.div`
  width: 100%;
  height: 100%;
  background: #333333;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: calc(100% - (70% / 2));
  left: calc(100% - (100% / 2));
`;

export const TitleModalStyled = styled.h1`
  width: 60%;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 41px;
  text-align: center;
  color: #ffffff;
`;

export const ContainerButtonsStyled = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
`;

export const ButtonNoAcceptModalStyled = styled.button`
  width: 40%;
  background: #ffffff;
  border-radius: 5px;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #1877f2;
  border: none;
`;

export const ButtonAcceptModalStyled = styled.button`
  width: 40%;
  background: #1877f2;
  border-radius: 5px;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
  border: none;
`;
