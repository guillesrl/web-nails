import { defineConfig } from 'vite';

export default defineConfig({
  publicDir: false,
  build: {
    lib: {
      entry: 'src/cal-booker.jsx',
      formats: ['es'],
      fileName: 'cal-booker',
    },
    cssCodeSplit: false,
    outDir: 'public/assets',
    emptyOutDir: true,
  },
});
