import styled from 'styled-components';

export const MainContainerPostStyled = styled.div`
  width: 100%;
  border-radius: 16px;
  margin-bottom: 30px;
  @media screen and (max-width: 800px) {
   margin-bottom: 16px;
  }
`;
export const PostContainer = styled.div`
  padding: 25px;
  width: 100%;
  display: flex;
  background: #171717;
  border-radius: 16px;
  position: relative;
  z-index: 1;
  word-wrap: break-word;
  @media screen and (max-width: 800px) {
   border-radius: 0px;
  }
`;
export const ContainerImageLikeStyled = styled.div`
  width: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageProfileStyled = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: fill;
`;

export const ContainerInfoDescriptionStyled = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`;

export const TitleNameStyled = styled.h1`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 23px;
  margin-bottom: 5px;
  a {
    text-decoration: none;
    color: #ffffff;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const DescriptionStyled = styled.h2`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  color: #b7b7b7;
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const LinkStyled = styled.div`
  width: 100%;
  .iframe {
    color: #fff;
  }
`;

export const ContainerLinkStyled = styled.div`
  width: 100%;
  border-radius: 11px;
  display: flex;
  margin-top: 10px;
  border: 1px solid #4d4d4d;
  border-radius: 13px;
  cursor: pointer;
`;

export const ContainerInfoLinkStyled = styled.div`
  width: 70%;
  border-radius: 13px 0px 0px 13px;
  padding: 20px;
`;

export const TitleInfoLinkStyled = styled.h1`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #cecece;
  word-wrap: break-word;
  word-wrap: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const DescriptionInfoLinkStyled = styled.h2`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  color: #9b9595;
  margin-top: 5px;
  word-wrap: break-word;
  word-wrap: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const UrlInfoLinkStyled = styled.h3`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  color: #cecece;
  margin-top: 5px;
  word-wrap: break-word;
  word-wrap: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const ContainerImageLinkStyled = styled.div`
  width: 30%;
  height: 100%;
  border-radius: 0px 12px 13px 0px;
`;

export const ImageLinkStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0px 13px 13px 0px;
`;

export const ContainerModifyStyled = styled.div`
  top: 30px;
  right: 30px;
  position: absolute;
  display: flex;
`;

export const UpdateButtonStyled = styled.div`
  color: #fff;
  font-size: 16px;
  cursor: pointer;
`;

export const DeleteButtonStyled = styled.div`
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  margin-left: 12px;
`;

export const CommentsButton = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    font-size: 21px;
    margin-top: 13px;
    cursor: pointer;
    border: none;
    background-color: transparent;
    color: ${({theme})=>theme.colors.white};
    span{
      font-size: 11px;
    }
`;
export const RepostButtonStyled = styled.div`
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  margin-right: 12px;
`
