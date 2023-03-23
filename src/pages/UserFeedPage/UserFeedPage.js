import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import Header from '../../components/Header/Header';
import Post from '../../components/Post/Post';
import { ImageProfileStyled } from '../../components/Post/PostStyled';
import { AuthContext } from '../../contexts/AuthContext';
import { getFollowExist, getPostsByUserId, postFollow, deleteFollow } from '../../services/api';
import {
  ContainerHashtags,
  ConteinerPost,
  HashTags,
  InfoHashtags,
  Lista,
  MainContainerPostStyled,
  MainContentPostStyled,
  Timeline,
  TitleContent,
  TitleHashtag,
  TitleTimeLine,
  EmptyTimeLine,
  ContainerTittleContent,
  ContainerButtonFollowUnfollow,
  ButtonFollow,
  ButtonUnfollow,
} from '../../styles/styles';
import isEmpty from '../../utils/functions/isEmpty';

const UserFeedPage = () => {
  const userId = Number(useParams().userId);
  const { token, user } = useContext(AuthContext);
  const [alter, setAlter] = useState(false);
  const [list, setList] = useState([]);
  const [follow, setFollow] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  console.log(userId);

  async function getUserPosts() {
    try {
      const { data: posts } = await getPostsByUserId(userId, token);

      if (!posts.length) return navigate('/post');

      setList(posts);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (isEmpty(token)) return navigate('/');

    if (!userId) return navigate('/post');

    getUserPosts();

    getFollowExist(userId, token)
      .then((res) => {
        setFollow(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [token, userId]);

  function changeFollow() {
    setLoading((item) => (item = true));
    if (follow === false) {
      postFollow(userId, token)
        .then((res) => {
          setFollow(true);
          setLoading((item) => (item = false));
        })
        .catch((error) => {
          console.log(error);
          if (error.response.status === 409 || error.response.status === 404) {
            alert(error.response.message);
          }
          setLoading((item) => (item = false));
        });
    }
    if (follow === true) {
      deleteFollow(userId, token)
        .then((res) => {
          setFollow(false);
          setLoading((item) => (item = false));
        })
        .catch((error) => {
          console.log(error);
          if (error.response.status === 409 || error.response.status === 404) {
            alert(error.response.message);
          }
          setLoading((item) => (item = false));
        });
    }
  }

  return (
    <>
      <Header />
      <ConteinerPost>
        <MainContainerPostStyled>
          <ContainerTittleContent>
            <TitleContent>
              {list.length && (
                <>
                  <ImageProfileStyled src={list[0].avatarImage} alt='' />
                  <TitleTimeLine>{list[0].name}’s posts</TitleTimeLine>
                </>
              )}
            </TitleContent>
            <ContainerButtonFollowUnfollow>
              {userId !== user.id &&
                (!follow ? (
                  <ButtonFollow onClick={changeFollow} disabled={loading}>
                    Follow
                  </ButtonFollow>
                ) : (
                  <ButtonUnfollow onClick={changeFollow} disabled={loading}>
                    Unfollow
                  </ButtonUnfollow>
                ))}
            </ContainerButtonFollowUnfollow>
          </ContainerTittleContent>
          <MainContentPostStyled>
            <Timeline>
              <Lista>
                {list.length && !list[0].descriptionPost ? (
                  <EmptyTimeLine>{list[0].name} ainda não postou nada :P</EmptyTimeLine>
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
            <HashTags>
              <TitleHashtag>trending</TitleHashtag>

              <ContainerHashtags>
                <InfoHashtags># javascript</InfoHashtags>

                <InfoHashtags># react</InfoHashtags>

                <InfoHashtags># react-native</InfoHashtags>

                <InfoHashtags># material</InfoHashtags>

                <InfoHashtags># web-dev</InfoHashtags>

                <InfoHashtags># mobile</InfoHashtags>

                <InfoHashtags># css</InfoHashtags>

                <InfoHashtags># html</InfoHashtags>

                <InfoHashtags># node</InfoHashtags>

                <InfoHashtags># sql</InfoHashtags>
              </ContainerHashtags>
            </HashTags>
          </MainContentPostStyled>
        </MainContainerPostStyled>
      </ConteinerPost>
    </>
  );
};

export default UserFeedPage;
