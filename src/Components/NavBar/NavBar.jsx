import "./NavBar.css";
import logo from "../../assets/images/logo.webp";
import { useRef, useState } from "react";
import { useEffect } from "react";
import menu_icon from "../../assets/images/menu-icon.webp";
import dark_mode from "../../assets/images/dark-mode.webp";
import light_mode from "../../assets/images/light-mode.webp";

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

  const dark = useRef();
  const light = useRef();
  const darkOn = () => {
    document.body.classList.add("dark");
    dark.current.classList.add("active");
    light.current.classList.remove("active");
  };
  const lightOn = () => {
    document.body.classList.remove("dark");
    light.current.classList.add("active");
    dark.current.classList.remove("active");
  };

  return (
    <nav id="nav" className={show ? "dark-nav" : ""}>
      <div className="nav-container container">
        <div className="logo-container">
          <a href="./">
            <img src={logo} alt="logo" className="logo" />
          </a>
          <img
            src={dark_mode}
            alt="dark mode"
            className="dark-mode"
            ref={dark}
            onClick={darkOn}
          />
          <img
            src={light_mode}
            alt="light mode"
            className="light-mode active"
            ref={light}
            onClick={lightOn}
          />
        </div>
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
