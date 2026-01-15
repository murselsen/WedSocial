import "./styles.css";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-item">
          <a href="#hero" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#how-it-works" className="nav-link">
            How it works
          </a>
        </li>
        <li className="nav-item">
          <a href="#features" className="nav-link">
            Features
          </a>
        </li>

        <li className="nav-item">
          <a href="#testimonials" className="nav-link">
            Testimonials
          </a>
        </li>
        <li className="nav-item">
          <a href="#pricing" className="nav-link">
            Pricing
          </a>
        </li>
        <li className="nav-item">
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
