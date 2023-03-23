import styled from 'styled-components';

export const ConteinerPost = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #333333;
  display: flex;
  justify-content: center;
`;

export const MainContainerPostStyled = styled.div`
  width: 70%;
  margin-top: 130px;
`;

export const MainContentPostStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 45px;
`;

export const Timeline = styled.div`
  flex-direction: column;
  width: 65%;
`;

export const ContainerTittleContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleContent = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const ContainerButtonFollowUnfollow = styled.div`
  width: auto;
`;
export const ButtonFollow = styled.button`
  border: none;
  background: #1877f2;
  border-radius: 5px;
  padding: 7px 35px;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
  cursor: pointer;
`;

export const ButtonUnfollow = styled.button`
  border: none;
  border: none;
  background: #ffffff;
  border-radius: 5px;
  padding: 7px 28px;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #1877f2;
  cursor: pointer;
`;

export const TitleTimeLine = styled.h1`
  font-family: 'Oswald';
  font-size: 43px;
  font-weight: 700;
  color: #ffffff;
  height: 50px;
  gap: 16px;
`;

export const CaixaInsert = styled.div`
  display: flex;
  padding: 20px;
  width: 100%;
  background-color: #ffffff;
  margin-bottom: 30px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  img {
    width: 50px;
    height: 50px;
    border-radius: 100%;
  }
`;

export const CaixaPostInputs = styled.form`
  width: 85%;
  flex-direction: column;
  margin-left: 20px;
  label {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;
    color: #707070;
  }
  input {
    border-radius: 10px;
    width: 100%;
    height: 40px;
    background-color: #efefef;
    margin-top: 10px;
    font-family: 'Lato';
    font-size: 15px;
    font-weight: 300;
    color: #949494;
    border: none;
    padding-left: 15px;
  }
  .primeiro {
    width: 445px;
    height: 40px;
    color: #707070;
    background-color: #ffffff;
    font-size: 20px;
  }

  .ultimo {
    height: 66px;
  }
`;

export const ButtonPost = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 5px;
  button {
    background-color: #1877f2;
    width: 112px;
    height: 31px;
    border-radius: 10px;
    color: #ffffff;
    font-family: 'Lato';
    font-size: 14px;
    font-weight: 700;
    border: none;
  }
`;

export const Lista = styled.div`
  width: 100%;
  flex-direction: column;
`;

export const HashTags = styled.div`
  flex-direction: column;
  width: 30%;
  height: 100%;
  background-color: #171717;
  border-radius: 16px;
  color: #ffffff;
  position: sticky;
  top: 100px;
`;

export const TitleHashtag = styled.h1`
  width: 100%;
  font-family: 'Oswald';
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
  line-height: 40px;
  color: #ffffff;
  padding: 9px 0px 12px 16px;
  border-bottom: 1px solid #484848;
`;

export const ContainerHashtags = styled.div`
  width: 100%;
  padding: 22px 16px 20px 16px;
`;

export const InfoHashtags = styled.p`
  font-family: 'Lato';
  font-size: 19px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 15px;
  cursor: pointer;
`;

export const EmptyTimeLine = styled.div`
  height: 300px;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  font-weight: 700;
  font-family: 'Lato';
  text-align: center;
`;
