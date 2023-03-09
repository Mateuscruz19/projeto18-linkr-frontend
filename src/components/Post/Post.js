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
  DeleteButtonStyled,
} from './PostStyled.jsx';
import { useEffect, useState } from 'react';
import { HiTrash } from 'react-icons/hi';
import axios from 'axios';
import ModalDelete from '../ModalDelete/ModalDelete.js';

const Post = ({ item, list, setList, alter, setAlter }) => {
  const [infoLink, setInfoLink] = useState(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  return (
    <>
      <MainContainerPostStyled>
        <ContainerImageLikeStyled>
          <ImageProfileStyled src={item.avatarImage} alt='' />
          <ButtonLikeStyled>
            <AiOutlineHeart />
            <span>13 likes</span>
          </ButtonLikeStyled>
        </ContainerImageLikeStyled>
        <ContainerInfoDescriptionStyled>
          <TitleNameStyled>{item.name}</TitleNameStyled>
          <DescriptionStyled>{item.descriptionPost}</DescriptionStyled>
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
        <DeleteButtonStyled onClick={handleOpenModal}>
          <HiTrash />
        </DeleteButtonStyled>
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
