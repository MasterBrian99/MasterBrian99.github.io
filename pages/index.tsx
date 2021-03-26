import { useState, useEffect } from "react";
import NavSm from "../components/Nav/NavSm";
import Head from "next/head";
import HomeMain from "../containers/Home";
import NavMain from "../components/Nav/NavMain";
import About from "../containers/About";
import Project from "../containers/Project";
import Skills from "../containers/Skills";
import Contact from "../containers/Contact";

export default function Home() {
  const getWindowWidth = () => {
    window.innerWidth < 1024 ? setSetNav(false) : setSetNav(true);
  };
  const [setNav, setSetNav] = useState(true);

  useEffect(() => {
    // window.innerHeight < 1024 ? setSetNav(false) : setSetNav(true);
    getWindowWidth();
    window.addEventListener("resize", getWindowWidth);

    return () => {
      window.removeEventListener("resize", getWindowWidth);
    };
  }, []);
  return (
    <>
      <Head>
        <title>Pasindu p konghawaththa</title>
      </Head>
      {setNav ? <NavMain /> : <NavSm />}
      <HomeMain />
      <About></About>
      <Project></Project>
      <Skills />
      <Contact />
    </>
  );
}
