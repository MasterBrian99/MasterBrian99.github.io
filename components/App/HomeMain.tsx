import styles from '../../styles/Home.module.scss';
import HomeButton from "../Buttons/HomeButton";
const HomeMain = () => {


    return (
        <div className={`${styles.container} d-flex justify-content-center align-items-center `} >
            <div className={styles.gridContainer}>

                <div>
                    <img src="/main-pic.png" alt="hero cover" />
                </div>
                <div>
                    <h1 >{"<"}Creative{">"}</h1>
                    <h2 >Developer.</h2>
                    <h3 >I build things for the web.</h3>
                    {/* <p>A web Designer and Front end Developer from
      Sri Lanka who loves design and the internet Sphere</p> */}
                    <HomeButton />
                </div>

            </div>

        </div >
    )
}

export default HomeMain
