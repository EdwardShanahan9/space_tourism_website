import LogoIcon from "../../assets/Icons/logo.svg";
import MenuIcon from "../../assets/Icons/icon-hamburger.svg";
import MobileMenuItem from "../MobileMenuItem/MobileMenuItem";

const Navbar = () => {
  const navItem = ["HOME", "DESTINATION", "CREW", "TECHNOLOGY"];

  return (
    <nav className="Navbar">
      <img className="Navbar__logo" src={LogoIcon} alt="Logo" />

      <img className="Navbar__menu" src={MenuIcon} alt="Menu Icon" />

      <ul className="Navbar__mobile-list">
        {navItem.map((item, index) => (
          <MobileMenuItem key={index} text={item} number={index} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
