import { Navbar as PoufNavbar } from "@/components/pouf/navbar"
import { Waypoints } from "lucide-react"
import { Avatar } from "../pouf/avatar"
import { Button } from "../pouf/Button"
const brand = (
  <div className="flex items-center justify-center">
    {/* <Waypoints /> */}
    {/* <Blob  icon={<Waypoints  className="size-4" />}  /> */}
    <Avatar size="md" icon={<Waypoints />} />
    <p className="ml-2">Pasindu</p>
  </div>
)
const links = [
  { label: 'Product', href: '#', active: true },
  { label: 'Pricing', href: '#' },
  { label: 'Docs', href: '#' },
]

const Navbar = () => {
  return (
    <div className="pt-4 ">
      <PoufNavbar brand={brand} links={links}  actions={<Button size="sm">Contact</Button>} />
    </div>
  )
}

export default Navbar
