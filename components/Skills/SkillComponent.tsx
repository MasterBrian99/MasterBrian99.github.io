import styles from '../../styles/SkillComponent.module.scss';
import { MdLanguage } from "react-icons/md";

type prop =
    {
        skill: string,
        technologies: string[],
    }

const SkillComponent = ({ skill, technologies }: prop) => {

    return (
        <div className={`${styles.skill} f-flex flex-column `} data-aos="fade-up" data-aos-delay="100" data-aos-duration="800" data-aos-easing="ease-in-out">
            <div className="d-flex justify-content-around">
                <h2><MdLanguage className={styles.skillIcon} /> {skill}</h2>
            </div>
            <ul>
                {technologies.map((e, index) => <li key={index}>{e}</li>)}

            </ul>
        </div>
    )
}

export default SkillComponent
