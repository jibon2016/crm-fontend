import { defineConfig} from "vite";
import { createVuePlugin as vue} from 'vite-plugin-vue2'
import { fileURLToPath } from 'url';
import path from 'path';

const filename = fileURLToPath(import.meta.url);
const pathSegments = path.dirname(filename);

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(pathSegments, './src'),
      find: /^~(.*)$/,
      replacement: '$1',
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
    server: {
      hmr: { overlay: false },
    },
  },
})
