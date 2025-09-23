// @ts-check

import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: [
      "de",
      "en"
    ],
    defaultLocale: "de",
    fallback: {
      en: "de"
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'de',
        locales: {
          de: 'de-DE',
          en: 'en-US'
        }
      }
    })
  ],
  site: 'https://kwetter-de.github.io',
  vite: {
    plugins: [tailwindcss()]
  }
});