import LogoImage from "../../../assets/Logos/1/Safepay-logo-01.svg";
import LogoImageBlack from "../../../assets/Logos/1/Safepay-logo-01_black.svg";
import { useNavigate } from "react-router-dom";
import { HeaderWrapper, Logo, NavMenu } from "./styledComponents";
import { Button } from "../../../styles/globalStyledComponents";

const Header = ({ background }: { background: string }) => {
  const navigate = useNavigate();
  return (
    <HeaderWrapper>
      <Logo
        onClick={() => navigate("/home")}
        src={background ? LogoImageBlack : LogoImage}
      />
      <NavMenu>
        <Button page="header" size="small" onClick={() => navigate("/home")}>
          Home
        </Button>
        <Button page="header" size="small" onClick={() => navigate("/lookup")}>
          Lookup
        </Button>
      </NavMenu>
    </HeaderWrapper>
  );
};

export default Header;
