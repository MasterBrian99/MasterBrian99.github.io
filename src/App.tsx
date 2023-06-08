function App() {
  return (
    <>
      <section className="flex relative flex-col justify-center items-center min-h-screen max-h-full bg-purple-200">
        <div className="flex fixed top-0 z-20 justify-between items-center w-full h-20 bg-white border-b-2 border-black sm:flex md:flex lg:hidden xl:hidden 2xl:hidden">
          <h3 className="pl-4 text-3xl font-bold">Portfolio.</h3>
        </div>
        <div className="hidden absolute top-12 z-20 justify-between items-center px-8 w-2/3 h-28 bg-white rounded-full border-2 border-black sm:w-10/12 md:w-10/12 lg:w-11/12 xl:w-3/4 2xl:w-2/3 sm:hidden md:hidden lg:flex xl:flex 2xl:flex">
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
          <h1 className="text-5xl font-bold text-center text-gray-800 capitalize sm:text-5xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
            Code to bring <br /> ideas to life
          </h1>
        </div>
        <div className="pt-12 w-10/12 text-lg sm:w-10/12 md:w-10/12 lg:w-4/6 xl:w-3/4 2xl:w-2/4 sm:text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl fadeInUp-animation">
          <p className="text-center text-md">
            As a seasoned developer, I possess a proven track record in
            successfully delivering projects using Node.js, React, Java, Go and
            Rust. With a strong commitment to excellence, I excel in building
            scalable applications and fostering collaboration across diverse
            teams. Let's connect and discuss how I can contribute to your
            project's success!
          </p>
        </div>
        <div className="absolute z-10 w-full h-full">
          <img
            className="absolute top-80 right-80 w-32 hover:animate-spin-slow"
            src={
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            }
            alt=""
          />
          <img
            className="absolute right-40 bottom-52 w-32 duration-300 transform-gpu hover:rotate-12"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          />

          <img
            className="absolute left-40 top-80 w-36 duration-700 transform-gpu hover:rotate-360"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg"
          />

          <img
            className="absolute bottom-12 left-40 w-36 duration-300 transform-gpu hover:-rotate-12"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
          />

          <img
            className="absolute bottom-16 left-2/4 w-36"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elixir/elixir-original-wordmark.svg"
          />
        </div>
      </section>
      <section className="h-screen w-fll">asd</section>
    </>
  );
}

export default App;
