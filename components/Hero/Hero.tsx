import styles from "../../styles/Home.module.scss";
import React from "react";
import Typical from "react-typical";
const Hero = () => {
  return (
    <div className={`is-flex ${styles.hero}`}>
      <Typical
        steps={[
          "Web Developer",
          3000,
          "Product Designer",
          3000,
          "UI/UX Designer",
          3000,
          "Programmer",
          3000,
        ]}
        loop={Infinity}
        wrapper="h1"
      />
    </div>
  );
};

export default Hero;
