import { defineConfig } from 'vite';

export default defineConfig({
  base: '/goit-advancedjs-hw-03/',
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
});