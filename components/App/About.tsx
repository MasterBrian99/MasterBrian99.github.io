import styles from '../../styles/About.module.scss'
import { aboutData } from '../../pages/api/data';


const About = () => {
    return (
        <div className={styles.container} data-aos="fade-up" data-aos-delay="100" data-aos-duration="800" data-aos-easing="ease-in-out">
            <div className={`${styles.containerInfo} d-flex `} >
                <div className='d-flex flex-column'>
                    <img src="/profile.png" alt="" />
                </div>
            </div>
            <div className={styles.containerText}>
                <p >About me</p>
                <h1>Not Your Average Software Developer</h1>
                {aboutData.map((e, index) => <p key={index}>{e}</p>)}
            </div>


        </div>
    )
}

export default About
