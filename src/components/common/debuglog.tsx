import { Heading, Eyebrow, Highlight } from "../pouf/text"
import { Badge, Blob } from "../pouf/media"
import type { IconName } from "../pouf/Icon"
import type { Tone } from "../pouf/tone"
import raw from "../../data/debuglog.json"

interface Update {
  id: number
  time: string
  category: string
  title: string
  content: string
  icon: IconName
}

const { lastSync } = raw
const updates = raw.updates as Update[]

const categoryTones: Record<string, Tone> = {
  work: "purple",
  learning: "blue",
  reading: "yellow",
  music: "pink",
  video: "orange",
}
const fallbackTone: Tone = "mint"

const pad = (n: number) => String(n).padStart(2, "0")

const DebugLog = () => {
  return (
    <section id="debug-log" className="relative py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-mint/20 blur-3xl"
      />
      <div className="relative mx-auto max-w-4xl px-6">
        <header className="mb-12">
          <Eyebrow>Debug Log</Eyebrow>
          <Heading
            level={2}
            className="mt-4 text-3xl leading-[1.15] tracking-[-0.5px] md:text-4xl lg:text-[44px]"
          >
            What's on my{" "}
            <Highlight tone="mint" className="-rotate-2">
              bench
            </Highlight>{" "}
            today.
          </Heading>
          <div className="mt-4 flex items-center gap-3">
            <Badge tone="mint">Synced {lastSync}</Badge>
            <span className="text-[13px] font-bold text-muted">
              manually updated daily
            </span>
          </div>
        </header>

        <div className="cushion-card overflow-hidden rounded-[32px] bg-surface">
          <div className="flex items-center justify-between gap-3 border-b border-border/60 bg-bg px-6 py-4">
            <div className="flex items-center gap-2">
              <span aria-hidden="true" className="size-3 rounded-full bg-purple" />
              <span aria-hidden="true" className="size-3 rounded-full bg-yellow" />
              <span aria-hidden="true" className="size-3 rounded-full bg-mint" />
            </div>
            <span className="font-mono text-[13px] font-bold text-muted">
              today.log
            </span>
          </div>

          <ul className="px-6 py-2">
            {updates.map((update, i) => {
              const tone = categoryTones[update.category] ?? fallbackTone
              return (
                <li
                  key={update.id}
                  className="group flex items-start gap-4 border-b border-border/60 py-5 last:border-0"
                >
                  <span
                    aria-hidden="true"
                    className="pt-1 font-mono text-[12px] font-bold text-muted opacity-60"
                  >
                    {pad(i + 1)}
                  </span>
                  <Blob icon={update.icon} tone={tone} size="sm" />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
                      <h3 className="text-[16px] font-black leading-tight">
                        {update.title}
                      </h3>
                      <Badge tone={tone}>{update.category}</Badge>
                    </div>
                    <p className="mt-2 font-mono text-[13px] font-bold leading-[1.6] text-muted">
                      {update.time} · {update.content}
                    </p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default DebugLog
