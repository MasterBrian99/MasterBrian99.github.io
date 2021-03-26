import HeaderText from "../components/Header/HeaderText";
import ProjectLg from "../components/Projects/ProjectLg";
import { repo, repo2 } from "../data/data";
import styles from "../styles/Project.module.scss";

const Project = () => {
  return (
    <section className={styles.main} id="projects">
      <div className={styles.shape}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
        </svg>
      </div>
      <div
        className={`is-flex is-flex-direction-column is-align-items-center ${styles.mainProject} `}
      >
        <HeaderText text="My Projects" />
        <p>Here are a few design projects I've worked on recently.</p>

        <div className={`container is-flex ${styles.projectLgset}`}>
          {repo.map((e, i: number) => (
            <ProjectLg
              key={i}
              img={e.img}
              name={e.name}
              description={e.description}
              git={e.git}
            />
          ))}
        </div>
        <div className={`container is-flex ${styles.projectLgset}`}>
          {repo2.map((e, i: number) => (
            <ProjectLg
              key={i}
              img={e.img}
              name={e.name}
              description={e.description}
              git={e.git}
            />
          ))}
        </div>

        {/* <div
          className={` ${styles.projectSmset} container is-flex  is-justify-content-center`}
        >
          <ProjectSm />
          <ProjectSm />
          <ProjectSm />
          <ProjectSm />
        </div> */}
        <a href="https://github.com/MasterBrian99" target="_black">
          See more on Github
        </a>
      </div>
      <div className={styles.shapeBottom}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className={styles.shapeFill}
        >
          <path d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Project;
