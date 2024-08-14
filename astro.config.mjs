import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://chimerical-nougat-874d40.netlify.app",
  integrations: [react()]
});