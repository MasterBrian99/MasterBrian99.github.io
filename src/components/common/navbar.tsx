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
  { label: "Product", href: "1", active: true },
  { label: "Pricing", href: "2" },
  { label: "Docs", href: "3" },
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
            <Button size="sm" className="hidden! md:block!">Contact</Button>
          </>
        }
      />
    </div>
  )
}

export default Navbar
