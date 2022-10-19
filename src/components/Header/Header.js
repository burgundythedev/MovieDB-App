import React from "react";
import myLogo from "../../UI/Image/TMDBlogo.png";
import logoMenu from "../../UI/Image/menu-btn.png";
import "./Header.scss";

const Header = () => {
  const onToggle = () => {
    const menuHamburger = document.querySelector(".menu-logo");
    const navLinks = document.querySelector(".navigation-bar");
    menuHamburger.onClick(navLinks.classList.toggle("mobile-menu"));
  };

  return (
    <nav className="navbar">
      <img className="logo" src={myLogo} alt="Website Logo" />
      <div className="navigation-bar">
        <ul>
          <li>
            <a href="#top-ten">Top Ten</a>
          </li>
          <li>
            <a href="#movie">Movie List</a>
          </li>
          <button
            className="contact"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://www.linkedin.com/in/olivier-bourgogne/";
            }}
          >
            Get In Touch
          </button>
        </ul>
      </div>
      <img
        className="menu-logo"
        src={logoMenu}
        alt="menu-burger"
        onClick={onToggle}
      />
    </nav>
  );
};

export default Header;
