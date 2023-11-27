const path = require('path')
import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';

const base = '/portfolio/'

export default defineConfig({
  base,
  root: path.resolve(__dirname, 'src'),
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  server: {
    port: 8080,
    hot: true
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/index.html'),
        about: path.resolve(__dirname, 'src/about.html'),
        project_1: path.resolve(__dirname, 'src/project-1.html'),
        project_2: path.resolve(__dirname, 'src/project-2.html'),
        project_3: path.resolve(__dirname, 'src/project-3.html'),
        project_4: path.resolve(__dirname, 'src/project-4.html'),
        project_5: path.resolve(__dirname, 'src/project-5.html'),
      },
    },
  },
  plugins: [
    handlebars({
      partialDirectory: path.resolve(__dirname, 'src/partials'),
      helpers: {
        basePath: (value) => path.join(base, value),
      },
    }),
  ],
})
