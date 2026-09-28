import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import compression from 'vite-plugin-compression'

const compressible = /\.(js|mjs|json|css|html|svg)$/i

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    compression({ algorithm: 'gzip', ext: '.gz', filter: compressible }),
    compression({ algorithm: 'brotliCompress', ext: '.br', filter: compressible }),
  ],
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    sourcemap: false,
    modulePreload: {
      resolveDependencies: (_filename, deps) =>
        deps.filter((dep) => !dep.includes('HeroProductScene') && !dep.includes('framer-motion')),
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/framer-motion')) return 'motion'
          if (id.includes('node_modules/lucide-react')) return 'icons'
          if (id.includes('node_modules/react-dom') || id.includes('node_modules/react/')) return 'react'
          if (id.includes('node_modules/react-router')) return 'router'
          return undefined
        },
      },
    },
  },
})
