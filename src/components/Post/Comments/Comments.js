import {
  CommentBox,
  CommentContainer,
  CommentContent,
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

const Comments = ({ userImage, postId }) => {
  const [comment, setComment] = useState("");
  const { token } = useContext(AuthContext);

  

  async function sendComment(e) {
    e.preventDefault();

    if (!comment) return;

    try {
      await setPostComment({ postId, comment }, token);

      setComment("");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <CommentContainer>
      <UserCommentsContainer>
        <CommentContent>
          <CommentImage src={userImage} alt={`Youuu`} />
          <div>
            <p>
              <span>João Avatares</span> <span>• following</span>
            </p>
            <p>Adorei esse post, ajuda muito a usar Material UI com React!</p>
          </div>
        </CommentContent>
        <CommentContent>
          <CommentImage src={userImage} alt={`Youuu`} />
          <div>
            <p>
              <span>João Avatares</span> <span>• following</span>
            </p>
            <p>Adorei esse post, ajuda muito a usar Material UI com React!</p>
          </div>
        </CommentContent>
        <CommentContent>
          <CommentImage src={userImage} alt={`Youuu`} />
          <div>
            <p>
              <span>João Avatares</span> <span>• following</span>
            </p>
            <p>Adorei esse post, ajuda muito a usar Material UI com React!</p>
          </div>
        </CommentContent>
      </UserCommentsContainer>
      <CommentBox>
        <CommentImage src={userImage} alt={`Youuu`} />
        <CommentForm onSubmit={sendComment}>
          <CommentInput
            placeholder="write a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
          <CommentSubmit>
            <BsSend />
          </CommentSubmit>
        </CommentForm>
      </CommentBox>
    </CommentContainer>
  );
};

export default Comments;
