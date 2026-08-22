import { cva, cx } from "class-variance-authority"
import type { ReactNode } from "react"
import { toneClass, type Tone } from "./tone"
import { cn } from "@/lib/utils"

interface HeadingProps {
  children: ReactNode
  level?: 1 | 2 | 3
  className?: string
}

const heading = cva("font-black [text-wrap:balance]", {
  variants: {
    level: {
      1: "pouf-h1 text-[48px] leading-[1.1] tracking-[-1px]",
      2: "pouf-h2 text-[28px] leading-[1.2] tracking-[-0.5px]",
      /* h1/h2 set 1.1/1.2; without this h3 inherits the body's 1.5 and its line
         box towers over the 44px blob it commonly sits beside. */
      3: "pouf-h3 text-[19px] leading-[1.2] tracking-[-0.2px]",
    },
  },
  defaultVariants: { level: 2 },
})

export function Heading({ children, level = 2, className }: HeadingProps) {
  const Tag = `h${level}` as const
  return <Tag className={cn(heading({ level, className }))}>{children}</Tag>
}

/** The reference's yellow highlight-swatch behind a word. */
export function Highlight({
  children,
  tone = "yellow",
  className,
}: {
  children: ReactNode
  tone?: Tone
  className?: string
}) {
  return (
    <span
      className={cx(
        "pouf-highlight rounded-control inline-block bg-[var(--tone,var(--yellow))] px-[14px] text-[var(--on-accent)]",
        "[box-shadow:inset_0_-6px_0_rgba(0,0,0,0.08)]",
        toneClass(tone),
        className
      )}
    >
      {children}
    </span>
  )
}

/** The reference's compact uppercase section eyebrow. The muted token clears
 * AA contrast on both the page background and white surfaces. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="pouf-eyebrow text-[14px] font-extrabold tracking-[2px] text-muted uppercase">
      {children}
    </div>
  )
}

interface TextProps {
  children: ReactNode
  size?: "sm" | "md"
  muted?: boolean
  /** Tabular numerals — use for any figure in a column that must align. */
  num?: boolean
  mono?: boolean
  truncate?: boolean
  className?:string
}

const text = cva("pouf-text font-bold [overflow-wrap:anywhere]", {
  variants: {
    size: { md: "text-[15px]", sm: "text-[13px]" },
    muted: { true: "text-muted" },
    num: {
      true: '[font-feature-settings:"tnum"] [font-variant-numeric:tabular-nums]',
    },
    mono: {
      true: "[font-family:ui-monospace,'SF_Mono',Menlo,monospace] [font-variant-numeric:tabular-nums]",
    },
    /* Truncation needs a real box. On an inline span the parent can be 120px
     * wide while the span's own visual rect remains its full 380px intrinsic
     * width, creating page overflow in documentation and real layouts. */
    truncate: { true: "block max-w-full min-w-0 truncate" },
  },
  defaultVariants: { size: "md" },
})

export function Text({
  children,
  size,
  muted,
  num,
  mono,
  truncate,
  className
}: TextProps) {
  return (
    // dir="auto" by default, and deliberately not opt-in.
    //
    // Almost everything an app renders is user-generated: names, titles and
    // raw message text, in whatever language the person writes. Without this,
    // a Persian or Arabic title renders with its emoji and punctuation on the
    // wrong side — visibly wrong, and easy to miss if your own test data is
    // all English.
    //
    // Safe as a blanket default: dir="auto" resolves from the first STRONG
    // character, and digits/punctuation are neutral — so "+2.41%" and "SKU-1420"
    // stay LTR. Opting in per call site would mean remembering it at every one,
    // which is how the bug comes back.
    <span dir="auto" className={cn(text({ size, muted, num, mono, truncate,className }))}>
      {children}
    </span>
  )
}
