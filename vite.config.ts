import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Determine the base path depending on the deployment platform
let base = '/'
if (process.env.GITHUB_ACTIONS) {
  base = '/portfolio_app/'
} else if (process.env.GITLAB_CI) {
  base = '/portfolio/'
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base,
})


