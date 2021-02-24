import React, { useState, useEffect } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import styles from '../../styles/Navbar.module.scss';

const NavbarMain = () => {
    const [navSize, setnavSize] = useState('10rem')
    const [navColor, setnavColor] = useState(true);
    const listenScrollEvent = () => {
        window.scrollY > 10 ? setnavSize('5rem') : setnavSize('10rem');
        window.scrollY > 10 ? setnavColor(false) : setnavColor(true);

    }
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
    }, [])

    return (
        <   >
            <Navbar expand="lg" fixed="top" className={`${styles.navBar} ${navColor ? styles.navColorNone : styles.navColor}`} style={{ height: navSize, transition: 'all 1s' }}>
                <Container fluid className={styles.container}>
                    <Navbar.Brand href="#home">
                        <img
                            src="/logo2.png"
                            width="130"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className={`${styles.navItem} ml-auto`}>
                            <a href="#home"> Home</a>
                            <a href="#about"> About</a>
                            <a href="#project"> Projects</a>
                            <a href="#skills"> Skills</a>
                        </Nav>
                        <a href="https://github.com/MasterBrian99/MasterBrian99.github.io" className={`btn ${styles.githubBtn}`}>Github</a>
                    </Navbar.Collapse>
                </Container>

            </Navbar>
        </ >
    )
}
export default NavbarMain