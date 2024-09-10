import "./NavBar.css";
import logo from "../../assets/images/logo.png";
import { useRef, useState } from "react";
import { useEffect } from "react";
import menu_icon from "../../assets/images/menu-icon.png";

const NavBar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setShow(true) : setShow(false);
    });
  }, []);

  const linksList = useRef();
  const linksToggle = () => {
    linksList.current.classList.toggle("active");
  };

  const scrollToContact = () => {
    window.location.href = "#contact";
  };

  return (
    <nav id="nav" className={show ? "dark-nav" : ""}>
      <div className="nav-container container">
        <a href="./">
          <img src={logo} alt="logo" className="logo" />
        </a>
        <ul ref={linksList}>
          <li>
            <a href="#landing">Home</a>
          </li>
          <li>
            <a href="#programs">Program</a>
          </li>
          <li>
            <a href="#about">About US</a>
          </li>
          <li>
            <a href="#campus">Campus</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <button className="button" onClick={scrollToContact}>
              Contact US
            </button>
          </li>
        </ul>
        <img
          src={menu_icon}
          alt="menu icon"
          className="menu"
          onClick={linksToggle}
        />
      </div>
    </nav>
  );
};

export default NavBar;
