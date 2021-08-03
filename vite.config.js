import reactRefresh from '@vitejs/plugin-react-refresh'

/**
 * https://vitejs.dev/config/
 * @type { import('vite').UserConfig }
 */
export default ({ command, mode }) => {
  if (command === 'serve') {
    return {
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
  } else {
    return {
      // build specific config
      plugins: [reactRefresh()],
      server: {
        hmr: {
          port: 443,
        },
        proxy: {
          '/query': {
            target:'https://api.shoptillyoudrop.life',
            changeOrigin: true,
            secure: false,
            ws: true
          }
        }
      },
    }
  }


}
