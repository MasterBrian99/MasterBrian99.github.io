import React from "react"
import { Heading, Text, Eyebrow, Highlight } from "../pouf/text"
import { Badge } from "../pouf/media"
import { Blob } from "../pouf/media"
import { cn } from "@/lib/utils"
import { toneClass, type Tone } from "../pouf/tone"
import raw from "../../data/experience.json"

interface Experience {
  id: number
  title: string
  company: string
  location: string
  startDate: string
  endDate: string
  description: string
  technologies: string[]
}

const { experiences } = raw as { experiences: Experience[] }

const tones: Tone[] = ["purple", "blue", "mint", "yellow", "orange", "pink"]
const icons = ["target", "database", "chart", "lab", "shield", "performance"] as const

const Experience = () => {
  return (
    <section id="experience" className="relative py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-40 h-72 w-72 rounded-full bg-mint/20 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <header className="mb-16 max-w-2xl">
          <Eyebrow>Experience</Eyebrow>
          <Heading
            level={2}
            className="mt-4 text-3xl leading-[1.15] tracking-[-0.5px] md:text-4xl lg:text-[44px]"
          >
            Where I've been behind the{" "}
            <Highlight tone="purple" className="-rotate-2">
              curtain
            </Highlight>
            .
          </Heading>
          <Text muted className="mt-4 block text-[15px] leading-[1.7]">
            A timeline of the teams and products I've helped scale, from frantic
            first months to calm, boring production.
          </Text>
        </header>

        <ol className="relative">
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-[14px] top-0 w-[3px] -translate-x-1/2 rounded-full bg-gradient-to-b from-purple via-mint to-pink opacity-60 md:left-1/2"
          />
          {experiences.map((exp, i) => {
            const tone = tones[i % tones.length]
            const icon = icons[i % icons.length]
            const isCurrent = exp.endDate.toLowerCase() === "present"
            const onLeft = i % 2 === 0
            return (
              <li
                key={exp.id}
                className={cn(
                  "relative pl-12 pb-12 last:pb-0 md:grid md:grid-cols-2 md:gap-16 md:pl-0"
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute left-[14px] top-9 h-4 w-4 -translate-x-1/2 rounded-full bg-[var(--tone,var(--purple))] ring-4 ring-surface [box-shadow:inset_0_-2px_0_rgba(0,0,0,0.15)] md:left-1/2",
                    toneClass(tone)
                  )}
                />
                <article
                  className={cn(
                    "cushion-card rounded-[24px] bg-surface p-6 transition duration-300 hover:-translate-y-1 md:p-8",
                    onLeft ? "md:col-start-1" : "md:col-start-2"
                  )}
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <Blob icon={icon} tone={tone} size="sm" />
                    <Badge tone={tone}>
                      {exp.startDate} — {exp.endDate}
                    </Badge>
                    {isCurrent && <Badge tone="mint">Current</Badge>}
                  </div>

                  <Heading level={3} className="mt-4 text-xl">
                    {exp.title}
                  </Heading>

                  <p className="mt-1 flex items-center gap-2 text-sm font-black text-[var(--tone,var(--ink))]">
                    {exp.company}
                  </p>
                  <p className="mt-1 text-[13px] font-bold text-muted">
                    {exp.location}
                  </p>

                  <Text className="mt-4 block text-[14px] leading-[1.7]">
                    {exp.description}
                  </Text>

                  {exp.technologies.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-[6px]">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} tone="mint">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  )}
                </article>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

export default Experience
