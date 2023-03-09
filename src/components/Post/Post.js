import { AiOutlineHeart } from 'react-icons/ai';
import {
  MainContainerPostStyled,
  ContainerImageLikeStyled,
  ButtonLikeStyled,
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
  ContainerModifyStyled,
} from './PostStyled.jsx';
import { useEffect, useState, useRef, useContext } from 'react';
import { HiTrash } from 'react-icons/hi';
import { TiPencil } from 'react-icons/ti';
import axios from 'axios';
import ModalDelete from '../ModalDelete/ModalDelete.js';
import { updatePost } from '../../services/api.js';
import { AuthContext } from '../../contexts/AuthContext.js';
import { Link } from 'react-router-dom';

const Post = ({ item, list, setList, alter, setAlter }) => {
  const { token } = useContext(AuthContext);
  const [infoLink, setInfoLink] = useState(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [description, setDescription] = useState(item.descriptionPost);
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);
  console.log(description);

  console.log(item.linkPost);
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

  return (
    <>
      <MainContainerPostStyled>
        <ContainerImageLikeStyled>
        <Link to={`/post/${item.userId}`} ><ImageProfileStyled src={item.avatarImage} alt='' /></Link>
          <ButtonLikeStyled>
            <AiOutlineHeart />
            <span>13 likes</span>
          </ButtonLikeStyled>
        </ContainerImageLikeStyled>
        <ContainerInfoDescriptionStyled>
          <TitleNameStyled><Link to={`/post/${item.userId}`} >{item.name}</Link></TitleNameStyled>
          {editing ? (
            <input
              type='text'
              ref={inputRef}
              value={description}
              onKeyDown={handleKeyPress}
              onChange={handleInputChange}
            />
          ) : (
            <DescriptionStyled>{description}</DescriptionStyled>
          )}

          {infoLink ? (
            <ContainerLinkStyled onClick={(e) => window.open(infoLink.url, '_blank')}>
              <ContainerInfoLinkStyled>
                <TitleInfoLinkStyled>{infoLink.title}</TitleInfoLinkStyled>
                <DescriptionInfoLinkStyled>
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
          <UpdateButtonStyled onClick={handleTextClick}>
            <TiPencil />
          </UpdateButtonStyled>
          <DeleteButtonStyled onClick={handleOpenModal}>
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
