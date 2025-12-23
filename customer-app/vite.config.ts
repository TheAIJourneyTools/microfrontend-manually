import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Build the microfrontend as a small IIFE library and externalize React
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.tsx'),
      name: 'CustomerApp',
      // produce exactly `customer-app.js` so host can load `/assets/customer-app.js`
      fileName: () => 'customer-app.js',
      formats: ['iife'],
    },
    rollupOptions: {
      // don't bundle React into the microfrontend
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
