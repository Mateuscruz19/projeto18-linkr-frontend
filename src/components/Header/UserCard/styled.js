import styled from "styled-components";

export const UserContent = styled.li`
  height: 65px;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;
  span {
    font-family: "Lato";
    color: ${({ theme }) => theme.colors.darkGrey};
    font-size: 19px;
    opacity: 0.8;
  }
  &:hover span {
    text-decoration: underline;
  }
`;
