import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="relative ">
      <div className="h-screen w-full flex flex-col justify-center items-center text-center ">
        <h1 className="uppercase text-2xl leading-16 sm:text-4xl sm:leading-24 md:text-5xl md:leading-36 lg:text-7xl font-extrabold max-w-4xl mx-auto">
          Code to <HighlightedText text="bring" /> ideas <br /> to{" "}
          <HighlightedText text="life" />
        </h1>
        <p className="mt-4 max-w-4xl mx-auto sm:text-xl text-sm md:text-3xl font-bold text-neutral-700 dark:text-neutral-400 text-center">
          React Developer and System Engineer specializing in Rust, Go, Java,
          and modern frameworks. I build scalable, high-performance solutions
          with precision and creativity. Let’s create something extraordinary.
        </p>
        <Button size="lg" className="mt-8">
          Let's Work Together
        </Button>
      </div>
      <hr className=" border-t-8 " />

      <div className="">
        <div className="absolute top-20 left-20 arc-shape -z-10  md:w-40  w-32"></div>
        <div className="absolute top-40 md:left-40 left-48 star-shape -z-10 md:w-72 w-28"></div>
        <div className="absolute bottom-40 right-40 star-shape -z-10 md:w-72 w-28"></div>
        <div className="absolute top-40 right-40  zig-zag-line-shape w-52 -z-10 rotate-12 hidden md:block"></div>
        <div className="absolute bottom-40 left-40  zig-zag-line-shape w-52 -z-10 -rotate-12 hidden md:block"></div>
      </div>
    </div>
  );
};

export default Hero;

function HighlightedText({ text }: { text: string }) {
  return (
    <span className="bg-white p-1 px-4 border-4 border-black rounded-2xl transition-all shadow-shadow hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none cursor-pointer">
      {text}
    </span>
  );
}
