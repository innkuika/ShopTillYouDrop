import reactRefresh from '@vitejs/plugin-react-refresh'

/**
 * https://vitejs.dev/config/
 * @type { import('vite').UserConfig }
 */
export default {
  // serve specific config
  plugins: [reactRefresh()],
  server: {
    hmr: {
      port: 443,
    },
    proxy: {
      '/query': {
        target:'http://localhost:4000',
        changeOrigin: true,
        secure: false,
        ws: true
      }
    }
  },
}
