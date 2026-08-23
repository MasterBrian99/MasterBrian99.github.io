// @ts-check

import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"
import react from "@astrojs/react"
import sitemap from "@astrojs/sitemap"

// https://astro.build/config
export default defineConfig({
  site: "https://pasindupramodya.com",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    react(),
    sitemap({
      customPages: ["https://pasindupramodya.com/"],
      serialize(item) {
        return {
          ...item,
          changefreq: /** @type {import('@astrojs/sitemap').ChangeFreqEnum} */ (
            "weekly"
          ),
          priority: item.url === "https://pasindupramodya.com/" ? 1.0 : 0.8,
          lastmod: new Date().toISOString(),
        }
      },
    }),
  ],
})
