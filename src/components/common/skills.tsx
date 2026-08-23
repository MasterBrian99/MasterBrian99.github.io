import { Heading, Text, Eyebrow, Highlight } from "../pouf/text"
import { Badge, Blob } from "../pouf/media"
import { toneClass, type Tone } from "../pouf/tone"
import type { IconName } from "../pouf/Icon"
import { cn } from "@/lib/utils"
import raw from "../../data/skills.json"

const categories: { key: keyof typeof raw; label: string; icon: IconName; tone: Tone }[] = [
  { key: "backend", label: "Backend", icon: "database", tone: "purple" },
  { key: "frontend", label: "Frontend", icon: "menu", tone: "blue" },
  { key: "tools", label: "Tools & Ops", icon: "settings", tone: "orange" },
  { key: "concepts", label: "Concepts", icon: "sparkle", tone: "yellow" },
]

const Skills = () => {
  return (
    <section id="skills" className="relative py-24">
      <div className="relative mx-auto max-w-6xl px-6">
        <header className="mb-16 max-w-2xl">
          <Eyebrow>Skills</Eyebrow>
          <Heading
            level={2}
            className="mt-4 text-3xl leading-[1.15] tracking-[-0.5px] md:text-4xl lg:text-[44px]"
          >
            A toolkit that{" "}
            <Highlight tone="yellow" className="-rotate-2">
              flexes
            </Highlight>{" "}
            with the problem.
          </Heading>
          <Text muted className="mt-4 block text-[15px] leading-[1.7]">
            The languages, platforms, and habits I reach for when the part is
            tricky.
          </Text>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {categories.map(({ key, label, icon, tone }) => {
            const items = raw[key]
            return (
              <article
                key={key}
                className={cn(
                  "cushion-card relative overflow-hidden rounded-[28px] bg-surface p-8 transition duration-300 hover:-translate-y-1"
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute -top-14 -right-14 h-40 w-40 rounded-full bg-(--tone) opacity-20 blur-2xl",
                    toneClass(tone)
                  )}
                />
                <div className="relative">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <Blob icon={icon} tone={tone} size="md" />
                      <div>
                        <p className="text-lg font-black leading-none">{label}</p>
                        <p className="mt-1 text-[12px] font-bold uppercase tracking-[0.6px] text-muted">
                          {items.length} skills
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <Badge key={skill.name} tone={tone}>
                        {skill.name}
                      </Badge>
                    ))}
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

export default Skills
