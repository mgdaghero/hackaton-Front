import Title from "components/Title";
import imgLogo from "../../assets/imgs/Ofertalo.png";
import "./Home.css";

const HomePage = () => {
  return (
    <div className="background">
      <figure className="home-fig">
        <img src={imgLogo} alt="logo-home" />
      </figure>
    </div>
  );
};

export default HomePage;
