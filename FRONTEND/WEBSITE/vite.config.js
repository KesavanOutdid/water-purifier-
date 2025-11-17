import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    server: {
        host: '0.0.0.0',
        port: 5050,
        strictPort: true,
        proxy: {
            '/api': {
                target: 'https://water-purifier.onrender.com',
                changeOrigin: true,
            },
            // '/upload': {
            //     target: 'http://localhost:5001',
            //     changeOrigin: true,
            // },
        },
    },
});