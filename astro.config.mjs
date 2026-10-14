import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://ivikee7.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
});