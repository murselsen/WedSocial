import "./styles.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Social = () => {
  return (
    <nav className="social">
      <ul className="social-list">
        <li className="social-item">
          <a href="#facebook" className="social-link">
            <FaFacebookF />
          </a>
        </li>
        <li className="social-item">
          <a href="#instagram" className="social-link">
            <FaInstagram />
          </a>
        </li>
        <li className="social-item">
          <a href="#twitter" className="social-link">
            <FaTwitter />
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Social;
