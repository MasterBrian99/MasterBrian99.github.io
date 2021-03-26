import styles from "../../styles/Navbar.module.scss";
import React, { useState, useEffect } from "react";

const NavMain = () => {
  const listenScrollEvent = () => {
    window.scrollY > 650
      ? setnavDark({
          logo: false,
          fontColor: "#000000",
          mainColor: "#ffffff",
          shadow: "0px 7px 15px -9px rgba(0, 0, 0, 0.45)",
        })
      : setnavDark({
          logo: true,
          fontColor: "#fff",
          mainColor: "transparent",
          shadow: "none",
        });
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  const [navDark, setnavDark] = useState({
    logo: true,
    fontColor: "#fff",
    mainColor: "transparent",
    shadow: "none",
  });
  return (
    <div
      className={`is-flex is-align-items-center  ${styles.main}`}
      style={{
        backgroundColor: navDark.mainColor,
        boxShadow: navDark.shadow,
      }}
    >
      <div className="container is-flex is-justify-content-space-between is-align-items-center">
        {/* <Image
          width="10rem"
          height="2.5rem"
          src={`${logos[0].img}`}
          quality="100"
          alt="logo"
        /> */}
        <img src={`${navDark.logo ? "/logo.png" : "/logo2.png"}`} alt="" />
        <ul>
          <li>
            <a
              href="#home"
              rel="noreferrer"
              style={{ color: navDark.fontColor }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              rel="noreferrer"
              style={{ color: navDark.fontColor }}
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#projects"
              rel="noreferrer"
              style={{ color: navDark.fontColor }}
            >
              My Projects
            </a>
          </li>
          <li>
            <a
              href="#skills"
              rel="noreferrer"
              style={{ color: navDark.fontColor }}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#contact"
              rel="noreferrer"
              style={{ color: navDark.fontColor }}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavMain;
