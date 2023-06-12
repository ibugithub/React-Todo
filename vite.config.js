import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { dirname } from 'path'

const fileName = fileURLToPath(import.meta.url);
const dirName = dirname(fileName)
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': `${dirName}/src`,
    },
  },
});
