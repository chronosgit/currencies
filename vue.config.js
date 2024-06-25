const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components/'),
        '@pages': path.resolve(__dirname, 'src/pages/'),
        '@router': path.resolve(__dirname, 'src/router/'),
        '@api': path.resolve(__dirname, 'src/api/'),
        '@assets': path.resolve(__dirname, 'src/assets/'),
        '@helpers': path.resolve(__dirname, 'src/helpers/'),
        '@mixins': path.resolve(__dirname, 'src/mixins/'),
      },
    },
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://nationalbank.kz',
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
});