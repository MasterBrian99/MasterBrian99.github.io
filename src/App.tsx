import { useState } from "react";
import ThemeSwitch from "./components/ThemeSwitch/ThemeSwitch";
import ThemeContextWrapper from "./context/ThemeContext/ThemeContextWrapper";

function App() {
  return (
    <>
      <ThemeContextWrapper>
        <ThemeSwitch />
        <h1 className="h-screen w-screen min-h-screen bg-neutral-900 dark:bg-green-500">
          Hello world!
        </h1>
      </ThemeContextWrapper>
    </>
  );
}
export default App;
