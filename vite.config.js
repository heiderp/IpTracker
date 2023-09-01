import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@:': `${__dirname}/src`,
      '@components': `${__dirname}/src/components`,
      '@context': `${__dirname}/src/context`,
      '@hooks': `${__dirname}/src/hooks`,
      '@services': `${__dirname}/src/services`,
      '@utils': `${__dirname}/src/utils`,
      '@styles': `${__dirname}/src/styles`,
      '@assets': `${__dirname}/src/assets`,
    }
  }
})
