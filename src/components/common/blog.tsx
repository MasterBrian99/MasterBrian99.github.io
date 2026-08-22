import { Heading, Text, Eyebrow, Highlight } from "../pouf/text"
import { Badge, Blob } from "../pouf/media"
import { Icon } from "../pouf/Icon"
import { buttonClasses } from "../pouf/Button"
import { toneClass, type Tone } from "../pouf/tone"
import { cn } from "@/lib/utils"
import raw from "../../data/blog.json"

interface Article {
  id: number
  title: string
  description: string
  excerpt: string
  tags: string[]
  readTime: string
  date: string
  url: string
}

const { writingStyle, themes } = raw
const articles = raw.articles as Article[]
const featured = articles[articles.length - 1]
const others = articles.slice(0, -1)

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const formatDate = (d: string) => {
  const [y, m, day] = d.split("-").map(Number)
  return `${MONTHS[m - 1]} ${day}, ${y}`
}
const toUrl = (s: string) => (s.startsWith("http") ? s : `https://${s}`)

const tones: Tone[] = ["purple", "blue", "mint", "yellow", "orange", "pink"]

const Writing = () => {
  return (
    <section id="writing" className="relative py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-pink/20 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <header className="mb-16 max-w-2xl">
          <Eyebrow>Writing</Eyebrow>
          <Heading
            level={2}
            className="mt-4 text-3xl leading-[1.15] tracking-[-0.5px] md:text-4xl lg:text-[44px]"
          >
            Notes from the{" "}
            <Highlight tone="pink" className="-rotate-2">
              messy middle
            </Highlight>
            .
          </Heading>
        </header>

        <div className="grid gap-8 lg:grid-cols-3">
          <aside className="lg:col-span-1 lg:sticky lg:top-24 lg:self-start">
            <div className="cushion-card rounded-[28px] bg-surface p-8">
              <div className="flex items-center gap-4">
                <Blob icon="draft" tone="pink" size="md" />
                <p className="text-lg font-black leading-none">Why I write</p>
              </div>
              <Text muted className="mt-5 block text-[14px] leading-[1.7]">
                {writingStyle}
              </Text>

              <p className="mt-6 text-[12px] font-extrabold uppercase tracking-[1.5px] text-muted">
                Themes
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {themes.map((theme) => (
                  <Badge key={theme} tone="pink">
                    {theme}
                  </Badge>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <Icon name="history" size="sm" />
                <span className="text-sm font-black">
                  {articles.length} articles
                </span>
              </div>
            </div>
          </aside>

          <div className="flex flex-col gap-6 lg:col-span-2">
            {featured && (
              <article
                className={cn(
                  "cushion-card relative overflow-hidden rounded-[28px] bg-surface p-8 transition duration-300 hover:-translate-y-1"
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute -top-14 -right-14 h-44 w-44 rounded-full bg-(--tone) opacity-20 blur-2xl",
                    toneClass(tones[0])
                  )}
                />
                <div className="relative">
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge tone="purple">Featured</Badge>
                    <span className="text-[13px] font-bold text-muted">
                      {featured.readTime}
                    </span>
                    <span className="text-[13px] font-bold text-muted">
                      {formatDate(featured.date)}
                    </span>
                  </div>
                  <Heading level={3} className="mt-4 text-2xl leading-tight">
                    <a
                      href={toUrl(featured.url)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {featured.title}
                    </a>
                  </Heading>
                  <Text className="mt-3 block text-[15px] leading-[1.7]">
                    {featured.description}
                  </Text>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {featured.tags.map((tag) => (
                      <Badge key={tag} tone="mint">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <a
                    href={toUrl(featured.url)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(buttonClasses({ tone: "purple", size: "sm" }), "mt-6")}
                  >
                    Read article
                    <Icon name="external" size="sm" />
                  </a>
                </div>
              </article>
            )}

            <div className="grid gap-6 sm:grid-cols-2">
              {others.map((post, i) => {
                const tone = tones[1 + (i % (tones.length - 1))]
                return (
                  <article
                    key={post.id}
                    className={cn(
                      "cushion-card relative overflow-hidden rounded-[24px] bg-surface p-6 transition duration-300 hover:-translate-y-1"
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute -top-12 -right-12 h-32 w-32 rounded-full bg-(--tone) opacity-20 blur-2xl",
                        toneClass(tone)
                      )}
                    />
                    <div className="relative">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-[12px] font-bold text-muted">
                          {post.readTime}
                        </span>
                        <span className="text-[12px] font-bold text-muted">
                          {formatDate(post.date)}
                        </span>
                      </div>
                      <Heading level={3} className="mt-3 text-lg leading-tight">
                        <a
                          href={toUrl(post.url)}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {post.title}
                        </a>
                      </Heading>
                      <Text className="mt-2 block text-[13px] leading-[1.6] line-clamp-3">
                        {post.excerpt}
                      </Text>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <Badge key={tag} tone="blue">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <a
                        href={toUrl(post.url)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          buttonClasses({ variant: "quiet", size: "sm" }),
                          "mt-5"
                        )}
                      >
                        Read
                        <Icon name="external" size="sm" />
                      </a>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Writing
