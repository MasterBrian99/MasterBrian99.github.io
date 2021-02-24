import { FiExternalLink } from 'react-icons/fi';
import styles from '../../styles/ProjectsContainer.module.scss';
type prop =
    {
        gitLink: string,
        projectName: string,
        description: string,
        lang: string[]
    }

const ProjectSm = ({ gitLink, projectName, description, lang }: prop) => {
    return (
        <div className={`${styles.projectSmDiv} d-flex flex-column m-3`} data-aos="fade-up" data-aos-delay="100" data-aos-duration="800" data-aos-easing="ease-in-out">
            <div className={`${styles.projectSmIcon} d-flex justify-content-end `}>
                <a href={gitLink}> <FiExternalLink /></a>
            </div>
            <div className={`${styles.projectSmText} d-flex flex-column`}>
                <h2>{projectName}</h2>
                <h3>{description}</h3>
                <div className={`${styles.langDiv}  d-flex flex-wrap`}>
                    {lang.map((e, index) => <p key={index} style={{ marginLeft: '1rem' }}>{e}</p>)}
                </div>
            </div>
        </div>
    )
}

export default ProjectSm
