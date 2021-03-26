import styles from "../styles/Contact.module.scss";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { AiOutlineTwitter } from "react-icons/ai";
const Contact = () => {
  return (
    <div
      className={`is-flex is-align-items-center is-flex-direction-column ${styles.main} `} id="contact"
    >
      <div className={` ${styles.customShape}`}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <h2>Living, learning, & leveling up one day at a time.</h2>
      <div className={styles.iconSet}>
        <a
          href="https://github.com/MasterBrian99"
          rel="noreferrer"
          target="_blank"
        >
          <FiGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/pasindu-p-konghawaththa-3808861a0/"
          rel="noreferrer"
          target="_blank"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://web.facebook.com/pasindu.pramodaya.94"
          rel="noreferrer"
          target="_blank"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://twitter.com/Master_br1an"
          rel="noreferrer"
          target="_blank"
        >
          <AiOutlineTwitter />
        </a>
      </div>
      <p>
        Handcrafted with &#10084; by me &copy;{" "}
        <a href="" className={styles.gitlink} rel="noreferrer" target="_blank">
          MasterBrian99
        </a>{" "}
      </p>
    </div>
  );
};

export default Contact;
