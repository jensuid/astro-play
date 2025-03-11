// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site:'https://jensuid/github.io',
  base:'astro-play',
  integrations: [
    react(),
    tailwindcss({
      applyBaseStyles:false,
    })
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});