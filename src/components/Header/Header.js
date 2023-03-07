import {
  HeaderContainer,
  LogoTitle,
  SearchInput,
  ImageCrop,
  ProfileContainer,
} from "./styled";
import { AiOutlineDown } from "react-icons/ai";

const Header = () => {
  return (
    <HeaderContainer>
      <LogoTitle>Linkr</LogoTitle>
      <SearchInput placeholder="Search for people" />
      <ProfileContainer>
        <button>
          <AiOutlineDown />
        </button>
        <ImageCrop>
          <img
            src={`https://t.ctcdn.com.br/SquOzwLGbhezsZr0JLCoWRTevsc=/512x288/smart/filters:format(webp)/i598772.jpeg`}
          ></img>
        </ImageCrop>
      </ProfileContainer>
    </HeaderContainer>
  );
};

export default Header;
