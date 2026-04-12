import { defineConfig } from 'vite'
import pugTransformer from 'vite-plugin-pug-transformer'
import pugConfig from './pug.config.js'

export default defineConfig({
  plugins: [
    pugTransformer({
      pugLocals: pugConfig.locals,
    }),
  ],
  build: {
    outDir: 'dist',
  },
})
