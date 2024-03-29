import product from "./assets/product.svg";
import system from "./assets/system.svg";
import ui from "./assets/ui.png";
import web from "./assets/web.svg";
import myAbout from "./assets/about-me.svg";

const aboutList = [
  {
    name: "product design",
    icon: product,
    width: "w-60",
  },
  {
    name: "system engineering",
    icon: system,
    width: "w-44",
  },
  {
    name: "web development",
    icon: ui,
    width: "w-36",
  },

  { name: "backend development", icon: web, width: "w-36" },
];
function App() {
  return (
    <>
      <section className="pb-20 w-full h-full bg-purple-200">
        <div className="flex relative flex-col justify-center items-center w-full h-full min-h-screen max-h-full">
          <div className="flex fixed top-0 z-20 justify-between items-center w-full h-20 bg-white border-b-2 border-black sm:flex md:flex lg:hidden xl:hidden 2xl:hidden">
            <h3 className="pl-4 text-3xl font-bold">Portfolio.</h3>
          </div>
          <div className="hidden fixed top-8 z-20 justify-between items-center px-8 w-2/3 h-24 bg-white rounded-full border-2 border-black sm:w-10/12 md:w-10/12 lg:w-11/12 xl:w-3/4 2xl:w-2/3 sm:hidden md:hidden lg:flex xl:flex 2xl:flex">
            <div>
              <h3 className="text-4xl font-bold">Portfolio.</h3>
            </div>
            <div>
              <ul className="flex text-lg">
                <li className="px-8">
                  <a href="">About</a>
                </li>
                <li className="px-8">
                  <a href="">Projects</a>
                </li>
                <li className="px-8">
                  <a href="">Skills</a>
                </li>
                <li className="px-8">
                  <a href="">Contact</a>
                </li>
              </ul>
            </div>
            <div>
              <a
                href="/"
                className="px-3 py-4 font-bold text-black bg-white border-2 border-black duration-300 sm:px-8 md:px-8 lg:px-8 xl:px-8 2xl:px-8 text-md shadow-contact-btn rounded-50 hover:shadow-none"
              >
                Contact me
              </a>
            </div>
          </div>
          <div className="fadeInUp-animation">
            <h1 className="text-4xl font-bold text-center text-gray-800 capitalize sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
              Code to bring <br /> ideas to life
            </h1>
          </div>
          <div className="pt-12 w-10/12 text-md sm:w-10/12 md:w-10/12 lg:w-4/6 xl:w-3/4 2xl:w-2/4 sm:text-lg md:text-lg lg:text-2xl xl:text-2xl 2xl:text-2xl fadeInUp-animation">
            <p className="text-center text-md">
              As a seasoned developer, I possess a proven track record in
              successfully delivering projects using Node.js, React, Java, Go
              and Rust. With a strong commitment to excellence, I excel in
              building scalable applications and fostering collaboration across
              diverse teams. Let's connect and discuss how I can contribute to
              your project's success!
            </p>
          </div>
          <div className="absolute z-10 w-full h-full">
            <img
              className="absolute right-2 top-28 w-16 2xl:top-60 xl:top-60 lg:top-40 md:top-40 sm:top-32 2xl:right-80 xl:right-60 lg:right-40 md:right-20 sm:right-12 hover:animate-spin-slow 2xl:w-32 xl:w-28 lg:w-20 md:w-16 sm:w-16"
              src={
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              }
              alt=""
            />
            <img
              className="absolute right-4 bottom-12 w-16 duration-300 transform-gpu 2xl:bottom-52 xl:bottom-40 lg:bottom-32 md:bottom-16 sm:bottom-16 2xl:right-20 xl:right-16 lg:right-16 md:right-12 sm:right-8 hover:rotate-12 2xl:w-32 xl:w-28 lg:w-20 md:w-16 sm:w-16"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            />

            <img
              className="absolute left-4 top-28 w-16 duration-700 transform-gpu 2xl:left-40 xl:left-40 lg:left-36 md:left-24 sm:left-20 hover:rotate-360 2xl:w-32 xl:w-28 lg:w-20 md:w-16 sm:w-16"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg"
            />

            <img
              className="absolute left-4 bottom-12 w-12 duration-300 transform-gpu hover:-rotate-12 2xl:w-32 xl:w-28 lg:w-20 md:w-16 sm:w-16 xl:left-40 lg:left-36 md:left-24 sm:left-20"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            />

            <img
              className="absolute bottom-16 left-2/4 w-16 2xl:w-32 xl:w-28 lg:w-20 md:w-16 sm:w-16"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elixir/elixir-original-wordmark.svg"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col items-center pb-20 w-11/12 h-full bg-white rounded-full border-2 border-black 2xl:h-80 xl:h-80 lg:h-80 md:h-80 sm:h-full 2xl:w-3/5 xl:w-4/5 lg:w-11/12 md:w-11/12 sm:w-11/12">
            <div>
              <h5 className="pt-6 text-3xl font-bold capitalize">what i do</h5>
            </div>
            <div className="flex flex-col justify-center pt-10 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col">
              {aboutList.map((el, i) => (
                <div
                  key={i}
                  className="flex flex-col justify-end items-center px-4 capitalize"
                >
                  <img src={el.icon} alt="" className={`${el.width}`} />
                  <p>{el.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="relative w-full min-h-screen max-h-full bg-rose-200">
        <div className="custom-shape-divider-top-1686338873 fill-purple-200">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="fill-purple-200 shape-fill"
            ></path>
          </svg>
        </div>
        <div className="container py-40 mx-auto w-3/4">
          <div className="flex flex-col justify-center sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row">
            <div className="flex flex-1 justify-center">
              <img src={myAbout} alt="" className="w-96" />
            </div>
            <div className="flex flex-col flex-1 justify-center items-center">
              <h3 className="pb-4 text-2xl font-bold">Hello, I’m Pasindu.</h3>
              <ul className="list-disc">
                <li>
                  Skilled in building enterprise-grade applications with Java,
                  utilizing its robust libraries, frameworks, and
                  object-oriented programming principles.
                </li>
                <li>
                  Strong knowledge of frontend development, specializing in
                  React, React ecosystem and Angular.
                </li>
                <li>
                  Familiar with various frontend technologies, including HTML5,
                  CSS3, JavaScript, TypeScript, and jQuery.
                </li>
                <li>
                  Strong problem-solving and debugging skills, with a keen eye
                  for detail and a passion for writing clean and maintainable
                  code.
                </li>
                <li>
                  Proactive learner who keeps up with the latest trends and
                  technologies in web development, constantly seeking new
                  challenges and opportunities to grow.
                </li>
                <li>
                  Proficient in building scalable and efficient backend
                  applications using Node.js, leveraging its event-driven
                  architecture and extensive package ecosystem.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full h-full border-b-2 border-black">
          <div className="w-full h-20">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 1000 1000"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              overflow="auto"
              shapeRendering="auto"
              fill="#ffffff"
            >
              <defs>
                <path
                  id="wavepath"
                  d="M 0 2000 0 500 Q 17 300 34 500 t 34 0 34 0 34 0 34 0 34 0 34 0 34 0 34 0 34 0 34 0 34 0 34 0 34 0 34 0 34 0 34 0 34 0 34 0 34 0 34 0 34 0 34 0 34 0 34 0 34 0 34 0 34 0 34 0 34 0 34 0 34 0  v1000 z"
                />
              </defs>
              <g>
                <use
                  xlinkHref="#wavepath"
                  y="222"
                  className="bg-sky-400 border-t-2 border-black fill-sky-400"
                ></use>
              </g>
            </svg>
          </div>
          <div className="flex justify-center items-center w-full h-20 bg-sky-400">
            <div className="w-full font-serif font-bold marquee">
              <ul className="marquee__content">
                <li>
                  <span>&#9733;</span>
                </li>
                <li>React</li>
                <li>
                  <span>&#9733;</span>
                </li>
                <li>Java</li>
                <li>
                  <span>&#9733;</span>
                </li>
                <li>Rust</li>
                <li>
                  <span>&#9733;</span>
                </li>
                <li>Go</li>
                <li>
                  <span>&#9733;</span>
                </li>
                <li>FOSS</li>
                <li>
                  <span>&#9733;</span>
                </li>
                <li>Elixir</li>
                <li>
                  <span>&#9733;</span>
                </li>
                <li>Javascript</li>
                <li>
                  <span>&#9733;</span>
                </li>
                <li>Typescript</li>
              </ul>
              <ul className="marquee__content" aria-hidden="true">
                <li>
                  <span>&#9733;</span>
                </li>
                <li>React</li>
                <li>
                  <span>&#9733;</span>
                </li>
                <li>Java</li>
                <li>
                  <span>&#9733;</span>
                </li>
                <li>Rust</li>
                <li>
                  <span>&#9733;</span>
                </li>
                <li>Go</li>
                <li>
                  <span>&#9733;</span>
                </li>
                <li>FOSS</li>
                <li>
                  <span>&#9733;</span>
                </li>
                <li>Elixir</li>
                <li>
                  <span>&#9733;</span>
                </li>
                <li>Javascript</li>
                <li>
                  <span>&#9733;</span>
                </li>
                <li>Typescript</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full min-h-screen max-h-full bg-orange-200">
        <div className="flex justify-center items-center pt-20">
          <h3 className="text-5xl font-bold">My Projects</h3>
        </div>
      </section>
    </>
  );
}

export default App;
