/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: 'jsdom',
    },
    server: {
        proxy: {
            "/api": "http://127.0.0.1:8000",
            "/pdf": "http://localhost:3000",
        }
    },
})
