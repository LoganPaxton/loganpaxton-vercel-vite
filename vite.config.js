import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueRouter from 'vue-router'

export default defineConfig({
  plugins: [vue(), vueRouter()],
})

// https://vitejs.dev/config/
