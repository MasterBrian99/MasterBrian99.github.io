import Hero from "../components/Hero/Hero";
import styles from "../styles/Home.module.scss";
const HomeMain = () => {
  return (
    <>
      <section className={styles.main} id="home">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z"></path>
        </svg>
        <div
          className={`is-flex is-align-items-center is-flex-direction-column is-justify-content-center container ${styles.heroMain} `}
        >
          <p>Code to bring ideas to life</p>
          <Hero></Hero>
          <a href="#" className={styles.contactBtn}>
            Contact Me
          </a>
        </div>
      </section>
    </>
  );
};

export default HomeMain;
