import React from "react";
import myLogo from "../../UI/Image/TMDBlogo.png";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div>
        <img className="logo" src={myLogo} alt="Website Logo" />
      </div>
      <div className="navigation-bar">
        <ul>
          <li>
            <a href="">TOP 10</a>
          </li>
          <li>
            <a href="">Movies</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
