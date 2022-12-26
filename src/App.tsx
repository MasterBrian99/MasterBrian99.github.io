import { useState } from "react";
import ThemeSwitch from "./components/ThemeSwitch/ThemeSwitch";
import ThemeContextWrapper from "./context/ThemeContext/ThemeContextWrapper";

function App() {
  return (
    <>
      <ThemeContextWrapper>
        <section className="hero-background h-screen w-screen min-h-screen bg-[url('/background.svg')] dark:bg-[url('/background-dark.svg')]">
          <div className="main z-10 w-full  bg-white/30  dark:bg-neutral-900/70 h-full">
            <div className="flex justify-center items-center flex-col h-full w-full">
              <div className="waviy" style={"--P"}>
                <h1 className="text-6xl font-extrabold text-center">
                  CODE TO BRING
                  <div className="animate-text-hero text-7xl">
                    <span style="--i: 1">I</span>
                    <span style="--i: 2">D</span>
                    <span style="--i: 3">E</span>
                    <span style="--i: 4">A</span>
                    <span style="--i: 5">S</span>
                    <span style="--i: 6"> </span>
                    <span style="--i: 7">T</span>
                    <span style="--i: 8">O</span>
                    <span style="--i: 9"> </span>
                    <span style="--i: 10">L</span>
                    <span style="--i: 11">I</span>
                    <span style="--i: 12">F</span>
                    <span style="--i: 13">E</span>
                  </div>
                </h1>
              </div>
            </div>
          </div>
          <ThemeSwitch />
        </section>
      </ThemeContextWrapper>
    </>
  );
}
export default App;
// bg-neutral-900 dark:bg-green-500
