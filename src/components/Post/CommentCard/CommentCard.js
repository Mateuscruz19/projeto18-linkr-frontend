import { Link } from "react-router-dom";
import { CommentContent, CommentImage } from "../Comments/styled";

const CommentCard = ({name,userId, avatarImage, comment, status }) => {
  return (
    <>
      <CommentContent  data-test="comment">
        <CommentImage src={avatarImage} alt={`Youuu`} />
        <div>
          <p>
            <span><Link to={`/user/${userId}`}>{name}</Link></span> <span>{status && `• ${status}`}</span>
          </p>
          <p>{comment}</p>
        </div>
      </CommentContent>
    </>
  );
};

export default CommentCard;