import HeaderText from "../components/Header/HeaderText";
import SkillItem from "../components/Skills/Item";
import styles from "../styles/Skills.module.scss";
import { skill as skillset } from "../data/data";
const Skills = () => {
  return (
    <div
      className={`is-flex is-flex-direction-column is-align-items-center ${styles.main}`}
      id="skills"
    >
      <HeaderText text="Skills" />
      <div
        className={`container is-flex is-justify-content-space-evenly ${styles.skillSet}`}
      >
        {skillset.map((e, i: number) => (
          <SkillItem key={i} skill={e.skill} tech={e.tech} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
