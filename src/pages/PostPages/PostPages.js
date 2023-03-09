import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ConteinerPost } from '../../components/ConteinerPost';
import Header from '../../components/Header/Header';
import veio from '../../img/image 4.svg';
import { AuthContext } from '../../contexts/AuthContext';
import Post from '../../components/Post/Post';

export default function Posts() {
  const [link, setLink] = useState('');
  const [description, setDescription] = useState('');
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [alter, setAlter] = useState(false);
  const { token } = useContext(AuthContext);

  console.log(list);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(`${process.env.REACT_APP_API_URL}/publication`, config)
      .then((res) => {
        if (res.status === 425) {
          return null;
        }
        setList(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data.message);
      });
  }, [alter]);

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
      <ConteinerPost>
        <Timeline>
          <TitleTimeLine>timeline</TitleTimeLine>
          <CaixaInsert>
            <img src={veio} alt='imagem de perfil' />
            <CaixaPostInputs>
              <form onSubmit={addPost}>
                <CaixaInputs>
                  <input
                    name='description'
                    value={description}
                    type='text'
                    className='primeiro'
                    placeholder='What are you going to share today?'
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  <input
                    name='link'
                    value={link}
                    type='text'
                    placeholder='https://...'
                    onChange={(e) => setLink(e.target.value)}
                  />
                  <input
                    name='name'
                    value={name}
                    type='text'
                    className='ultimo'
                    placeholder='Awesome article about #javascript'
                    onChange={(e) => setName(e.target.value)}
                  />
                </CaixaInputs>
              </form>
              <ButtonPost>
                <button type='submit'>Publish</button>
              </ButtonPost>
            </CaixaPostInputs>
          </CaixaInsert>
          <Lista>
            {list.length === 0 ? (
              <div>Sua lista esta vazio</div>
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
        <HashTags>
          <p className='titulo'>trending</p>
          <Link to=''>
            <p># javascript</p>
          </Link>
          <Link to=''>
            <p># react</p>
          </Link>
          <Link to=''>
            <p># react-native</p>
          </Link>
          <Link to=''>
            <p># material</p>
          </Link>
          <Link to=''>
            <p># web-dev</p>
          </Link>
          <Link to=''>
            <p># mobile</p>
          </Link>
          <Link to=''>
            <p># css</p>
          </Link>
          <Link to=''>
            <p># html</p>
          </Link>
          <Link to=''>
            <p># node</p>
          </Link>
          <Link to=''>
            <p># sql</p>
          </Link>
        </HashTags>
      </ConteinerPost>
    </>
  );
}

const Timeline = styled.div`
  flex-direction: column;
  margin-top: 78px;
  width: 611px;
`;

const TitleTimeLine = styled.h1`
  font-family: 'Oswald';
  font-size: 43px;
  font-weight: 700;
  color: #ffffff;
`;

const CaixaInsert = styled.div`
  display: flex;
  margin-top: 43px;
  padding: 16px;
  width: 611px;
  justify-content: space-around;
  flex-direction: row;
  background-color: #ffffff;
  border-radius: 10px;
  margin-bottom: 30px;

  img {
    width: 50px;
    height: 50px;
    border-radius: 100%;
  }
`;

const CaixaPostInputs = styled.div`
  flex-direction: column;
`;

const CaixaInputs = styled.div`
  input {
    border-radius: 10px;
    width: 503px;
    height: 40px;
    background-color: #efefef;
    margin-bottom: 5px;
    margin-left: 30px;
    font-family: 'Lato';
    font-size: 15px;
    font-weight: 300;
    color: #949494;
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
  display: flex;
  justify-content: flex-end;
  button {
    background-color: #1877f2;
    width: 112px;
    height: 31px;
    border-radius: 10px;
    color: #ffffff;
    font-family: 'Lato';
    font-size: 14px;
    font-weight: 700;
  }
`;

const Lista = styled.div`
  flex-direction: column;
`;

const HashTags = styled.div`
  flex-direction: column;
  width: 301px;
  height: 406px;
  background-color: #171717;
  margin-top: 185px;
  margin-left: 25px;
  border-radius: 10px;
  color: #ffffff;

  p {
    font-family: 'Lato';
    font-size: 19px;
    font-weight: 700;
    margin: 16px;
  }

  .titulo {
    font-family: 'Oswald';
    font-size: 27px;
    font-weight: 700;
  }
`;

const CaixaMaps = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 29px;
  width: 611px;
  background-color: #171717;
  border-radius: 10px;
  padding: 16px;

  img {
    width: 50px;
    height: 50px;
    border-radius: 100%;
  }
`;

const MapsConteudos = styled.div`
  flex-direction: column;
  margin-left: 30px;

  p {
    flex-wrap: wrap;
    font-family: 'Lato';
    font-size: 17px;
    font-weight: 400;
    color: #b7b7b7;
    margin-bottom: 7px;
  }

  .nome {
    color: #ffffff;
  }
`;

const HashtagasPosts = styled.div`
  p {
    font-family: 'Lato';
    font-size: 17px;
    font-weight: 400;
    color: #ffffff;
  }
`;
