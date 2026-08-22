import { Heading, Text, Eyebrow, Highlight } from "../pouf/text"
import { Badge, Blob } from "../pouf/media"
import { Icon } from "../pouf/Icon"
import { cn } from "@/lib/utils"
import { toneClass, type Tone } from "../pouf/tone"
import raw from "../../data/education.json"

interface Education {
  id: number
  degree: string
  institution: string
  location: string
  startDate: string
  endDate: string
  grade: string
  activities: string[]
}

const { education } = raw as { education: Education[] }

const tones: Tone[] = ["purple", "blue", "yellow", "pink", "mint", "orange"]

const Education = () => {
  return (
    <section id="education" className="relative py-24">
      <div className="relative mx-auto max-w-6xl px-6">
        <header className="mb-16 max-w-2xl">
          <Eyebrow>Education</Eyebrow>
          <Heading
            level={2}
            className="mt-4 text-3xl leading-[1.15] tracking-[-0.5px] md:text-4xl lg:text-[44px]"
          >
            The foundation I{" "}
            <Highlight tone="blue" className="-rotate-2">
              stand on
            </Highlight>
            .
          </Heading>
          <Text muted className="mt-4 block text-[15px] leading-[1.7]">
            Formal study and the workshops that shaped how I think about
            software.
          </Text>
        </header>

        <div className="grid gap-8 md:grid-cols-2">
          {education.map((ed, i) => {
            const tone = tones[i % tones.length]
            return (
              <article
                key={ed.id}
                className="cushion-card relative overflow-hidden rounded-[32px] bg-surface transition duration-300 hover:-translate-y-1"
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute -top-16 -right-16 h-48 w-48 rounded-full bg-(--tone) opacity-20 blur-2xl",
                    toneClass(tone)
                  )}
                />
                <div className="relative flex h-full flex-col gap-6 p-8 sm:p-10">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <Blob icon="school" tone={tone} size="lg" />
                      <div>
                        <Heading level={3} className="text-2xl leading-tight">
                          {ed.degree}
                        </Heading>
                        <p className="mt-1 text-sm font-black">{ed.institution}</p>
                      </div>
                    </div>
                    <Badge tone={tone}>
                      {ed.startDate} — {ed.endDate}
                    </Badge>
                  </div>

                  <p className="flex items-center gap-2 text-[13px] font-bold text-muted">
                    <Icon name="pin" size="sm" />
                    {ed.location}
                  </p>

                  {ed.grade && (
                    <div className="flex items-center gap-2">
                      <Icon name="star" size="sm" />
                      <span className="text-sm font-black">{ed.grade}</span>
                    </div>
                  )}

                  {ed.activities.length > 0 && (
                    <div className="mt-auto">
                      <p className="text-[12px] font-extrabold uppercase tracking-[1.5px] text-muted">
                        Coursework
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {ed.activities.map((activity) => (
                          <Badge key={activity} tone="mint">
                            {activity}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Education
