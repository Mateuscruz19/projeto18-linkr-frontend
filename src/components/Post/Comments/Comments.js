import {
  CommentBox,
  CommentContainer,
  CommentForm,
  UserCommentsContainer,
  CommentImage,
  CommentInput,
  CommentSubmit,
} from "./styled";
import { BsSend } from "react-icons/bs";
import { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { setPostComment } from "../../../services/api";
import CommentCard from "../CommentCard/CommentCard";

const Comments = ({
  userImage,
  postId,
  commentList,
  setUpdateCommentList,
  updateCommentList,
}) => {
  const [comment, setComment] = useState("");
  const { token } = useContext(AuthContext);

  async function sendComment(e) {
    e.preventDefault();

    if (!comment) return;

    try {
      await setPostComment({ postId, comment }, token);
      setUpdateCommentList(!updateCommentList);
      setComment("");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <CommentContainer  data-test="comment-box">
      <UserCommentsContainer>
        {commentList &&
          commentList.map(
            ({ id, userId, name, avatarImage, comment, status = false }) => (
              <CommentCard
                key={id}
                userId={userId}
                name={name}
                avatarImage={avatarImage}
                comment={comment}
                status={status}
              />
            )
          )}
      </UserCommentsContainer>
      <CommentBox>
        <CommentImage src={userImage} alt={`Youuu`} />
        <CommentForm onSubmit={sendComment}>
          <CommentInput
            placeholder="write a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            data-test="comment-input"
            required
          />
          <CommentSubmit data-test="comment-input">
            <BsSend />
          </CommentSubmit>
        </CommentForm>
      </CommentBox>
    </CommentContainer>
  );
};

export default Comments;
