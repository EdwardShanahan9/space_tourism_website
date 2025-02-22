import { useContext } from "react";
import CloseIcon from "../../assets/Icons/icon-close.svg";
import { NavbarContext } from "../../context/NavbarContext/NavbarContext";

const MobileNavbar = () => {
  const { activeNavbar, handleNavbar } = useContext(NavbarContext);

  const navItem = ["HOME", "DESTINATION", "CREW", "TECHNOLOGY"];

  return (
    <div className={`MobileNavbar ${activeNavbar ? "active" : ""}`}>
      <img
        onClick={() => handleNavbar()}
        className="MobileNavbar__icon"
        src={CloseIcon}
        alt="Close Icon"
      />

      <div className="MobileNavbar__blur"></div>

      <ul className="MobileNavbar__list active">
        {navItem.map((item, index) => (
          <li key={index}>
            <span>
              <span className="MobileNavbar__number">0{index}</span> {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileNavbar;
