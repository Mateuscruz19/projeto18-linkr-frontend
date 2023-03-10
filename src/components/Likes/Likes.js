import { useEffect, useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import {
  ContainerButtonLikeStyled,
  ButtonLikeStyled,
  TextLikeStyled,
  ButtonLikeFilledStyled,
} from './LikesStyled';
import { useUser } from '../../contexts/AuthContext';
import { deleteLikePost, getUsersLikePost, sendLikePost } from '../../services/api';
import React from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const Likes = ({ postId, qtyLikesPost, idUsersLike }) => {
  const { user, token } = useUser();
  const [like, setLike] = useState(false);
  const [qtyLike, setQtyLike] = useState(qtyLikesPost);
  const [usersLike, setUsersLike] = useState([]);
  console.log(like);
  useEffect(() => {
    let isLike = [];

    if (idUsersLike[0]) {
      isLike = idUsersLike.filter((item) => item.id === user.id);
    }

    console.log(isLike);
    if (isLike.length !== 0) {
      setLike(true);
    }

    getUsersLikePost(postId, 4, token)
      .then((res) => {
        if (res.data.length === 0) {
          setUsersLike('Ninguém ainda curtiu! :(');
        }
        if (res.data.length === 1) {
          setUsersLike(`${res.data[0].nameUser} curtiu isso!`);
        }
        if (res.data.length >= 2) {
          setUsersLike(
            `${res.data[0].nameUser}, ${res.data[1].nameUser} e outras ${
              res.data.length - 2
            } pessoas`
          );
        }
      })
      .catch((err) => console.log(err));
  }, [like]);

  const handleLike = () => {
    if (like === false) {
      sendLikePost(postId, token)
        .then((res) => {
          setQtyLike((item) => (item += 1));
          setLike(true);
        })
        .catch((err) => console.log(err));
    }
    if (like === true) {
      deleteLikePost(postId, token)
        .then((res) => {
          setQtyLike((item) => (item -= 1));
          setLike(false);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <ContainerButtonLikeStyled>
      <ButtonLikeStyled onClick={handleLike}>
        {!like ? (
          <AiOutlineHeart />
        ) : (
          <ButtonLikeFilledStyled>
            <AiFillHeart />
          </ButtonLikeFilledStyled>
        )}
      </ButtonLikeStyled>
      <TextLikeStyled
        data-tooltip-id='my-tooltip'
        data-tooltip-variant='light'
        data-tooltip-content={usersLike}
      >
        {qtyLike} likes
      </TextLikeStyled>
      <ReactTooltip id='my-tooltip' effect='solid' place='bottom' />
    </ContainerButtonLikeStyled>
  );
};

export default Likes;
