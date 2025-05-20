// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config


export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          quietDeps: true, // Aquí se intenta silenciar los warnings de deps
        },
      },
    },
  },
});
