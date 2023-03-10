import {
  HeaderContainer,
  LogoTitle,
  ImageCrop,
  ProfileContainer,
  SearchContainer,
  SearchBox,
  Dropdown,
} from './styled';
import { AiOutlineDown } from 'react-icons/ai';
import { DebounceInput } from 'react-debounce-input';
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { getUsersByUsername } from '../../services/api';
import UserCard from './UserCard/UserCard';
import { useNavigate } from "react-router-dom";


const Header = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [dropdownFlag, setDropdownFlag] = useState(false);

  const { logout, token, user } = useContext(AuthContext);

  function Logout() {
    logout();
    alert('Deslogado com sucesso!');
  }

  async function handleSearchValue(username) {
    setSearchValue(username);

    try {
      const { data: users } = username && (await getUsersByUsername(username, token));

      setSearchResult(username ? users : []);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <HeaderContainer>
      <LogoTitle>Linkr</LogoTitle>
      <SearchContainer>
        <DebounceInput
          placeholder='Search for people'
          minLength={3}
          debounceTimeout={300}
          value={searchValue}
          onChange={(e) => handleSearchValue(e.target.value)}
        />
        {searchValue && (
          <SearchBox>
            {!searchResult.length ? (
              <p>Usuário não encontrado :P</p>
            ) : (
              searchResult.map(({ id, avatar_url, name }) => (
                <UserCard
                  key={id}
                  id={id}
                  avatar={avatar_url}
                  username={name}
                  setSearchValue = {setSearchValue}
                />
              ))
            )}
          </SearchBox>
        )}
      </SearchContainer>
      <ProfileContainer drop={dropdownFlag}>
        <button onClick={() => setDropdownFlag(!dropdownFlag)}>
          <AiOutlineDown />
        </button>
        <ImageCrop height={'59px'} width={'59px'}>
          <img
            onClick={() => setDropdownFlag(!dropdownFlag)}
            src={user.avatar_url}
            alt={`User Avatar :)`}
          />
        </ImageCrop>
        {dropdownFlag && (
          <Dropdown onClick={Logout}>
            <button>Logout</button>
          </Dropdown>
        )}
      </ProfileContainer>
    </HeaderContainer>
  );
};

export default Header;
