import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { ContainerPost } from "./ContainerPost.js";
import Header from "../../components/Header/Header";
import { AuthContext } from "../../contexts/AuthContext";
import Post from "../../components/Post/Post";
import { useUser } from "../../contexts/AuthContext.js";
import { getAllPosts, setPost, doesUserFollowsSomeone } from "../../services/api.js";
import TrendingsBar from "../../components/TrendingsBar.js";
import useInterval from "use-interval";
import spin from "../../img/spinLoad.svg";
import spinScroller from "../../img/loaderScroller.svg";
import  InfiniteScroll  from  'react-infinite-scroller';
import { getAllPostsPages } from "../../services/api.js";


export default function Posts() {
  const [link, setLink] = useState('');
  const [description, setDescription] = useState('');
  const [list, setList] = useState([]);
  const [alter, setAlter] = useState(false);
  const { token } = useContext(AuthContext);
  const { user } = useUser();
  const [sendingPost, setSendingPost] = useState(false);
  const [count, setCount] = useState(0);
  const [active, setActive] = useState(false);
  const [followsSomeone, setFollowsSomeone] = useState(false);
  const [page, setPage] = useState(1);

  useInterval(() => {
    if (active === true) {
      setCount(count + 1);
      setActive(false);
    }
  }, 15000);

  useEffect(() => {
    async function listAllPosts() {
      try {
        const result = await getAllPosts(token);

        if (result.status === 425) {
          return null;
        }
        setList(result.data);
      } catch (error) {
        console.log(error);
        console.log(error.response.data.message);
      }
    }
    listAllPosts();
  }, [alter]);

  useEffect(()=>{
    const prom = doesUserFollowsSomeone(token)
    prom.then((res)=>setFollowsSomeone(res.data)).
    catch((err)=>console.log(err))
  }, [])

  if (list === 0) {
    setCount(0);
    return <div>Carregando...</div>;
  }

  async function addPost(e) {
    e.preventDefault();

    setSendingPost(true);

    const body = {
      link,
      description,
    };

    try {
      await setPost(body, token);

      setDescription('');
      setLink('');
      setActive(true);
      reload();
    } catch (error) {
      console.log(error.response);
      alert('Houve um erro ao publicar seu link');
    } finally {
      setSendingPost(false);
    }
  }

  async function loadFunc(){


    try{
      const {data} = await getAllPostsPages(token, page);
      setList([...list, ...data]);
      setPage(page+1);
 
 
    }catch(error){
        console.log(error);
        console.log(error.response.data.message);
    }
  }
 
  function reload() {
    setCount(0);
    setAlter(!alter);
  }

  return (
    <>
      <Header />
      <ContainerPost>
        <MainContainerPostStyled>
          <TitleTimeLine>timeline</TitleTimeLine>
          <MainContentPostStyled>
            <Timeline>
              <CaixaInsert data-test='publish-box'>
                <img src={user.avatar_url} alt='imagem de perfil' />
                <CaixaPostInputs onSubmit={addPost}>
                  <label>What are you going to share today?</label>
                  <input
                    data-test='link'
                    name='link'
                    value={link}
                    type='url'
                    pattern='https://.*'
                    placeholder='https://...'
                    onChange={(e) => setLink(e.target.value)}
                    required
                    disabled={sendingPost}
                  />
                  <input
                    data-test='description'
                    name='description'
                    value={description}
                    type='text'
                    className='ultimo'
                    placeholder='Awesome article about #javascript'
                    onChange={(e) => setDescription(e.target.value)}
                    disabled={sendingPost}
                  />

                  <ButtonPost>
                    <button type='submit' data-test='publish-btn' disabled={sendingPost}>
                      {sendingPost ? 'Publishing...' : 'Publish'}
                    </button>
                  </ButtonPost>
                </CaixaPostInputs>
              </CaixaInsert>
              <CaixaReloandList condicao={count > 0 ? 'block' : 'none'}>
                <button data-test='load-btn' onClick={reload}>
                  {count} new posts, load more!
                  <img src={spin} alt='spin' />
                </button>
              </CaixaReloandList>
              <InfiniteScroll
              pageStart={0}
              loadMore={loadFunc}
              hasMore={true || false}
              loader={
                <div className="loader" key={0}>
                    <img src={spinScroller} alt="spinScroller"/>
                    Loading more posts...
                </div>}
             >
               <Lista>
                 {list.length === 0 ? (


                   <div data-test="message">
                     {
                       followsSomeone?
                       "No posts found from your friends"
                       :
                       "You don't follow anyone yet. Search for new friends!"
                     }
                   </div>
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
             </InfiniteScroll>
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
  .loader{
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Lato';
    font-size: 22px;
    font-weight: 400;
    color: #6D6D6D;
    margin-top: 83px;
    margin-bottom: 338px;
  }
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
    &:disabled {
      opacity: 0.8;
    }
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

const CaixaReloandList = styled.div`
  display: ${(props) => props.condicao};
  button {
    margin-bottom: 17px;
    width: 100%;
    height: 61px;
    background-color: #1877f2;
    color: #ffffff;
    border-radius: 25px;
    align-items: center;
    justify-items: center;
    font-family: 'Lato';
    font-size: 16px;
    font-weight: 400;
  }
  img {
    margin-left: 14px;
  }
`;
