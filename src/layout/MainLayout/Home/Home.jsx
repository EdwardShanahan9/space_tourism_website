import HomeMobile from "../../../assets/images/background-home-mobile.jpg";

const Home = () => {
  return (
    <div className="Home" style={{ backgroundImage: `url(${HomeMobile})` }}>
      <div className="Home__container">
        <p className="Home__title">SO, YOU WANT TO TRAVEL TO</p>

        <h1 className="Home__heading">SPACE</h1>

        <p className="Home__text">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>

        <button className="Home__button">EXPLORE</button>
      </div>
    </div>
  );
};

export default Home;
