import About from "../components/App/About"
import FooterMain from "../components/App/Footer"
import HomeMain from "../components/App/HomeMain"
import Projects from "../components/App/Projects"
import Skills from "../components/App/Skills"
import NavbarMain from "../components/Navbar/NavbarMain"


export default function Home() {
  return (
    <>
      <NavbarMain />
      <div className="main">
        <section id="home">
          <HomeMain />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="project">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
          <FooterMain />

        </section>

      </div>

    </>

  )
}
