import MainName from "../MainName"
import styles from '../../styles/Skills.module.scss';
import SkillComponent from "../Skills/SkillComponent";
import { MdLanguage } from "react-icons/md";
import { skills as skillsData } from '../../pages/api/data';

const Skills = () => {
    return (
        <div className={`${styles.container} d-flex flex-column justify-content-center align-items-center`}>
            <MainName name='Skills' />

            <div className={styles.skillDiv}>

                {skillsData.map((e, index) => <SkillComponent
                    key={index}
                    skill={e.skill}
                    technologies={e.technologies}
                />)}

            </div>
        </div>
    )
}

export default Skills
