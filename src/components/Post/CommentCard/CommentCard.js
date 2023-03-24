import { CommentContent, CommentImage } from "../Comments/styled";

const CommentCard = ({name, avatarImage, comment, status }) => {
  return (
    <>
      <CommentContent  data-test="comment">
        <CommentImage src={avatarImage} alt={`Youuu`} />
        <div>
          <p>
            <span>{name}</span> <span>{status && `• ${status}`}</span>
          </p>
          <p>{comment}</p>
        </div>
      </CommentContent>
    </>
  );
};

export default CommentCard;