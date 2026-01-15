import "./styles.css";

// Logo component
import Logo from "../Logo/Logo";
import Nav from "./Nav";
import Social from "./Social";

const Header = () => {
  return (
    <header className="header">
      <Logo /> <Nav /> <Social />
    </header>
  );
};

export default Header;
