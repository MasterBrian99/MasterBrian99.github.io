import styles from "../../styles/Navbar.module.scss";
import React, { useState, useEffect } from "react";

const NavSm = () => {
  const [sideNav, setSideNav] = useState(false);
  const [sideNavDisplay, setSideNavDisplay] = useState("none");

  const showSideNav = () => {
    sideNav ? setSideNavDisplay("flex") : setSideNavDisplay("none");
  };

  useEffect(() => {
    showSideNav();
    return () => {};
  }, [sideNav]);

  return (
    <div className={`is-flex is-flex-direction-column   ${styles.mainSm}`}>
      <div className="is-flex is-justify-content-space-between is-align-items-center">
        <img src="/logo2.png" alt="" />
        <img
          src="/icons8-menu-48.png"
          alt=""
          onClick={() => {
            setSideNav(!sideNav);
          }}
        />
      </div>
      <div
        className=" is-flex-direction-column "
        style={{ display: sideNavDisplay }}
        onClick={() => {
          setSideNav(!sideNav);
        }}
      >
        <ul>
          <li>
            <a href="#home" rel="noreferrer">
              Home
            </a>
          </li>
          <li>
            <a href="#about" rel="noreferrer">
              About Me
            </a>
          </li>
          <li>
            <a href="#projects" rel="noreferrer">
              My Projects
            </a>
          </li>
          <li>
            <a href="#skills" rel="noreferrer">
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" rel="noreferrer">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavSm;
