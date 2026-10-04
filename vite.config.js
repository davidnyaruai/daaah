import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Force .zip files to download instead of opening in the browser
const zipDownload = {
  name: 'zip-download',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      const path = (req.url || '').split('?')[0]
      if (path.endsWith('.zip')) {
        res.setHeader('Content-Disposition', `attachment; filename="${path.split('/').pop()}"`)
      }
      next()
    })
  },
}

export default defineConfig({
  plugins: [react(), zipDownload],
  server: { host: '0.0.0.0', port: 5173, strictPort: true, allowedHosts: true },
})
