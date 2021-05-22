import reactRefresh from '@vitejs/plugin-react-refresh'

/**
 * https://vitejs.dev/config/
 * @type { import('vite').UserConfig }
 */
export default {
  plugins: [reactRefresh()],
  server: {
    hmr: {
      port: 3000,
    },
    proxy: {
      '/query': {
        target: 'https://Final-Project-AJAX-Server-innkuika.ecs162instruct.repl.co',
        changeOrigin: true,
        secure: false,
        ws: true
      }
    }
  },

}
