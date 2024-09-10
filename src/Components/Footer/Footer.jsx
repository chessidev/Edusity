import "./Footer.css";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer id="footer" className="container">
      <p>&copy; {year} Edusity. All rights reserved.</p>
      <ul>
        <li>
          <a href="./">Terms of Services</a>
        </li>
        <li>
          <a href="./">Privacy Policy</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
