import vitePugPlugin from 'vite-plugin-pug-transformer';

import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [vitePugPlugin()],
  // server: {
  //   hmr: {
  //     protocol: 'ws',
  //     host: 'locahost',
  //   },
  //   watch: {
  //     userPolling: true
  //   }
  // }
});