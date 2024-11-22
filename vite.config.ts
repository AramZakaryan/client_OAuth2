import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      // Enables CSS Modules
      scopeBehaviour: 'local', // 'local' ensures all class names are scoped locally by default
      generateScopedName: '[name]__[local]___[hash:base64:5]', // Optional: Customize class naming
    },
  },
  resolve: {
    alias: {
      // Set up aliases if needed
      '@': '/src',
    },
  },
});
