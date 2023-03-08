import { UserContent } from "./styled";
import { ImageCrop } from "../styled";

const UserCard = ({avatar, username} ) => {
  return (
    <UserContent>
      <ImageCrop height={"39px"} width={"39px"}>
        <img
          src={avatar}
          alt={`User Avatar :)`}
        />
      </ImageCrop>
      <span>{username}</span>
    </UserContent>
  );
};

export default UserCard;
