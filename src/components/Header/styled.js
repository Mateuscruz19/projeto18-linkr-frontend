import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.8rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  height: 4.5rem;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  input {
    width: 563px;
    height: 45px;
    border: 1px solid transparent;
    border-radius: 8px;
    font-size: 19px;
    padding-left: 17px;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: ${({ theme }) => theme.colors.darkGrey};
      opacity: 0.4;
    }
  }
`;

export const LogoTitle = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: 49px;
  font-weight: 700;
  font-family: 'Passion One', 'Arial', sans-serif;
`;

export const SearchContainer = styled.div`
  position: relative;
`;

export const SearchBox = styled.ul`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  position: absolute;
  width: 100%;
  padding-top: 49px;
  top: 0;
  z-index: -1;
  border-radius: 8px;
`;

export const ProfileContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  button {
    color: ${({ theme }) => theme.colors.white};
    background-color: transparent;
    cursor: pointer;
    border: none;
    font-size: 20px;
  }
`;

export const ImageCrop = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  img {
    object-fit: fill;
    height: 100%;
  }
`;
