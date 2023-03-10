import styled from 'styled-components';
import Header from '../components/Header/Header.js';
import { ContainerPost } from './PostPages/ContainerPost.js';
import TrendingsBar from './../components/TrendingsBar.js';
import Post from './../components/Post/Post.js';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import axios from 'axios';

export default function HashtagPage(props) {
  const [posts, setPosts] = useState([]);

  const hashtag = useParams().hashtag;

  useEffect(() => {
    const prom = axios.get(`${process.env.REACT_APP_API_URL}/hashtag/${hashtag}`);
    prom.then((res) => setPosts(res.data));
  }, []);

  return (
    <>
      <Header />
      <ContainerPost>
        <MainContainerPostStyled>
          <TitleTimeLine>#{hashtag}</TitleTimeLine>
          <MainContentPostStyled>
            <Timeline>
              <Lista>
                {posts.length === 0 ? (
                  <div>Não há posts contendo a hashtag buscada.</div>
                ) : (
                  posts.map((item) => <p>{item.description}</p>)
                )}
              </Lista>
            </Timeline>
            <TrendingsBar />
          </MainContentPostStyled>
        </MainContainerPostStyled>
      </ContainerPost>
    </>
  );
}

const MainContainerPostStyled = styled.div`
  width: 70%;
  margin-top: 130px;
`;

const MainContentPostStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 45px;
`;

const Timeline = styled.div`
  flex-direction: column;
  width: 65%;
`;

const TitleTimeLine = styled.h1`
  font-family: 'Oswald';
  font-size: 43px;
  font-weight: 700;
  color: #ffffff;
`;

const CaixaInsert = styled.div`
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

const CaixaPostInputs = styled.form`
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

const ButtonPost = styled.div`
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

const Lista = styled.div`
  width: 100%;
  flex-direction: column;
`;
