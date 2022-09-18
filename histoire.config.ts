import { defineConfig } from 'histoire'
import { HstSvelte } from '@histoire/plugin-svelte'

export default defineConfig({
  // setupFile: '/src/histoire.setup.ts',
  plugins: [
    HstSvelte(),
  ],
  theme: {
    title: 'flyleaf',
    logo: {
      square: '/logo-small.jpg',
      light: '/logo-small.jpg',
      dark: '/logo-small.jpg'
    },
    logoHref: 'https://github.com/cunzaizhuyi/flyleaf',
    // favicon: './favicon.ico',
  }
})
