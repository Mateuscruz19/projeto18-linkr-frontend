import styled from "styled-components";
import { ImageProfileStyled } from "../PostStyled";

export const CommentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.midGrey};
  border-radius: 0 0 16px 16px;
  position: relative;
  bottom: 20px;
  padding: 20px 20px 0 20px;
`;

export const CommentImage = styled(ImageProfileStyled)`
  width: 39px;
  height: 39px;
`;

export const CommentBox = styled.div`
  height: 64px;
  display: flex;
  align-items: center;
  gap: 14px;
  width: 100%;
`;

export const CommentForm = styled.form`
  display: flex;
  position: relative;
  width: 100%;
`;

export const CommentInput = styled.input`
  height: 39px;
  background-color: ${({ theme }) => theme.colors.midLightGrey};
  width: 100%;
  border-radius: 8px;
  border: transparent;
  padding: 0 30px 0 12px;
  color: ${({ theme }) => theme.colors.white};
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-family: 'Lato';
    font-size: 14px;
    font-style: italic;
    color: ${({ theme }) => theme.colors.lightGrey};
  }
`;

export const CommentSubmit = styled.button`
  position: absolute;
  right: 0;
  height: 100%;
  font-size: 14px;
  width: 32px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.lightGrey};
`;

export const CommentContent = styled.li`
  min-height: 68px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.midLightGrey};
  list-style: none;
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 14px 0;
  &>div{
    display: flex;
    flex-direction: column;
    gap: 5px;
    p{
      font-family: 'Lato';
      font-size: 14px;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.lightGrey};
      &>span:nth-child(1){
        color: ${({ theme }) => theme.colors.white};
        font-weight: 700;
      }
      &>span:nth-child(2){
        color: #565656;
      }
    }
  }
`;

export const UserCommentsContainer = styled.ul`
  max-height: 220px;
  overflow-y: auto;
`;