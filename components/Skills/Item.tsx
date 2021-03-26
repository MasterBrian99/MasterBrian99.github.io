import styles from "../../styles/Skills.module.scss";

interface Prop {
  skill: string;
  tech: string[];
}

const SkillItem = ({ skill, tech }: Prop) => {
  return (
    <div
      className={`is-flex is-flex-direction-column is-align-items-center ${styles.item}`}
    >
      <h2>{skill}</h2>
      <ul>
        {tech.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillItem;
