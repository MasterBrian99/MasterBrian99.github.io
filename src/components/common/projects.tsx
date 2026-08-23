import { Heading, Text, Eyebrow, Highlight } from "../pouf/text"
import { Badge, Blob } from "../pouf/media"
import { Icon } from "../pouf/Icon"
import { buttonClasses } from "../pouf/Button"
import { cn } from "@/lib/utils"
import { toneClass, type Tone } from "../pouf/tone"
import raw from "../../data/projects.json"

interface Project {
  id: number
  title: string
  description: string
  tech: string[]
  highlights: string[]
  github: string
  live: string | null
}

const { projects } = raw as { projects: Project[] }

const tones: Tone[] = ["purple", "blue", "mint", "yellow", "orange", "pink"]
const icons = ["database", "target", "chart", "lab", "shield", "sparkle"] as const

const toUrl = (s: string) => (s.startsWith("http") ? s : `https://${s}`)

const Projects = () => {
  return (
    <section id="projects" className="relative py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-blue/20 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <header className="mb-16 max-w-2xl">
          <Eyebrow>Projects</Eyebrow>
          <Heading
            level={2}
            className="mt-4 text-3xl leading-[1.15] tracking-[-0.5px] md:text-4xl lg:text-[44px]"
          >
            Things I've{" "}
            <Highlight tone="orange" className="-rotate-2">
              built and shipped
            </Highlight>
            .
          </Heading>
          <Text muted className="mt-4 block text-[15px] leading-[1.7]">
            Experiments, tooling, and systems that i built
          </Text>
        </header>

        <div className="columns-1 gap-6 md:columns-2 lg:columns-3">
          {projects.map((project, i) => {
            const tone = tones[i % tones.length]
            const icon = icons[i % icons.length]
            return (
              <article
                key={project.id}
                className="cushion-card relative mb-6 break-inside-avoid overflow-hidden rounded-[28px] bg-surface p-7 transition duration-300 hover:-translate-y-1"
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute -right-12 -top-12 h-36 w-36 rounded-full bg-(--tone) opacity-20 blur-2xl",
                    toneClass(tone)
                  )}
                />
                <div className="relative">
                  <div className="flex items-center justify-between gap-3">
                    <Blob icon={icon} tone={tone} size="sm" />
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <Badge key={t} tone="mint">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Heading level={3} className="mt-4 text-2xl leading-tight">
                    {project.title}
                  </Heading>

                  <Text className="mt-3 block text-[16px] leading-[1.7]">
                    {project.description}
                  </Text>

                  {project.highlights.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {project.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-2 text-[13px] font-bold"
                        >
                          <Icon name="ok" size="sm" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <a
                      href={toUrl(project.github)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={buttonClasses({ variant: "quiet", size: "sm" })}
                    >
                      <Icon name="github" size="sm" />
                      GitHub
                    </a>
                    {project.live && (
                      <a
                        href={toUrl(project.live)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={buttonClasses({ tone: "blue", size: "sm" })}
                      >
                        <Icon name="external" size="sm" />
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
