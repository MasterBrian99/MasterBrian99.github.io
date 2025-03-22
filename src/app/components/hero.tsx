import { AuroraText } from "@/components/ui/aurora-text";
import { BackgroundLines } from "@/components/ui/background-lines";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { SparklesText } from "@/components/ui/sparkles-text";
import React from "react";

const Hero = () => {
  return (
    <div className="flex h-screen w-full justify-center items-center">
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 ">
        <h2 className="text-3xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative  font-bold  text-center ">
          Where <AuroraText>Creativity </AuroraText> Meets Code,
          <br />{" "}
          <SparklesText
            text="Magic Happens"
            className="text-3xl md:text-4xl lg:text-7xl"
          />
        </h2>
        <p className="max-w-4xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
          A Web & React Developer and System Engineer specializing in Rust, Go,
          Java, and modern frameworks. I build scalable, high-performance
          solutions with precision and creativity. Let’s create something
          extraordinary.
        </p>
        <RainbowButton className="my-4">Contact Me</RainbowButton>
      </BackgroundLines>
    </div>
  );
};

export default Hero;

// bg-clip-text bg-gradient-to-b from-neutral-900 to-neutral-700
// dark:from-neutral-600 dark:to-white  tracking-tight

// Where Creativity Meets Code, Magic Happens.
