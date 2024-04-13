import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import db from "@astrojs/db";

import deno from '@astrojs/deno';



// https://astro.build/config
export default defineConfig({



  integrations: [
  //
  sitemap(), tailwind(), db()],
  output: 'server',
  adapter: deno(),
  
});