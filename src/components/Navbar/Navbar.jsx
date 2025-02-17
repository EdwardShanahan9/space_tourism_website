import LogoIcon from "../../assets/Icons/logo.svg";
import MenuIcon from "../../assets/Icons/icon-hamburger.svg";
import MobileNavbar from "../MobileNavbar/MobileNavbar";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <img className="Navbar__logo" src={LogoIcon} alt="Logo" />

      <img className="Navbar__menu" src={MenuIcon} alt="Menu Icon" />

      <MobileNavbar />
    </nav>
  );
};

export default Navbar;
