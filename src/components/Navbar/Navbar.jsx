import LogoIcon from "../../assets/Icons/logo.svg";
import MenuIcon from "../../assets/Icons/icon-hamburger.svg";
import MobileNavbar from "../MobileNavbar/MobileNavbar";
import { useContext } from "react";
import { NavbarContext } from "../../context/NavbarContext/NavbarContext";

const navItem = ["HOME", "DESTINATION", "CREW", "TECHNOLOGY"];

const Navbar = () => {
  const { handleNavbar } = useContext(NavbarContext);

  return (
    <nav className="Navbar">
      <div className="Navbar__logo">
        <img className="" src={LogoIcon} alt="Logo" />
      </div>

      <img
        onClick={() => handleNavbar()}
        className="Navbar__menu"
        src={MenuIcon}
        alt="Menu Icon"
      />

      <ul className="Navbar__list">
        {navItem.map((item, index) => (
          <li key={index}>
            <span>
              <span className="Navbar__number">0{index}</span> {item}
            </span>
          </li>
        ))}
      </ul>

      <div className="Navbar__overlay"></div>

      <MobileNavbar />
    </nav>
  );
};

export default Navbar;
