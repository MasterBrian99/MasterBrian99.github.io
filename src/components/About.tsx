import React from "react";

const About = () => {
  return (
    <div className="h-screen w-full px-4 md:px-0 flex flex-col justify-center items-center text-center ">
      <div className="flex justify-center items-center mt-12 mb-4">
        <h1 className="text-4xl  font-bold  ">Who Am I ?</h1>
      </div>
      <div className="text-sm sm:text-lg md:px-4 md:text-xl lg:text-2xl max-w-6xl mx-auto text-neutral-700 dark:text-neutral-400 space-y-6 text-center">
        <p>
          I’m <span className="font-bold">Pasindu Pramodaya</span>, a software
          engineer with a strong focus on building scalable, maintainable, and
          production-grade applications. My work primarily revolves around Java,
          Rust, and React, where I design and implement systems that emphasize
          performance, clarity, and long-term reliability.
        </p>
        <p>
          Over the years, I’ve contributed to a variety of projects , from
          education platforms that enhance learning accessibility to payment
          systems that streamline financial operations. I’ve also worked on
          self-hosted server environments and containerized deployments,
          ensuring stable infrastructure and seamless CI/CD pipelines.
        </p>
        <p>
          I take a structured approach to software engineering, from requirement
          analysis and system design to deployment and monitoring. My experience
          includes working with Docker, PostgreSQL, and Linux-based
          environments.
        </p>
        <p>
          I value clean code, clear architecture, and efficient collaboration.
          Whether I’m optimizing backend performance or refining frontend
          interfaces, my goal remains consistent to deliver systems that are
          robust, intuitive, and built to last.
        </p>
        <p className="font-bold">
          I’m always driven by engineering precision, product reliability, and a
          commitment to quality at every level of development.
        </p>
      </div>
    </div>
  );
};

export default About;
