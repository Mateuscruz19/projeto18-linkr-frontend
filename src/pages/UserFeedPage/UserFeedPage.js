import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Header from "../../components/Header/Header";
import Post from "../../components/Post/Post";
import { ImageProfileStyled } from "../../components/Post/PostStyled";
import { AuthContext } from "../../contexts/AuthContext";
import { getPostsByUserId } from "../../services/api";
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
  TitleTimeLine, EmptyTimeLine
} from "../../styles/styles";
import isEmpty from "../../utils/functions/isEmpty";

const UserFeedPage = () => {
  const userId = Number(useParams().userId);
  const { token } = useContext(AuthContext);
  const [alter, setAlter] = useState(false);
  const [list, setList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (isEmpty(token)) return navigate("/");

    if (!userId) return navigate("/post");

    async function getUserPosts() {
      try {
        const { data: posts } = await getPostsByUserId(userId, token);
  
        if(!posts.length) return navigate("/post");

        setList(posts);
      } catch (error) {
        console.log(error);
      }
    }
    getUserPosts();
  }, [token, userId]);

  return (
    <>
      <Header />
      <ConteinerPost>
        <MainContainerPostStyled>
          <TitleContent>
            {list.length && (
              <>
                <ImageProfileStyled src={list[0].avatarImage} alt="" />
                <TitleTimeLine>{list[0].name}’s posts</TitleTimeLine>
              </>
            )}
          </TitleContent>
          <MainContentPostStyled>
            <Timeline>
              <Lista>
                {list.length && !list[0].descriptionPost ? (
                  <EmptyTimeLine>{list[0].name} ainda não postou nada :P</EmptyTimeLine>
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
