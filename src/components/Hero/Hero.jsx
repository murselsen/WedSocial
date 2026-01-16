import "./styles.css";

// Logo Image,
import logo from "../../assets/logo-trans.png";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <img src={logo} alt="Wedding Celebration" className="hero-image" />
      <h1 className="hero-title">Welcome to WedSocial</h1>

      <p className="hero-subTitle">Your ultimate wedding planning companion.</p>
    </section>
  );
};

export default Hero;
