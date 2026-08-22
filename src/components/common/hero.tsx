import React from "react"
import { Heading, Highlight, Text } from "../pouf/text"

const Hero = () => {
  return (
    <div>
      <div className="flex h-[90vh] flex-col items-center justify-center">
        <div className="">
          <Heading level={1} className="text-[6rem]">
            DESIGNING SYSTEMS
          </Heading>
          <div className="flex justify-center">
            <Heading level={1} className="text-[6rem]">
              THAT
              <span className="ml-2">
                <Highlight className="-rotate-3">SCALE</Highlight>
              </span>
            </Heading>
          </div>
        </div>
        <div className="my-5 w-2/3 text-center">
          <Text className="text-2xl ">
            System engineer passionate about scalable architecture, performance
            optimization, and building clean, reliable systems.
          </Text>
        </div>
      </div>
    </div>
  )
}

export default Hero
