import { UserContent } from "./styled";
import { ImageCrop } from "../styled";
import { Link } from "react-router-dom";

const UserCard = ({ avatar, username, id, setSearchValue }) => {
  return (
    <Link to={`/user/${id}`} onClick={() => setSearchValue("")}>
      <UserContent>
        <ImageCrop height={"39px"} width={"39px"}>
          <img src={avatar} alt={`User Avatar :)`} />
        </ImageCrop>
        <span>{username}</span>
      </UserContent>
    </Link>
  );
};

export default UserCard;
