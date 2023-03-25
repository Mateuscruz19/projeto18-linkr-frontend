import {
  MainContainerPostStyled,
  ContainerImageLikeStyled,
  ImageProfileStyled,
  ContainerInfoDescriptionStyled,
  TitleNameStyled,
  DescriptionStyled,
  ContainerLinkStyled,
  ContainerInfoLinkStyled,
  ContainerImageLinkStyled,
  ImageLinkStyled,
  TitleInfoLinkStyled,
  DescriptionInfoLinkStyled,
  UrlInfoLinkStyled,
  UpdateButtonStyled,
  DeleteButtonStyled,
  RepostButtonStyled,
  ContainerModifyStyled,
  CommentsButton,
  PostContainer,
} from './PostStyled.jsx';
import { useEffect, useState, useRef, useContext } from 'react';
import { HiTrash } from 'react-icons/hi';
import { TiPencil } from 'react-icons/ti';
import { AiOutlineComment, AiOutlineSwap } from 'react-icons/ai';
import ModalDelete from '../ModalDelete/ModalDelete.js';
import { getCommentsByPostId, updatePost, setPost } from '../../services/api.js';
import { AuthContext, useUser } from '../../contexts/AuthContext.js';
import { Link } from 'react-router-dom';
import Likes from '../Likes/Likes.js';
import HashtagHighlight from '../HashtagHighlight.js';
import Comments from './Comments/Comments.js';
import imagemQuebrada from '../../img/imagem_quebrada.png';

const Post = ({ item, list, setList, alter, setAlter }) => {
  const { token } = useContext(AuthContext);
  const { user } = useUser();
  const [infoLink, setInfoLink] = useState(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [description, setDescription] = useState(item.descriptionPost);
  const [editing, setEditing] = useState(false);
  const [commentList, setCommentList] = useState(null);
  const [updateCommentList, setUpdateCommentList] = useState(false);
  const [commentBoxFlag, setCommentBoxFlag] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    async function listAllComments() {
      const { data: comments } = await getCommentsByPostId(item.id, token);

      setCommentList(comments);
    }

    listAllComments();
  }, [updateCommentList]);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleTextClick = () => {
    if (editing === false) {
      setEditing(true);
    } else {
      setDescription(item.descriptionPost);
      setEditing(false);
    }
  };

  const handleConfirm = () => {
    setEditing(false);
    setDescription(inputRef.current.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleUpdatePost();
    }
    if (event.key === 'Escape') {
      setDescription(item.descriptionPost);
      setEditing(false);
    }
  };

  const handleInputChange = (event) => {
    setDescription(event.target.value);
  };

  const handleUpdatePost = () => {
    const body = { description };
    updatePost(item.id, body, token)
      .then((res) => {
        handleConfirm();
      })
      .catch((err) => {
        console.log(err);
        alert(err.response);
        setDescription(item.descriptionPost);
      });
  };

  const handleRepost = (e) => {
    e.preventDefault();
    if (window.confirm('Deseja repostar essa publicação?')) {
      const link = infoLink.url;
      const description =
        item.hashtags[0].id !== null && item.hashtags.map((hash) => hash.nameHashtag);

      const body = {
        description,
        link,
      };

      try {
        setPost(body, token);
        console.log(item.hashtags);
        alert('Repostou com sucesso');
      } catch (error) {
        alert('Repostar falhou');
      }
    }
  };

  return (
    <>
      <MainContainerPostStyled data-test='post'>
        <PostContainer>
          <ContainerImageLikeStyled>
            <Link to={`/user/${item.userId}`}>
              <ImageProfileStyled src={item.avatarImage} alt='' />
            </Link>
            <Likes
              postId={item.id}
              qtyLikesPost={item.qtyLikesPost}
              idUsersLike={item.idUsersLike}
            />
            <CommentsButton
              data-test='comment-btn'
              onClick={() => setCommentBoxFlag(!commentBoxFlag)}
            >
              {' '}
              <AiOutlineComment />{' '}
              <span data-test='comment-counter'>
                {commentList ? commentList.length : 0} comments
              </span>
            </CommentsButton>
          </ContainerImageLikeStyled>
          <ContainerInfoDescriptionStyled>
            <TitleNameStyled>
              <Link to={`/user/${item.userId}`} data-test='username'>
                {item.name}
              </Link>
            </TitleNameStyled>
            {editing ? (
              <input
                data-test='edit-input'
                type='text'
                ref={inputRef}
                value={description}
                onKeyDown={handleKeyPress}
                onChange={handleInputChange}
              />
            ) : (
              <DescriptionStyled>
                <HashtagHighlight text={description} />
              </DescriptionStyled>
            )}
            <span>
              {item.hashtags[0].id !== null && item.hashtags.map((hash) => hash.nameHashtag)}
            </span>
            <ContainerLinkStyled
              data-test='link'
              onClick={(e) => window.open(item.linkPost, '_blank')}
            >
              <ContainerInfoLinkStyled>
                {item.titleLinkPost === null ? (
                  <TitleInfoLinkStyled>
                    {item.linkPost.split('/')[2].split('.')[0] === 'WWW' ||
                    item.linkPost.split('/')[2].split('.')[0] === 'www'
                      ? item.linkPost.split('/')[2].split('.')[1].toUpperCase()
                      : item.linkPost.split('/')[2].split('.')[0].toUpperCase()}
                  </TitleInfoLinkStyled>
                ) : (
                  <TitleInfoLinkStyled>{item.titleLinkPost}</TitleInfoLinkStyled>
                )}
                {item.descriptionLinkPost === null ? (
                  <DescriptionInfoLinkStyled data-test='description'>
                    {item.linkPost}
                  </DescriptionInfoLinkStyled>
                ) : (
                  <DescriptionInfoLinkStyled data-test='description'>
                    {item.descriptionLinkPost}
                  </DescriptionInfoLinkStyled>
                )}
                <UrlInfoLinkStyled>{item.linkPost}</UrlInfoLinkStyled>
              </ContainerInfoLinkStyled>
              <ContainerImageLinkStyled>
                {item.imageLinkPost === null ? (
                  <ImageLinkStyled src={imagemQuebrada} alt='' />
                ) : (
                  <ImageLinkStyled src={item.imageLinkPost} alt='' />
                )}
              </ContainerImageLinkStyled>
            </ContainerLinkStyled>
          </ContainerInfoDescriptionStyled>
          <ContainerModifyStyled>
            <RepostButtonStyled>
              <AiOutlineSwap data-test='repost-btn' onClick={handleRepost} />
            </RepostButtonStyled>
            <UpdateButtonStyled data-test='edit-btn' onClick={handleTextClick}>
              <TiPencil />
            </UpdateButtonStyled>
            <DeleteButtonStyled data-test='delete-btn' onClick={handleOpenModal}>
              <HiTrash />
            </DeleteButtonStyled>
          </ContainerModifyStyled>
        </PostContainer>
        {commentBoxFlag && (
          <Comments
            userImage={user.avatar_url}
            postId={item.id}
            commentList={commentList}
            setUpdateCommentList={setUpdateCommentList}
            updateCommentList={updateCommentList}
          />
        )}
      </MainContainerPostStyled>
      <ModalDelete
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
        itemId={item.id}
        list={list}
        setList={setList}
        alter={alter}
        setAlter={setAlter}
      />
    </>
  );
};

export default Post;
