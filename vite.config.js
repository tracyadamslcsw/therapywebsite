import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import Sitemap from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    Sitemap({
      hostname: 'https://www.tracyadamslcsw.com',
      generateRobotsTxt: false,
      routes: [
        '/',
        '/about',
        '/services',
        '/emdr',
        '/ifs',
        '/grief',
        '/investment',
        '/contact',
      ],
    }),
  ],
})
