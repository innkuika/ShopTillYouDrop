import reactRefresh from '@vitejs/plugin-react-refresh'

/**
 * https://vitejs.dev/config/
 * @type { import('vite').UserConfig }
 */
export default {
  plugins: [reactRefresh()],
  server: {
    hmr: {
      port: 443,
    },
    proxy: {
      '/query': {
        target: 'https://Final-Project-AJAX-Server-innkuika.ecs162instruct.repl.co',
        // target:'http://localhost:4000',
        changeOrigin: true,
        secure: false,
        ws: true
      }
    }
  },

}
