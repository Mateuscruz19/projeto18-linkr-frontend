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

const Comments = ({ userImage }) => {
  return (
    <CommentContainer>
      <UserCommentsContainer>
        <CommentContent>
          <CommentImage src={userImage} alt={`Youuu`} />
          <div>
            <p><span>João Avatares</span> <span>• following</span></p>
            <p>Adorei esse post, ajuda muito a usar Material UI com React!</p>
          </div>
        </CommentContent>
        <CommentContent>
          <CommentImage src={userImage} alt={`Youuu`} />
          <div>
            <p><span>João Avatares</span> <span>• following</span></p>
            <p>Adorei esse post, ajuda muito a usar Material UI com React!</p>
          </div>
        </CommentContent>
        <CommentContent>
          <CommentImage src={userImage} alt={`Youuu`} />
          <div>
            <p><span>João Avatares</span> <span>• following</span></p>
            <p>Adorei esse post, ajuda muito a usar Material UI com React!</p>
          </div>
        </CommentContent>
      </UserCommentsContainer>
      <CommentBox>
        <CommentImage src={userImage} alt={`Youuu`} />
        <CommentForm>
          <CommentInput placeholder="write a comment..." />
          <CommentSubmit>
            <BsSend />
          </CommentSubmit>
        </CommentForm>
      </CommentBox>
    </CommentContainer>
  );
};

export default Comments;
