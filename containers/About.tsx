import Item from "../components/AboutItem/Item";
import styles from "../styles/About.module.scss";

import { item as itemList } from "../data/data";
import HeaderText from "../components/Header/HeaderText";
const About = () => {
  return (
    <section
      className={`is-flex container is-flex-direction-column  ${styles.main}`}
      id="about"
    >
      <HeaderText text="About me" />

      <div
        className={`is-flex is-justify-content-space-around is-flex-wrap-nowrap ${styles.items}`}
      >
        {itemList.map((e, i: number) => (
          <Item key={i} text={e.text} img={e.img} />
        ))}
      </div>
      <div
        className={` is-flex is-justify-content-space-between is-align-items-center   ${styles.info}`}
      >
        <h2>Pasindu Pramodaya</h2>
        <div className={`${styles.details}`}>
          <h3>
            A web Designer and Front end Developer from Sri Lanka who loves
            design and the internet Sphere
          </h3>
          <p>
            I am a programmer with good knowledge of frontend and backend
            techniques.I love spending time on fixing little details and
            optimizing web apps.
          </p>
          <p>
            There’s nothing I enjoy more than designing and developing good
            websites for nice people. It really is that simple. I’ve spent many
            years trying to perfect what I do and while I’ll never be perfect, I
            do my best to come close. If you’ve got a project you’d like to work
            on with me just get in touch and we can get to work!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
