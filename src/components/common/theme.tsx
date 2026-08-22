import { Moon, Sun } from "lucide-react"
import { IconButton } from "../pouf/Button"

export default function ThemeToggle() {
  function toggleTheme() {
    const current =
      document.documentElement.getAttribute("data-theme") || "light"

    const next = current === "dark" ? "light" : "dark"

    document.documentElement.setAttribute("data-theme", next)
    localStorage.setItem("theme", next)
  }

  return (
    <IconButton
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="theme-toggle"
      icon={
        <>
        <Sun  className="dark-icon-theme-change size-4"/>
        <Moon className="light-icon-theme-change size-4"/>
        </>
      }
      label=""
      size="sm"
      variant="solid"
    />
  )
}
