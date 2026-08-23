import { Footer, type FooterColumn } from "../pouf/footer"
import raw from "../../data/contact.json"

const { footer } = raw as {
  footer: {
    brand: string
    tagline?: string
    columns: FooterColumn[]
    note: string
  }
}

const SiteFooter = () => {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-10">
      <Footer
        brand={footer.brand}
        tagline={footer.tagline}
        columns={footer.columns}
        note={footer.note}
      />
    </div>
  )
}

export default SiteFooter
