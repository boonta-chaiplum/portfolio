const path = require('path')
import handlebars from 'vite-plugin-handlebars';

const base = '/portfolio/'

export default {
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
  plugins: [
    handlebars({
      partialDirectory: path.resolve(__dirname, 'src/partials'),
      helpers: {
        basePath: (value) => path.join(base, value),
      },
    }),
  ],
}
