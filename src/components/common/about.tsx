import { Heading, Text, Eyebrow, Highlight } from "../pouf/text"
import { Badge } from "../pouf/media"
import { buttonClasses } from "../pouf/Button"

const skills = [
  { label: "System Design", tone: "purple" },
  { label: "Performance Engineering", tone: "mint" },
  { label: "Open Source", tone: "orange" },
  { label: "Database Design", tone: "blue" },
] as const

const About = () => {
  return (
    <section id="about" className="relative py-24">
     
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="cushion-card bg-surface rounded-[32px] p-8 sm:p-12 lg:p-16">
          <Eyebrow>About Me</Eyebrow>

          <Heading
            level={2}
            className="mt-4 text-3xl leading-[1.15] tracking-[-0.5px] md:text-4xl lg:text-[44px]"
          >
            I design the machinery that lets{" "}
            <Highlight tone="mint" className="-rotate-2">
              software scale
            </Highlight>{" "}
            quietly.
          </Heading>

          <Text muted className="mt-6 block text-[15px] leading-[1.8]">
            I'm a system engineer with 4+ years of experience building scalable
            backend systems and robust infrastructure. I thrive on tackling
            complex problems—whether it's optimizing databases, designing
            microservices, or implementing real-time data pipelines. Outside of
            coding, I love immersing myself in games, capturing moments through
            photography, and contributing to open-source projects that make a
            difference.
          </Text>

          <div className="mt-8 flex flex-wrap gap-2">
            {skills.map(({ label, tone }) => (
              <Badge key={label} tone={tone}>
                {label}
              </Badge>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className={buttonClasses({ tone: "purple", size: "md" })}
            >
              Get in touch
            </a>
            <a
              href="#projects"
              className={buttonClasses({
                tone: "blue",
                variant: "quiet",
                size: "md",
              })}
            >
              See my work
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
