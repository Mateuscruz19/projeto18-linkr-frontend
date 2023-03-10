import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { ContainerPost } from './ContainerPost.js';
import Header from '../../components/Header/Header';
import { AuthContext } from '../../contexts/AuthContext';
import Post from '../../components/Post/Post';
import { useUser } from '../../contexts/AuthContext.js';
import isEmpty from '../../utils/functions/isEmpty.js';
import TrendingsBar from '../../components/TrendingsBar.js';

export default function HashtagPage() {
  const [link, setLink] = useState('');
  const [description, setDescription] = useState('');
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [alter, setAlter] = useState(false);
  const { token, setToken } = useContext(AuthContext);
  const { user } = useUser();
  const navigate = useNavigate();

  const hashtag = useParams().hashtag;

  useEffect(() => {
    if (isEmpty(token)) return navigate('/');

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(`${process.env.REACT_APP_API_URL}/hashtag/${hashtag}`, config)
      .then((res) => {
        if (res.status === 425) {
          return null;
        }
        setList(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data.message);
      });
  }, [hashtag]);

  if (list === 0) {
    return <div>Carregando...</div>;
  }

  function addPost(e) {
    e.preventDefault();

    const url = `${process.env.REACT_APP_API_URL}/publication`;

    const body = {
      link: link,
      description: description,
      name: name,
    };

    axios
      .post(url, body)
      .then(() => {
        console.log('foi inserido uma publicação');
      })
      .catch((err) => {
        console.log(err);
        alert(err.response);
      });
  }
  return (
    <>
      <Header />
      <ContainerPost>
        <MainContainerPostStyled>
          <TitleTimeLine>#{hashtag}</TitleTimeLine>
          <MainContentPostStyled>
            <Timeline>
              <Lista>
                {list.length === 0 ? (
                  <div>Sua lista esta vazia</div>
                ) : (
                  <>
                    {list.map((item) => (
                      <Post
                        item={item}
                        list={list}
                        setList={setList}
                        alter={alter}
                        setAlter={setAlter}
                      />
                    ))}
                  </>
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
