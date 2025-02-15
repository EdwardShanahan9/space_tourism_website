import LogoIcon from "../../assets/Icons/logo.svg";
import MenuIcon from "../../assets/Icons/icon-hamburger.svg";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <img className="Navbar__logo" src={LogoIcon} alt="Logo" />

      <img className="Navbar__menu" src={MenuIcon} alt="Menu Icon" />
    </nav>
  );
};

export default Navbar;
