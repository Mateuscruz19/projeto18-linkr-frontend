import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ContainerPost } from './ContainerPost.js';
import Header from '../../components/Header/Header';
import { AuthContext } from '../../contexts/AuthContext';
import Post from '../../components/Post/Post';
import { useUser } from '../../contexts/AuthContext.js';
import TrendingsBar from "../../components/TrendingsBar.js";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function HashtagPage() {
  const [link, setLink] = useState('');
  const [description, setDescription] = useState('');
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [alter, setAlter] = useState(false);
  const { token } = useContext(AuthContext);
  const { user } = useUser();

  const hashtag = useParams().hashtag

  useEffect(() => {
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

      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data.message);
      });
  }, [hashtag]);

  if (list === 0) {
    return <div>Carregando...</div>;
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
                  <div data-test='message'>There are no posts yet</div>
                ) : (
                  <>
                    {list.map((item) => (
                      <Post
                        key={item.id}
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
            <TrendingsBar/>
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

const HashTags = styled.div`
  flex-direction: column;
  width: 30%;
  height: 100%;
  background-color: #171717;
  border-radius: 16px;
  color: #ffffff;
  position: sticky;
  top: 100px;
`;

const TitleHashtag = styled.h1`
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

const ContainerHashtags = styled.div`
  width: 100%;
  padding: 22px 16px 20px 16px;
`;

const InfoHashtags = styled.p`
  font-family: 'Lato';
  font-size: 19px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 15px;
  cursor: pointer;
`;
