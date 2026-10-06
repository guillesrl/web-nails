import { defineConfig } from 'vite';

export default defineConfig({
  publicDir: false,
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
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
