import { UserContent } from './styled';
import { ImageCrop } from '../styled';
import { Link } from 'react-router-dom';

const UserCard = ({ avatar, username, id, setSearchValue, follows }) => {
  return (
    <Link data-test='user-search' to={`/user/${id}`} onClick={() => setSearchValue('')}>
      <UserContent>
        <ImageCrop height={'39px'} width={'39px'}>
          <img src={avatar} alt={`User Avatar :)`} />
        </ImageCrop>
        <span>{username}</span>
        {follows ?
          <span Style="color: #C4C4C4">• following</span>
          :
          <span></span>
        }
      </UserContent>
    </Link>
  );
};

export default UserCard;
