import styles from '../../styles/HomeButton.module.scss'


const HomeButton = () => {
    return (
        <div className={styles.btnDiv}>
            <a href="https://github.com/MasterBrian99" className='btn'>Github</a>
            <a href="https://www.linkedin.com/in/pasindu-p-konghawaththa-3808861a0/" className='btn '>Contact</a>

        </div>
    )
}

export default HomeButton
