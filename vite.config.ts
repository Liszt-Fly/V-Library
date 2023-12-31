import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      name: "VLibray",
      entry: path.resolve(__dirname, "src", "index.ts"),
      fileName: format => `vlibrary.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: "Vue"
        },
      }
    }
  }
})
