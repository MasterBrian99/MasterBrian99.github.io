"use client";

import { animate, inView, stagger } from "motion";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    // Animate the entire container
    animate(".about-container", { opacity: [0, 1] }, { duration: 0.5 });

    // Animate heading
    animate(
      ".about-heading",
      { y: [20, 0], opacity: [0, 1] },
      { duration: 0.5, delay: 0.2 }
    );

    // Animate paragraphs with staggered effect
    inView(
      ".about-paragraph",
      (target) => {
        animate(target, { y: [20, 0], opacity: [0, 1] }, { duration: 0.5 });
      },
      { margin: "-10% 0px" }
    );

    // Animate CTA button
    animate(
      ".about-cta",
      { y: [20, 0], opacity: [0, 1] },
      { duration: 0.5, delay: 1.2 }
    );

    // Set up staggered animation for paragraphs
    const paragraphs = document.querySelectorAll(".about-paragraph");
    animate(
      paragraphs,
      { y: [20, 0], opacity: [0, 1] },
      {
        delay: stagger(0.2, { startDelay: 0.6 }),
        duration: 0.5,
      }
    );
  }, []);

  return (
    <section className="px-4 mb-20">
      <div className="about-container max-w-3xl mx-auto text-center">
        <h2 className="about-heading text-3xl font-bold mb-6 text-primary">
          About Me
        </h2>

        <div className="space-y-6">
          <p className="about-paragraph text-lg leading-relaxed">
            Experienced Full-Stack Software Engineer and React.js & Linux
            Enthusiast with a proven track record in designing and deploying
            scalable web applications using modern frameworks like React, Spring
            Boot, and Node.js.
          </p>

          <p className="about-paragraph text-lg leading-relaxed">
            Expertise in leveraging cloud platforms and containerization tools
            (Docker, Kubernetes) to optimize CI/CD pipelines and enhance
            application performance. Passionate about open-source development
            (FOSS) and proficient in multiple programming languages, including
            JavaScript, Java, Elixir, Rust, and Go. Skilled in DevOps practices,
            performance optimization, and delivering user-focused, efficient
            solutions while driving innovation through continuous exploration of
            emerging technologies.
          </p>
        </div>

        <div className="about-cta mt-10">
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
