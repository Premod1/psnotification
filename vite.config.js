import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.js"),
      name: 'psnotification',
      formats: ['es', 'umd'],
      fileName: (format) => `psnotification.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
    cssCodeSplit: false,
    minify: false,
  },
  css: {
    preprocessorOptions: {
      css: {
        additionalData: `@import "./src/style.css";`
      }
    }
  }
});
