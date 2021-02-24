
import styles from '../../styles/Projects.module.scss';
import MainName from '../MainName';
import ProjectLg from '../Projects/ProjectLg';
import ProjectSm from '../Projects/ProjectSm';
import { projectMain as projectMainData, projectSm as projectSmData } from '../../pages/api/data';
const Projects = () => {
    return (
        <div className={`${styles.container} d-flex flex-column align-items-center`}>
            <MainName name='Projects' />

            {projectMainData.map((e, index: number) => <ProjectLg
                key={index}
                img={e.img}
                projectName={e.projectName}
                description={e.description}
                lang={e.lang}
                gitLink={e.gitLink}
                liveLink={e.liveLink}
            />)}


            <div className={` d-flex flex-wrap justify-content-center`}>

                {projectSmData.map((e, index) => <ProjectSm
                    key={index}
                    gitLink={e.gitLink}
                    projectName={e.projectName}
                    description={e.description}
                    lang={e.lang}

                />)}



            </div>


        </div>
    )
}

export default Projects
