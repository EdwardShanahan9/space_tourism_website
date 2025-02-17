import CloseIcon from "../../assets/Icons/icon-close.svg";

const MobileNavbar = () => {
  const navItem = ["HOME", "DESTINATION", "CREW", "TECHNOLOGY"];

  return (
    <div className="MobileNavbar">
      <img className="MobileNavbar__icon" src={CloseIcon} alt="Close Icon" />

      <ul className="MobileNavbar__list">
        {navItem.map((item, index) => (
          <li key={index}>
            0{index} {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileNavbar;
