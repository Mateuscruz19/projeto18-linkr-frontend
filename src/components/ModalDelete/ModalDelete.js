import { useContext } from 'react';
import { deletePost } from '../../services/api';
import {
  MainContainerModalStyled,
  TitleModalStyled,
  ContainerModalStyled,
  ContainerButtonsStyled,
  ButtonNoAcceptModalStyled,
  ButtonAcceptModalStyled,
} from './ModalDeleteStyled';
import { AuthContext } from '../../contexts/AuthContext';

const ModalDelete = ({ isModalOpen, handleCloseModal, itemId, list, setList, alter, setAlter }) => {
  const { token } = useContext(AuthContext);


  const handleDelete = () => {
    deletePost(itemId, token)
      .then((res) => {
        const newList = list.filter((item) => item.id != itemId);
        
        setAlter(!alter);
        setList(newList);
        handleCloseModal();
      })
      .catch((err) => console.log(err));
  };

  return (
    <MainContainerModalStyled
      isOpen={isModalOpen}
      onRequestClose={handleCloseModal}
      contentLabel='Modal de deleção post'
    >
      <ContainerModalStyled>
        <TitleModalStyled>Are you sure you want to delete this post?</TitleModalStyled>
        <ContainerButtonsStyled>
          <ButtonNoAcceptModalStyled onClick={handleCloseModal}>
            No, go back
          </ButtonNoAcceptModalStyled>
          <ButtonAcceptModalStyled onClick={handleDelete}>Yes, delete it</ButtonAcceptModalStyled>
        </ContainerButtonsStyled>
      </ContainerModalStyled>
    </MainContainerModalStyled>
  );
};

export default ModalDelete;
