import "./Home.scss";
import HomeMobile from "../../../assets/images/background-home-mobile.jpg";

const Home = () => {
  return (
    <div
      className="Home"
      style={{ backgroundImage: `url(${HomeMobile})` }}
    ></div>
  );
};

export default Home;
