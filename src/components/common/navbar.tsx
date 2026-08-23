import { Navbar as PoufNavbar } from "@/components/pouf/navbar"
import { Waypoints } from "lucide-react"
import { Avatar } from "../pouf/avatar"
import { Button } from "../pouf/Button"
import ThemeToggle from "./theme"
const brand = (
  <div className="flex items-center justify-center">
    <Avatar size="md" icon={<Waypoints />} />
    <p className="ml-2">Pasindu</p>
  </div>
)
const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Writing", href: "#writing" },
  { label: "Debug Log", href: "#debug-log" },
  { label: "Contact", href: "#contact" },
]

const Navbar = () => {
  return (
    <div className="pt-4">
      <PoufNavbar
        brand={brand}
        links={links}
        actions={
          <>
            <ThemeToggle />
            <Button
              size="sm"
              className="hidden! md:block!"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact
            </Button>
          </>
        }
      />
    </div>
  )
}

export default Navbar
