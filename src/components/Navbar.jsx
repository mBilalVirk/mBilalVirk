import React, { useState } from "react";

const Navbar = (props) => {
  const [style, setStyle] = useState({ right: "-200px" });

  const handleOpenMenu = () => {
    setStyle({ right: "0" });
  };

  const handleCloseMenu = () => {
    setStyle({ right: "-200px" });
  };
  return (
    <div>
      <div id="header">
        <div className="container">
          <nav>
            <img src={props.logo} className="logo" alt="Bilal Virk" />
            <ul id="sidemenu" style={style}>
              <li>
                <a href="#header">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#contact">Contact Me</a>
              </li>
              <i className="fas fa-times" onClick={handleCloseMenu}></i>
            </ul>

            <i className="fas fa-bars" onClick={handleOpenMenu}></i>
          </nav>
          <div className="header-text">
            <p>Full-Stack Developer, UI Designer</p>
            <h1>
              Hi, I'm <span>Bilal </span> <br />
              Virk From Pakistan
            </h1>
            <a href="mailto:bilalvirk337@gmail.com" className="hireme">
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
