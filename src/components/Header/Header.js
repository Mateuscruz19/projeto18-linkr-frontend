import {
  HeaderContainer,
  LogoTitle,
  ImageCrop,
  ProfileContainer,
  SearchContainer,
  SearchBox,
} from "./styled";
import { AiOutlineDown } from "react-icons/ai";
import { DebounceInput } from "react-debounce-input";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { getUsersByUsername } from "../../services/api";
import UserCard from "./UserCard/UserCard";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
     if(!token) return navigate("/login");
   }, [token]);

  async function handleSearchValue(username) {
    setSearchValue(username);

    try {
      const { data: users } = await getUsersByUsername(
        username,
        token
      );
      console.log(users);
      setSearchResult(users);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <HeaderContainer>
      <LogoTitle>Linkr</LogoTitle>
      <SearchContainer>
        <DebounceInput
          placeholder="Search for people"
          minLength={3}
          debounceTimeout={300}
          onChange={(e) => handleSearchValue(e.target.value)}
        />
        {searchValue && (
          <SearchBox>
            {
              searchResult.map(({ id, avatar_url, name }) => (
                <UserCard key={id} avatar={avatar_url} username={name} />
              ))}
          </SearchBox>
        )}
      </SearchContainer>
      <ProfileContainer>
        <button>
          <AiOutlineDown />
        </button>
        <ImageCrop height={"59px"} width={"59px"}>
          <img
            src={`https://t.ctcdn.com.br/SquOzwLGbhezsZr0JLCoWRTevsc=/512x288/smart/filters:format(webp)/i598772.jpeg`}
            alt={`User Avatar :)`}
          />
        </ImageCrop>
      </ProfileContainer>
    </HeaderContainer>
  );
};

export default Header;
