import LogoIcon from "../../assets/Icons/logo.svg";
import MenuIcon from "../../assets/Icons/icon-hamburger.svg";
import MobileNavbar from "../MobileNavbar/MobileNavbar";
import { useContext } from "react";
import { NavbarContext } from "../../context/NavbarContext/NavbarContext";

const Navbar = () => {
  const { handleNavbar } = useContext(NavbarContext);

  return (
    <nav className="Navbar">
      <img className="Navbar__logo" src={LogoIcon} alt="Logo" />

      <img
        onClick={() => handleNavbar()}
        className="Navbar__menu"
        src={MenuIcon}
        alt="Menu Icon"
      />

      <MobileNavbar />
    </nav>
  );
};

export default Navbar;
