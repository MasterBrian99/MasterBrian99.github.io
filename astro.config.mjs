// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

import yeskunallumami from "@yeskunall/astro-umami";

// https://astro.build/config
export default defineConfig({
  site: "https://pasindupramodya.com",
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
        };
      },
    }),
    yeskunallumami({
      id: "676c340f-d99b-41ee-aaa4-919d4e07ad55",
      hostUrl: "https://umami.pasindupramodya.com",
      endpointUrl: "https://umami.pasindupramodya.com",
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
