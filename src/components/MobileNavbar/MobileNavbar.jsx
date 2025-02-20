import CloseIcon from "../../assets/Icons/icon-close.svg";

const MobileNavbar = () => {
  const navItem = ["HOME", "DESTINATION", "CREW", "TECHNOLOGY"];

  return (
    <div className="MobileNavbar">
      <img className="MobileNavbar__icon" src={CloseIcon} alt="Close Icon" />

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
