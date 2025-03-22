import About from "./components/about";
import Contact from "./components/contact";
import { DockCustom } from "./components/dock-custom";
import Hero from "./components/hero";
import Projects from "./components/projects";
import WorkTimeline from "./components/work-timeline";

export default function Home() {
  return (
    <>
      <div className="relative">
        <div className="fixed left-1/2 -translate-x-1/2 mt-8 z-30">
          <DockCustom />
        </div>
        <Hero />
      </div>
      <div>
        <About />
      </div>
      <div>
        <WorkTimeline />
      </div>
      <div className="mx-auto container">
        <Projects />
      </div>
      <div className="mx-auto container">
        <Contact />
      </div>
    </>
  );
}
