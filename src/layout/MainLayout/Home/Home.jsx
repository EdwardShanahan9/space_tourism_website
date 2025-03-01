import { useEffect, useState } from "react";
import HomeMobile from "../../../assets/images/background-home-mobile.jpg";
import HomeTablet from "../../../assets/images/background-home-tablet.jpg";
import HomeDesktop from "../../../assets/images/background-home-desktop.jpg";

const Home = () => {
  const [backgroundImage, setBackgroundImage] = useState(HomeMobile);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setBackgroundImage(HomeMobile);
    } else if (window.innerWidth >= 768 && window.innerWidth < 900) {
      setBackgroundImage(HomeTablet);
    } else if (window.innerWidth >= 900) {
      setBackgroundImage(HomeDesktop);
    }
  }, [setBackgroundImage]);

  return (
    <div
      className="Home"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="Home__container">
        <div>
          <p className="Home__title">SO, YOU WANT TO TRAVEL TO</p>

          <h1 className="Home__heading">SPACE</h1>

          <p className="Home__text">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        <button className="Home__button">EXPLORE</button>
      </div>
    </div>
  );
};

export default Home;
