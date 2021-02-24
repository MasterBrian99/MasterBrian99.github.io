import styles from "../../styles/ProjectLgButton.module.scss";

type prop =
    {
        gitLink: string,
        liveLink: string
    }

const ProjectLgButton = ({ gitLink, liveLink }: prop) => {
    return (
        <div className={styles.btnDiv}>
            <a target='_blank' href={gitLink} className='btn'>Github</a>
            <a target='_blank' href={liveLink} className='btn '>Live Version</a>
        </div>
    )
}

export default ProjectLgButton
