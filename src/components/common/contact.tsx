import { Heading, Text, Eyebrow, Highlight } from "../pouf/text"
import { Blob } from "../pouf/media"
import { Icon } from "../pouf/Icon"
import type { IconName } from "../pouf/Icon"
import { cn } from "@/lib/utils"
import { toneClass, type Tone } from "../pouf/tone"
import raw from "../../data/contact.json"

interface Social {
  label: string
  href: string
  icon: IconName
}

const { contact } = raw as {
  contact: {
    eyebrow: string
    heading: string
    description: string
    email: string
    location: string
    availability: string
    socials: Social[]
  }
}

const tones: Tone[] = ["purple", "blue", "mint", "yellow", "orange", "pink"]

const Contact = () => {
  return (
    <section id="contact" className="relative py-24">
      <div className="relative mx-auto max-w-6xl px-6">
        <header className="mx-auto mb-16 max-w-2xl text-center">
          <Eyebrow>{contact.eyebrow}</Eyebrow>
          <Heading
            level={2}
            className="mt-4 text-3xl leading-[1.15] tracking-[-0.5px] md:text-4xl lg:text-[44px]"
          >
            Let's build something{" "}
            <Highlight tone="purple" className="-rotate-2">
              reliable
            </Highlight>
            .
          </Heading>
          <Text muted className="mt-4 block text-[15px] leading-[1.7]">
            {contact.description}
          </Text>
        </header>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="cushion-control rounded-[32px] bg-(--tone,var(--purple)) p-8 text-(--on-accent) lg:p-12">
            <Blob icon="mail" tone="yellow" size="lg" />
            <Heading level={3} className="mt-8 text-2xl leading-tight">
              Have a system to untangle?
            </Heading>
            <Text className="mt-3 block text-[15px] leading-[1.7]">
              Email me directly — I read every message and reply within a couple
              of days.
            </Text>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${contact.email}`}
                className="cushion-card rounded-control bg-surface text-ink inline-flex items-center gap-2 px-6 py-3 text-[15px] font-black"
              >
                <Icon name="mail" size="sm" />
                {contact.email}
              </a>
            </div>
            <div className="mt-8 flex items-center gap-2">
              <span
                aria-hidden="true"
                className="bg-mint size-2 rounded-full"
              />
              <span className="text-sm font-black">{contact.availability}</span>
            </div>
          </div>

          <div className="cushion-card bg-surface rounded-[32px] p-8 lg:p-12">
            <p className="flex items-center gap-2 text-sm font-black">
              <Icon name="pin" size="sm" />
              {contact.location}
            </p>

            <p className="mt-8 text-[12px] font-extrabold tracking-[1.5px] text-muted uppercase">
              Find me elsewhere
            </p>
            <div className="mt-3 flex flex-col">
              {contact.socials.map((social, i) => {
                const tone = tones[i % tones.length]
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={
                      social.href.startsWith("mailto") ? undefined : "_blank"
                    }
                    rel="noopener noreferrer"
                    className={cn(
                      "hover:bg-bg flex items-center gap-4 rounded-[18px] p-3 transition",
                      toneClass(tone)
                    )}
                  >
                    <Blob icon={social.icon} tone={tone} size="sm" />
                    <span className="text-[15px] font-black">
                      {social.label}
                    </span>
                    <span className="ml-auto text-muted">
                      <Icon name="external" size="sm" />
                    </span>
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
