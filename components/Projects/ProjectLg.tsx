import styles from "../../styles/Project.module.scss";

interface Prop {
  img: string;
  name: string;
  description: string;
  git: string;
}

const ProjectLg = ({ img, name, description, git }: Prop) => {
  return (
    <div className={styles.projectLg}>
      <img src={img} alt="" />
      <div className="is-flex is-align-items-center is-flex-direction-column is-justify-content-center">
        <h2>{name}</h2>
        <p>{description}</p>
        <div className="">
          <a href={git} target="_blank" rel="noreferrer">
            Github &#10148;
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectLg;
