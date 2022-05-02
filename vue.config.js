const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/search': {
        // target: 'https://Backend-DianasDog.app.secoder.net', // 伺服器地址
        // secure: false,
        target: 'http://localhost:80',
        changeOrigin: true,
      }
    }
  },
})
