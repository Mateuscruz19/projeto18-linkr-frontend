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
} from './PostStyled.jsx';
import { useEffect, useState, useRef, useContext } from 'react';
import { HiTrash } from 'react-icons/hi';
import { TiPencil } from 'react-icons/ti';
import { AiOutlineSwap } from 'react-icons/ai'
import axios from 'axios';
import ModalDelete from '../ModalDelete/ModalDelete.js';
import { updatePost,setPost } from '../../services/api.js';
import { AuthContext } from '../../contexts/AuthContext.js';
import { Link } from 'react-router-dom';
import Likes from '../Likes/Likes.js';
import HashtagHighlight from '../HashtagHighlight.js';

const Post = ({ item, list, setList, alter, setAlter }) => {
  const { token } = useContext(AuthContext);
  const [infoLink, setInfoLink] = useState(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [description, setDescription] = useState(item.descriptionPost);
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    axios
      .get(`https://api.linkpreview.net/?key=79574a3e5aa6921ccabd738c2837550c&q=${item.linkPost}/`)
      .then((res) => {
        setInfoLink((item) => (item = res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
    if(window.confirm("Deseja repostar essa publicação?")){

      const link = infoLink.url
      const description = item.hashtags[0].id !== null && item.hashtags.map((hash) => hash.nameHashtag)

      const body = {
        description,
        link,
      };
      
      try {
       setPost(body, token);
       console.log(item.hashtags)
        alert("Repostou com sucesso")
      } catch (error) {
        alert("Repostar falhou")
      }
      
    }
  }

  return (
    <>
      <MainContainerPostStyled data-test='post'>
        <ContainerImageLikeStyled>
          <Link to={`/user/${item.userId}`}>
            <ImageProfileStyled src={item.avatarImage} alt='' />
          </Link>
          <Likes postId={item.id} qtyLikesPost={item.qtyLikesPost} idUsersLike={item.idUsersLike} />
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

          {infoLink ? (
            <ContainerLinkStyled
              data-test='link'
              onClick={(e) => window.open(infoLink.url, '_blank')}
            >
              <ContainerInfoLinkStyled>
                <TitleInfoLinkStyled>{infoLink.title}</TitleInfoLinkStyled>
                <DescriptionInfoLinkStyled data-test='description'>
                  {infoLink.description}
                  <span>
                    {item.hashtags[0].id !== null && item.hashtags.map((hash) => hash.nameHashtag)}
                  </span>
                </DescriptionInfoLinkStyled>
                <UrlInfoLinkStyled>{infoLink.url}</UrlInfoLinkStyled>
              </ContainerInfoLinkStyled>
              <ContainerImageLinkStyled>
                <ImageLinkStyled src={infoLink.image} alt='' />
              </ContainerImageLinkStyled>
            </ContainerLinkStyled>
          ) : (
            <>Carregando...</>
          )}
        </ContainerInfoDescriptionStyled>
        <ContainerModifyStyled>
        <RepostButtonStyled>
            <AiOutlineSwap data-test='repost-btn' onClick={handleRepost}/>
          </RepostButtonStyled>
          <UpdateButtonStyled data-test='edit-btn' onClick={handleTextClick}>
            <TiPencil />
          </UpdateButtonStyled>
          <DeleteButtonStyled data-test='delete-btn' onClick={handleOpenModal}>
            <HiTrash />
          </DeleteButtonStyled>
        </ContainerModifyStyled>
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
