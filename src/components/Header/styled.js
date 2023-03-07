import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.8rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  height: 4.5rem;
  position: fixed;
  top: 0;
  left: 0;
`;

export const LogoTitle = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: 49px;
  font-weight: 700;
  font-family: "Passion One", "Arial", sans-serif;
`;

export const SearchInput = styled.input`
  width: 563px;
  height: 45px;
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
`;

export const ProfileContainer = styled.div`
    display: flex;
    gap: .5rem;
    button{
        color: ${({ theme }) => theme.colors.white};
        background-color: transparent;
        cursor: pointer;
        border: none;
        font-size: 20px;
    }

`;

export const ImageCrop = styled.div`
  width: 53px;
  height: 53px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  img {
    object-fit: fill;
    width: 100%;
  }
`;
