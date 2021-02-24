import styles from '../../styles/ProjectsContainer.module.scss';
import ProjectLgButton from '../Buttons/ProjectLgButton';
type prop =
    {
        img: string,
        projectName: string,
        description: string,
        lang: string[],
        gitLink: string,
        liveLink: string
    }

const ProjectLg = ({ img, projectName, description, lang, gitLink, liveLink }: prop) => {
    return (
        <div className={`${styles.mainContainer} row w-100`} data-aos="fade-up" data-aos-delay="100" data-aos-duration="800" data-aos-easing="ease-in-out">
            <div className={`col-lg-5 ${styles.projectImg} `}>
                <img src={img} alt={img + ' img'} />
            </div>
            <div className={`${styles.projectText} col-lg-7`}>
                <h2>{projectName}</h2>
                <h3>{description}</h3>
                <div className={`${styles.langDiv}  d-flex flex-wrap`}>
                    {lang.map((e, index) =>
                        <p key={index}>{e}</p>
                    )}

                </div>
                <ProjectLgButton gitLink={gitLink} liveLink={liveLink} />
            </div>
        </div>
    )
}

export default ProjectLg
