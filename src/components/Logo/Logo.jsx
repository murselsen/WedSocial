// Styles
import "./Logo.css";
// Images
// import logo from "../../assets/logo-trans.png";

const Logo = () => {
  return (
    <div className="logo" onClick={() => (window.location.href = "/")}>
      <h2 className="logo-title">
        Wedding <span>Social</span>
      </h2>
    </div>
  );
};

export default Logo;
