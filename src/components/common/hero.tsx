import React from "react"
import { Heading, Highlight, Text } from "../pouf/text"
import RustIcon from "../hero-icons/rust-icon"
import ReactIcon from "../hero-icons/react-icon"
import ArchIcon from "../hero-icons/arch-icon"
import AwsIcon from "../hero-icons/aws-icon"
import CIcon from "../hero-icons/c-icon"
import JavaIcon from "../hero-icons/java-icon"
import ZigIcon from "../hero-icons/zig-icon"
import ElixirIcon from "../hero-icons/elixir-icon"
import { cn } from "@/lib/utils"

const floatingIcons = [
  {
    id:1,
    Icon: RustIcon,
    pos: "top-[18%] left-[8%]",
    size: "h-20 w-20",
    fill: "fill-amber-800",
    show: "",
    dur: 6,
    delay: 0,
  },
  {
    id:2,

    Icon: ReactIcon,
    pos: "top-[16%] right-[10%]",
    size: "h-14 w-14",
    show: "",
    dur: 7,
    delay: 0.4,
  },
  {
    id:3,

    Icon: ArchIcon,
    pos: "bottom-[20%] right-[12%]",
    size: "h-12 w-12",
    show: "hidden sm:block",
    dur: 6.5,
    delay: 0.8,
  },
  {
    id:4,

    Icon: AwsIcon,
    pos: "top-[65%] left-[30%]",
    size: "h-16 w-16",
    show: "hidden md:block",
    dur: 7.5,
    delay: 1.2,
  },
  {
    id:5,

    Icon: CIcon,
    pos: "top-[55%] left-[5%]",
    size: "h-16 w-16",
    show: "hidden md:block",
    dur: 6.8,
    delay: 0.6,
  },
  {
    id:6,

    Icon: JavaIcon,
    pos: "top-[52%] right-[6%]",
    size: "h-12 w-12",
    show: "hidden lg:block",
    dur: 7.2,
    delay: 1,
  },
  {
    id:7,

    Icon: ZigIcon,
    pos: "bottom-[16%] left-[13%]",
    size: "h-18 w-18",
    show: "hidden sm:block",
    dur: 6.2,
    delay: 0.2,
  },
  {
    id:8,

    Icon: ElixirIcon,
    pos: "top-[25%] right-[26%]",
    size: "h-13 w-13",
    show: "hidden md:block",
    dur: 7.8,
    delay: 1.4,
  },
]

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="relative flex min-h-[90vh] w-full flex-col items-center justify-center px-6 py-16">
        {floatingIcons.map(({ Icon, pos, size, fill, show, dur, delay ,id}) => (
          <div
            key={id}
            className={cn("absolute opacity-80", pos, show)}
            style={{
              animation: `hero-float ${dur}s ease-in-out ${delay}s infinite`,
            }}
          >
            <Icon
              className={cn(
                "transition-transform duration-300 hover:scale-125 hover:-rotate-6 hover:opacity-100",
                size,
                fill
              )}
            />
          </div>
        ))}
        <Heading level={1} className="text-4xl sm:text-5xl md:text-6xl lg:text-[6rem]">
          DESIGNING SYSTEMS
        </Heading>
        <div className="flex justify-center">
          <Heading level={1} className="text-4xl sm:text-5xl md:text-6xl lg:text-[6rem]">
            THAT
            <span className="ml-2">
              <Highlight className="-rotate-3">SCALE</Highlight>
            </span>
          </Heading>
        </div>
        <div className="my-5 w-full text-center sm:w-2/3">
          <Text className="text-lg sm:text-xl md:text-2xl">
            System engineer passionate about scalable architecture, performance
            optimization, and building clean, reliable systems.
          </Text>
        </div>
      </div>
    </div>
  )
}

export default Hero
