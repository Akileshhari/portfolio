import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    {
      name: 'local-form-dev-handler',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.method === 'POST') {
            res.statusCode = 200
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ success: true, message: 'Message sent successfully' }))
            return
          }
          next()
        })
      },
    },
  ],
})
